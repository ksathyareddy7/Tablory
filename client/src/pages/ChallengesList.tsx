import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  useExercisesListQuery,
  useExercisesMetaQuery,
} from "@/queries/exercises";
import SearchInput from "@/components/filters/SearchInput";
import Select from "@/components/filters/Select";
import ChallengeRow from "@/components/challenges/ChallengeRow";
import Pagination from "@/components/common/Pagination";
import { getAppsFromMeta } from "@/constants/apps";

const statusOptions = ["All", "solved", "attempted", "not_started"] as const;
const difficultyOptions = ["All", "easy", "medium", "hard"] as const;

const toStatusLabel = (s: string) =>
  s === "not_started" ? "Not Started" : s[0].toUpperCase() + s.slice(1);

export default function ChallengesList() {
  const { user } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();

  const filterApps = searchParams.get("app")
    ? searchParams.get("app")!.split(",").filter(Boolean)
    : [];
  const filterDiff = searchParams.get("diff") || "All";
  const filterStatus = searchParams.get("status") || "All";
  const searchQuery = searchParams.get("q") || "";
  const filterConcepts = searchParams.get("concepts")
    ? searchParams.get("concepts")!.split(",").filter(Boolean)
    : [];
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "20", 10);
  const appsKey = useMemo(() => filterApps.join(","), [filterApps]);
  const conceptsKey = useMemo(() => filterConcepts.join(","), [filterConcepts]);

  const setParam = (key: string, value: string | null) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (!value || value === "All") next.delete(key);
        else next.set(key, value);
        if (key !== "page") next.delete("page");
        return next;
      },
      { replace: true },
    );
  };

  const hasAnyFilters =
    !!searchQuery ||
    filterApps.length > 0 ||
    filterConcepts.length > 0 ||
    filterDiff !== "All" ||
    filterStatus !== "All";

  const clearFilters = () => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        const limitValue = next.get("limit");
        next.delete("q");
        next.delete("app");
        next.delete("concepts");
        next.delete("diff");
        next.delete("status");
        next.delete("page");
        if (limitValue) next.set("limit", limitValue);
        return next;
      },
      { replace: true },
    );
  };

  const listParams = useMemo(() => {
    const params: Record<string, any> = { page, limit };
    if (appsKey) params.app = appsKey;
    if (filterDiff !== "All") params.difficulty = filterDiff;
    if (filterStatus !== "All") params.status = filterStatus;
    if (searchQuery) params.q = searchQuery;
    if (conceptsKey) params.concepts = conceptsKey;
    return params;
  }, [
    page,
    limit,
    appsKey,
    filterDiff,
    filterStatus,
    searchQuery,
    conceptsKey,
  ]);

  const metaQuery = useExercisesMetaQuery(user?.id);
  const exercisesQuery = useExercisesListQuery(listParams, user?.id);

  // Backward/forward compatible: some endpoints return `{ data: ... }` while others return the object directly.
  // Also guards against cached/empty responses (e.g. a 304 with no usable body).
  const rawMeta: any = (metaQuery.data as any)?.data ?? metaQuery.data;
  const meta =
    rawMeta && typeof rawMeta === "object"
      ? rawMeta
      : { apps: [], concepts: [], difficulties: [] };
  const exercises = exercisesQuery.data?.data || [];
  const pagination = exercisesQuery.data?.pagination || {
    total: 0,
    page,
    totalPages: 1,
  };

  const apps = useMemo(() => getAppsFromMeta(meta), [meta]);

  const showCount = exercises.length;
  const totalCount = pagination.total;

  return (
    <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-4 px-4 py-6 sm:px-6">
      <header>
        <h1 className="lc-page-title">Exercises</h1>
        <p className="mt-1 text-sm text-[var(--arena-outline)]">
          Pick a schema and write the query.
        </p>
      </header>
      <section className="flex flex-col gap-4 rounded-lg border border-[var(--arena-outline-variant)] bg-[var(--arena-surface-container-lowest)] p-4">
        <div className="grid items-end gap-4 sm:grid-cols-[minmax(0,1fr)_12rem_12rem]">
          <div data-tour="challenges.search">
            <SearchInput
              value={searchQuery}
              onChange={(v) => setParam("q", v)}
              onClear={() => setParam("q", "")}
            />
          </div>

          <div data-tour="challenges.filters.status">
            <Select
              label="Status"
              options={[...statusOptions]}
              value={filterStatus}
              onChange={(next) => setParam("status", String(next))}
              placeholder="All"
              getLabel={toStatusLabel}
              className="w-full"
            />
          </div>

          <div data-tour="challenges.filters.difficulty">
            <Select
              label="Difficulty"
              options={[...difficultyOptions]}
              value={filterDiff}
              onChange={(next) => setParam("diff", String(next))}
              placeholder="All"
              getLabel={(value) =>
                value === "All" ? "All" : value[0].toUpperCase() + value.slice(1)
              }
              className="w-full"
            />
          </div>
        </div>

        <div className="flex w-full items-end gap-4 pt-4 border-t arena-border-divider">
          <Select
            label="App Type"
            options={apps}
            value={filterApps}
            isMulti
            onChange={(v) =>
              setParam(
                "app",
                Array.isArray(v) && v.length ? v.join(",") : null,
              )
            }
            placeholder="All Apps"
          />
          <Select
            label="Concepts"
            options={meta.concepts || []}
            value={filterConcepts}
            isMulti
            onChange={(next) =>
              setParam(
                "concepts",
                Array.isArray(next) && next.length ? next.join(",") : null,
              )
            }
            placeholder="Select concepts..."
          />
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <span className="text-sm text-[var(--arena-outline)]">
            Showing <span className="text-[var(--arena-on-surface)]">{showCount}</span> of{" "}
            <span className="text-[var(--arena-on-surface)]">{totalCount}</span>
          </span>
          <button
            type="button"
            onClick={clearFilters}
            disabled={!hasAnyFilters}
            className="lc-focus cursor-pointer rounded-md border border-[var(--arena-outline-variant)] bg-[var(--arena-surface-container-lowest)] px-4 py-2 text-sm font-medium text-[var(--arena-on-surface)] transition-colors duration-200 hover:bg-[var(--arena-surface-container)] disabled:pointer-events-none disabled:opacity-50"
          >
            Clear filters
          </button>
        </div>

        <div className="overflow-x-auto rounded-lg border border-[var(--arena-outline-variant)] bg-[var(--arena-surface-container-lowest)]" data-tour="challenges.list">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-[var(--arena-outline-variant)] text-base font-medium text-[var(--arena-outline)]">
                <th className="w-10 px-3 py-3 font-medium">Status</th>
                <th className="px-3 py-3 font-medium">Title</th>
                <th className="hidden px-3 py-3 font-medium sm:table-cell">App</th>
                <th className="px-3 py-3 font-medium">Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {exercises.map((ex) => (
                <ChallengeRow
                  key={ex.id}
                  exercise={ex}
                  search={searchParams.toString()}
                />
              ))}
            </tbody>
          </table>
          {exercises.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-[var(--arena-outline)]">
              No exercises match these filters.
            </p>
          ) : null}
        </div>

        <div data-tour="challenges.pagination">
          <Pagination
            page={pagination.page}
            totalPages={pagination.totalPages}
            onPage={(p) => {
              setParam("page", String(p));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </div>
      </section>
    </div>
  );
}
