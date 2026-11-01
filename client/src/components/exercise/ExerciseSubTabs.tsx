import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { BookOpenText, Network, Lightbulb, CheckCircle2 } from "lucide-react";
import React from "react";

type TabValue = "question" | "schema" | "hints" | "solutions";

const tabs: { value: TabValue; label: string; icon: React.ReactNode }[] = [
  { value: "question", label: "Question", icon: <BookOpenText className="h-4 w-4" aria-hidden="true" /> },
  { value: "schema", label: "Schema", icon: <Network className="h-4 w-4" aria-hidden="true" /> },
  { value: "hints", label: "Hints", icon: <Lightbulb className="h-4 w-4" aria-hidden="true" /> },
  { value: "solutions", label: "Solutions", icon: <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> },
];

export default function ExerciseSubTabs({
  exerciseId,
  active,
  hintsCount,
}: {
  exerciseId: string;
  active: TabValue;
  hintsCount?: number;
  prevExerciseId?: number | null;
  nextExerciseId?: number | null;
}) {
  const location = useLocation();
  const currentParams = new URLSearchParams(location.search || "");
  const searchWithoutView = (() => {
    const next = new URLSearchParams(currentParams);
    next.delete("view");
    const s = next.toString();
    return s ? `?${s}` : "";
  })();

  return (
    <div className="flex shrink-0 items-center gap-1 overflow-x-auto border-b border-[var(--arena-outline-variant)] px-2" role="tablist">
      {tabs.map((t) => {
        const isActive = t.value === active;
        const badge =
          t.value === "hints" && typeof hintsCount === "number" && hintsCount > 0 ? (
            <span className="ml-1 inline-flex min-w-4 items-center justify-center rounded-full bg-[var(--arena-accent)] px-1.5 text-[10px] font-semibold text-[var(--arena-on-accent)]">
              {hintsCount}
            </span>
          ) : null;
        const baseTo = `/exercises/${exerciseId}`;
        const to =
          t.value === "question"
            ? `${baseTo}${searchWithoutView}`
            : (() => {
                const next = new URLSearchParams(currentParams);
                next.set("view", t.value);
                const s = next.toString();
                return `${baseTo}${s ? `?${s}` : ""}`;
              })();

        return (
          <Link
            key={t.value}
            to={to}
            role="tab"
            aria-selected={isActive}
            className={cn(
              "lc-focus relative flex shrink-0 items-center gap-1.5 px-3 py-2.5 text-[13px] font-medium transition-colors duration-200",
              isActive
                ? "text-[var(--arena-on-surface)]"
                : "text-[var(--arena-outline)] hover:text-[var(--arena-on-surface)]",
            )}
          >
            {t.icon}
            <span>{t.label}</span>
            {badge}
            {isActive ? (
              <span className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-[var(--arena-accent)]" />
            ) : null}
          </Link>
        );
      })}
    </div>
  );
}
