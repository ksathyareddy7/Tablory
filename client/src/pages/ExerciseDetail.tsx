import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { useUnlockedBadgesDialog } from "@/contexts/BadgesUnlockedDialogContext";
import { Check, ChevronLeft, ChevronRight, Wand2 } from "lucide-react";

import SQLInput from "@/components/exercise-detail/SQLInput";
import HintsTab from "@/components/exercise-detail/HintsTab";
import SolutionsTab from "@/components/exercise/SolutionsTab";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import {
  useExerciseQuery,
  useExerciseAdjacentQuery,
  useHintsQuery,
  useRevealHintMutation,
  useSolutionsQuery,
  useUnlockSolutionsMutation,
} from "@/queries/exercises";
import {
  useExecuteQueryMutation,
  useExplainQueryMutation,
  useSubmitAnswerMutation,
} from "@/queries/query";
import { diffColumns, columnWarningText, formatSql } from "@/utils/sql";
import { fireSuccessConfetti } from "@/utils/confetti";
import { useExerciseTimerServer } from "@/hooks/useExerciseTimerServer";
import { STOP_REASON, TIMER_STATUS } from "@/utils/exerciseTimerMachine";
import type {
  ExerciseOutputTab,
  ResultState,
  SubmitMessage,
} from "@/types/exercise";

import ExerciseSubTabs from "@/components/exercise/ExerciseSubTabs";
import SchemaExplorer from "@/components/schema/SchemaExplorer";
import AiPromptMenu from "@/components/exercise-detail/AiPromptMenu";
import ExerciseTimerControls from "@/components/exercise/ExerciseTimerControls";
import OutputCard from "@/components/exercise/OutputCard";
import QueryRunSubmitButtons from "@/components/exercise/QueryRunSubmitButtons";
import ResultTable from "@/components/exercise-detail/ResultTable";
import ProblemWorkspace from "@/components/exercise/ProblemWorkspace";

type View = "question" | "schema" | "hints" | "solutions";

function toView(v: string | null): View {
  if (v === "schema" || v === "hints" || v === "solutions") return v;
  return "question";
}

function Badge({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "success";
}) {
  return (
    <span
      className={
        tone === "success"
          ? "px-3 py-1 bg-[var(--arena-tertiary-fixed)] text-[var(--arena-tertiary)] dark:text-[var(--arena-badge-easy-fg)] text-[10px] font-black rounded-full"
          : "px-3 py-1 bg-[var(--arena-surface-container-high)] text-[var(--arena-on-surface)] dark:text-[var(--arena-badge-medium-fg)] text-[10px] font-black rounded-full"
      }
    >
      {children}
    </span>
  );
}

export default function ExerciseDetailPage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const view = toView(searchParams.get("view"));

  const { user } = useAuth();
  const userId = user?.id;
  const { showUnlockedBadges } = useUnlockedBadgesDialog();

  const [query, setQuery] = useState("");
  const [result, setResult] = useState<ResultState>({
    rows: null,
    fields: null,
    error: null,
  });
  const [submitMessage, setSubmitMessage] = useState<SubmitMessage | null>(
    null,
  );
  const [outputTab, setOutputTab] = useState<ExerciseOutputTab>("results");
  const [explainPlan, setExplainPlan] = useState<any>(null);
  const [analyzePlan, setAnalyzePlan] = useState<any>(null);
  const [lastExplainQuery, setLastExplainQuery] = useState<string | null>(null);
  const [lastAnalyzeQuery, setLastAnalyzeQuery] = useState<string | null>(null);
  const [lastRunQuery, setLastRunQuery] = useState<string | null>(null);
  const [hasSuccessfulRun, setHasSuccessfulRun] = useState(false);
  const [columnWarning, setColumnWarning] = useState<string | null>(null);
  const userEditedQueryRef = useRef(false);
  const [activeSolutionId, setActiveSolutionId] = useState<any>(null);
  const [showAllPreviewRows, setShowAllPreviewRows] = useState(false);

  const timer = useExerciseTimerServer({
    userId,
    questionId: id,
    inactivityMs: 90_000,
  });

  const exerciseQuery = useExerciseQuery(id, userId);
  const adjacentQuery = useExerciseAdjacentQuery(id, userId);
  const hintsQuery = useHintsQuery(id, userId);
  const exercise = exerciseQuery.data;
  const hints = Array.isArray(hintsQuery.data) ? hintsQuery.data : [];

  const revealHintMutation = useRevealHintMutation(id as any, userId);
  const unlockSolutionsMutation = useUnlockSolutionsMutation(id as any, userId);

  const solutionsUnlocked = !!exercise?.solutions_unlocked;
  const canViewSolutions = solutionsUnlocked || exercise?.status === "solved";
  const solutionsQuery = useSolutionsQuery(
    id as any,
    userId,
    canViewSolutions && view === "solutions",
  );

  const executeMutation = useExecuteQueryMutation(userId);
  const submitMutation = useSubmitAnswerMutation(userId);
  const explainMutation = useExplainQueryMutation(userId);

  useEffect(() => {
    userEditedQueryRef.current = false;
    setQuery("");
    setResult({ rows: null, fields: null, error: null });
    setSubmitMessage(null);
    setOutputTab("results");
    setExplainPlan(null);
    setAnalyzePlan(null);
    setLastExplainQuery(null);
    setLastAnalyzeQuery(null);
    setLastRunQuery(null);
    setHasSuccessfulRun(false);
    setColumnWarning(null);
    setActiveSolutionId(null);
    setShowAllPreviewRows(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  useEffect(() => {
    if (userEditedQueryRef.current) return;
    if (!exercise) return;
    if (typeof exercise.last_query !== "string") return;
    if (!exercise.last_query) return;
    setQuery(exercise.last_query);
  }, [exercise?.last_query, exercise]);

  const engageTimer = () => {
    if (timer.status === TIMER_STATUS.STOPPED) return;
    timer.actions.recordActivity();
  };

  const handleQueryChange = (next: string) => {
    if (timer.status === TIMER_STATUS.IDLE) timer.actions.start();
    engageTimer();
    userEditedQueryRef.current = true;
    setQuery(next);
  };

  const computeColumnWarning = (fields: any[]) => {
    const { missing, extras } = diffColumns(exercise?.solution_columns, fields);
    return columnWarningText({ missing, extras });
  };

  const handleFormatQuery = () => {
    if (!query.trim()) return;
    try {
      handleQueryChange(formatSql(query));
    } catch (e: any) {
      console.warn("Failed to format SQL:", e?.message || e);
    }
  };

  const handleRunQuery = async () => {
    if (!query.trim() || !id) return;
    engageTimer();
    setSubmitMessage(null);
    try {
      const data = await executeMutation.mutateAsync({ questionId: id, query });
      setResult({ rows: data.rows, fields: data.fields, error: null });
      setLastRunQuery(query);
      setHasSuccessfulRun(true);
      setOutputTab("results");
      const warning = computeColumnWarning(data.fields || []);
      setColumnWarning(warning);
      if (data.isCorrect !== undefined) {
        const ok = !!data.isCorrect;
        setSubmitMessage({
          isCorrect: ok,
          text: ok
            ? "Output matches expected result!"
            : "Output does not match expected result.",
        });
        const description = warning
          ? `Columns: ${warning}`
          : ok
            ? "Submit when ready."
            : "Try again.";
        if (ok) toast.success("Looks correct", { description });
        else toast.error("Not correct yet", { description });
      }
    } catch (err: any) {
      const msg = err?.response?.data?.error || err.message;
      setResult({ rows: null, fields: null, error: msg });
      setLastRunQuery(null);
      setHasSuccessfulRun(false);
      setColumnWarning(null);
      toast.error("Query failed", { description: msg });
    }
  };

  const canExplain =
    !!query.trim() && hasSuccessfulRun && lastRunQuery === query;

  const handleExplain = async (analyze: boolean) => {
    if (!query.trim() || !id) return;
    if (!canExplain) {
      toast.info("Run first", {
        description:
          "Run your query once before using EXPLAIN / EXPLAIN ANALYZE so we can validate it executes successfully.",
      });
      return;
    }
    engageTimer();
    if (analyze) {
      if (lastAnalyzeQuery === query && analyzePlan) {
        setOutputTab("analyze");
        return;
      }
    } else {
      if (lastExplainQuery === query && explainPlan) {
        setOutputTab("explain");
        return;
      }
    }
    try {
      const data = await explainMutation.mutateAsync({
        questionId: id,
        query,
        analyze: !!analyze,
      });
      if (analyze) {
        setAnalyzePlan(data?.plan || null);
        setLastAnalyzeQuery(query);
      } else {
        setExplainPlan(data?.plan || null);
        setLastExplainQuery(query);
      }
      setOutputTab(analyze ? "analyze" : "explain");
    } catch (err: any) {
      const msg = err?.response?.data?.error || err.message;
      if (analyze) {
        setAnalyzePlan(null);
        setLastAnalyzeQuery(null);
      } else {
        setExplainPlan(null);
        setLastExplainQuery(null);
      }
      toast.error("Explain failed", { description: msg });
    }
  };

  const canSubmit =
    !!query.trim() && hasSuccessfulRun && lastRunQuery === query;

  const handleSubmit = async () => {
    if (!query.trim() || !id) return;
    if (!canSubmit) {
      toast.info("Run first", {
        description:
          "Run your query once before submitting so we can validate the output columns.",
      });
      return;
    }
    engageTimer();
    try {
      const data = await submitMutation.mutateAsync({ questionId: id, query });
      const ok = !!data.isCorrect;
      const expectedCount = (data as any)?.expectedRowCount;
      const actualCount = (data as any)?.actualRowCount;
      const reason = (data as any)?.reason || (data as any)?.message;
      setSubmitMessage({
        isCorrect: ok,
        text: ok
          ? "Correct! Great job."
          : reason || "Incorrect. Try again.",
        expectedRowCount: expectedCount,
        actualRowCount: actualCount,
        missingRows: (data as any)?.missingRows || null,
        extraRows: (data as any)?.extraRows || null,
      });
      if (ok) {
        fireSuccessConfetti();
        timer.actions.stop(STOP_REASON.SOLVED);
        toast.success("Solved", {
          description: "Nice work — keep going!",
        });
        if (Array.isArray((data as any)?.newBadges)) {
          showUnlockedBadges((data as any).newBadges);
        }
      } else {
        toast.error("Incorrect", {
          description:
            expectedCount !== null &&
            expectedCount !== undefined &&
            actualCount !== null &&
            actualCount !== undefined
              ? `Expected ${expectedCount} rows, got ${actualCount}.`
              : reason || "Adjust your query and try again.",
        });
      }
    } catch (err: any) {
      const msg = err?.response?.data?.error || err.message;
      toast.error("Submit failed", { description: msg });
    }
  };

  const handleRevealNextHint = async () => {
    const nextHint = hints.find((h: any) => !h.revealed);
    if (!nextHint) return;
    engageTimer();
    try {
      await revealHintMutation.mutateAsync(nextHint.id);
    } catch (err: any) {
      const msg = err?.response?.data?.error || err.message;
      toast.error("Hint failed", { description: msg });
    }
  };

  useEffect(() => {
    if (view !== "solutions") return;
    const list = Array.isArray(solutionsQuery.data) ? solutionsQuery.data : [];
    if (!list.length) return;
    if (activeSolutionId) return;
    setActiveSolutionId(list[0].id);
  }, [view, solutionsQuery.data, activeSolutionId]);

  const activeSolution = useMemo(() => {
    const list = Array.isArray(solutionsQuery.data) ? solutionsQuery.data : [];
    if (!activeSolutionId) return null;
    return (
      list.find((s: any) => String(s.id) === String(activeSolutionId)) || null
    );
  }, [solutionsQuery.data, activeSolutionId]);

  if (!id) return null;

  const prevExerciseId =
    adjacentQuery.data?.prevId ?? adjacentQuery.data?.data?.prevId ?? null;
  const nextExerciseId =
    adjacentQuery.data?.nextId ?? adjacentQuery.data?.data?.nextId ?? null;

  const questionPane = (
    <div className="h-full overflow-auto px-5 py-4">
      <div className="mb-3 flex items-center gap-2">
        {exercise?.status === "solved" ? (
          <Badge tone="success">
            <span className="inline-flex items-center gap-1">
              <Check className="h-3 w-3" aria-hidden="true" /> Solved
            </span>
          </Badge>
        ) : null}
      </div>
      <h1 className="mb-3 text-xl font-semibold tracking-tight text-[var(--arena-on-surface)]">
        {exercise?.id}. {exercise?.title}
      </h1>

      <div className="mb-5 flex items-center gap-3">
        {(() => {
          const diff = String(exercise?.difficulty || "").toLowerCase();
          const label = diff ? diff[0].toUpperCase() + diff.slice(1) : "Hard";
          const tone =
            diff === "easy"
              ? "lc-diff-easy"
              : diff === "medium"
                ? "lc-diff-medium"
                : "lc-diff-hard";
          return <span className={`text-sm font-medium ${tone}`}>{label}</span>;
        })()}
        <span className="text-xs text-[var(--arena-outline)]">
          Attempts {exercise?.attempts_count ?? 0}
        </span>
      </div>

      <p className="mb-6 text-base leading-7 text-[var(--arena-on-surface)]">
        {exercise?.description}
      </p>

      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <h3 className="text-[11px] font-black uppercase tracking-widest text-[var(--arena-label)]">
            Expected output (sample)
          </h3>
          {Array.isArray(exercise?.expected_preview_rows) &&
          exercise.expected_preview_rows.length > 5 ? (
            <button
              type="button"
              className={cn(
                "text-[11px] font-black uppercase tracking-widest",
                "text-[var(--arena-primary)] hover:opacity-90 transition-opacity",
              )}
              onClick={() => setShowAllPreviewRows((v) => !v)}
            >
              {showAllPreviewRows ? "Show 5" : "Show 10"}
            </button>
          ) : null}
        </div>

        {Array.isArray(exercise?.expected_preview_rows) &&
        exercise.expected_preview_rows.length ? (
          <ResultTable
            rows={
              (showAllPreviewRows
                ? exercise.expected_preview_rows
                : exercise.expected_preview_rows.slice(0, 5)) as any
            }
            fields={
              (Array.isArray(exercise?.expected_preview_fields)
                ? exercise.expected_preview_fields
                : exercise?.solution_columns) as any
            }
            error={null}
            expectedResultFormat
            variant="v2"
          />
        ) : (
          <>
            <h3 className="text-[11px] font-black uppercase tracking-widest mb-4 text-[var(--arena-label)]">
              Expected result columns
            </h3>
            <div className="flex flex-wrap gap-2">
              {(Array.isArray(exercise?.solution_columns)
                ? exercise.solution_columns
                : []
              ).map((c: string) => (
                <span
                  key={c}
                  className="px-4 py-2 bg-[var(--arena-surface-container-high)] text-[color:rgb(66_71_84/0.9)] dark:text-slate-200 text-[12px] font-bold rounded-full border border-[color:rgb(194_198_214/0.10)] dark:border-[color:rgb(42_51_66/0.6)]"
                >
                  {c}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );

  const editor = (
    <section className="flex h-full min-h-0 flex-col">
      <div
        className="flex h-full min-h-0 flex-col overflow-hidden"
        data-tour="exercise.editor"
      >
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-[var(--arena-outline-variant)] bg-[var(--arena-surface-container-low)] px-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-[var(--arena-outline)]">
              SQL
            </span>
            <ExerciseTimerControls timer={timer} />
          </div>
          <div className="flex items-center gap-2">
            <AiPromptMenu
              exercise={exercise}
              userQuery={query}
              lastRunQuery={lastRunQuery}
              result={result}
              submitMessage={submitMessage}
              columnWarning={columnWarning}
              explainPlan={outputTab === "analyze" ? analyzePlan : explainPlan}
              hints={hints}
            />
            <button
              type="button"
              onClick={handleFormatQuery}
              disabled={!query.trim()}
              className={cn(
                "lc-focus inline-flex h-8 cursor-pointer items-center justify-center gap-1.5 rounded-md px-3 text-xs font-medium",
                "border border-[var(--arena-outline-variant)] text-[var(--arena-on-surface)]",
                "transition-colors duration-200 hover:bg-[var(--arena-surface-container)]",
                "disabled:pointer-events-none disabled:opacity-50",
              )}
              title="Format SQL (Cmd/Ctrl+Shift+F)"
            >
              <Wand2 className="h-4 w-4" />
              Format
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 p-2">
          <SQLInput
            value={query}
            onChange={handleQueryChange}
            onEditorFocus={engageTimer}
            schemas={exercise?.schemas || []}
            relationships={exercise?.relationships || []}
          />
        </div>
      </div>
    </section>
  );

  const stepClass =
    "lc-focus inline-flex h-8 items-center gap-1 rounded-md px-2 text-sm text-[var(--arena-on-surface)] hover:bg-[var(--arena-surface-container)]";

  return (
    <ProblemWorkspace
      toolbar={
        <div className="flex h-12 items-center justify-between gap-3 px-3">
          <div className="flex min-w-0 items-center gap-2">
            {typeof prevExerciseId === "number" ? (
              <Link
                to={`/exercises/${prevExerciseId}`}
                className={stepClass}
                aria-label="Previous question"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </Link>
            ) : null}
            <p className="truncate text-sm font-medium text-[var(--arena-on-surface)]">
              {exercise?.id}. {exercise?.title}
            </p>
            {typeof nextExerciseId === "number" ? (
              <Link
                to={`/exercises/${nextExerciseId}`}
                className={stepClass}
                aria-label="Next question"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            ) : null}
          </div>
          <QueryRunSubmitButtons
            onRun={handleRunQuery}
            onSubmit={handleSubmit}
            runDisabled={!query.trim() || executeMutation.isPending}
            submitDisabled={!canSubmit || submitMutation.isPending}
            runPending={executeMutation.isPending}
            submitPending={submitMutation.isPending}
            dataTourRun="exercise.run"
            dataTourSubmit="exercise.submit"
          />
        </div>
      }
      left={
        <div className="flex h-full min-h-0 flex-col">
          <div className="py-2" data-tour="exercise.subtabs">
            <ExerciseSubTabs
              exerciseId={id}
              active={view}
              hintsCount={
                Array.isArray(hints)
                  ? hints.filter((h: any) => !!h?.revealed).length
                  : 0
              }
              prevExerciseId={prevExerciseId}
              nextExerciseId={nextExerciseId}
            />
          </div>
          <div className="min-h-0 flex-1 overflow-auto">
            {view === "question" ? questionPane : null}
            {view === "schema" ? (
              <SchemaExplorer
                schemas={exercise?.schemas || []}
                relationships={exercise?.relationships || []}
              />
            ) : null}
            {view === "hints" ? (
              <div className="p-4">
                <HintsTab
                  hints={hints}
                  revealingHint={revealHintMutation.isPending}
                  onRevealNextHint={handleRevealNextHint}
                />
              </div>
            ) : null}
            {view === "solutions" ? (
              <div className="p-4">
                <SolutionsTab
                  hints={hints}
                  unlocked={canViewSolutions}
                  loading={
                    solutionsQuery.isLoading ||
                    unlockSolutionsMutation.isPending
                  }
                  solutions={solutionsQuery.data}
                  activeSolutionId={activeSolutionId}
                  setActiveSolutionId={setActiveSolutionId}
                  onUnlock={async () => {
                    try {
                      await unlockSolutionsMutation.mutateAsync();
                    } catch (e: any) {
                      toast.error("Unlock failed", {
                        description:
                          e?.message || "Unable to unlock solutions.",
                      });
                    }
                  }}
                  exercise={exercise}
                  activeSolution={activeSolution}
                />
              </div>
            ) : null}
          </div>
        </div>
      }
      editor={editor}
      console={
        <div className="h-full overflow-auto" data-tour="exercise.output">
          <OutputCard
            outputTab={outputTab}
            setOutputTab={setOutputTab}
            canExplain={canExplain}
            onExplain={(analyze) => handleExplain(!!analyze)}
            onRunFirst={() =>
              toast.info("Run first", {
                description:
                  "Run your query once before using EXPLAIN / EXPLAIN ANALYZE so we can validate it executes successfully.",
              })
            }
            exercise={exercise}
            userQuery={query}
            lastRunQuery={lastRunQuery}
            result={result}
            submitMessage={submitMessage}
            explainPlan={explainPlan}
            analyzePlan={analyzePlan}
            explaining={explainMutation.isPending}
          />
        </div>
      }
    />
  );
}
