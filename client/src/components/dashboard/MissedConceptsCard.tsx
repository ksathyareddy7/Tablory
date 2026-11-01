import { Link } from "react-router-dom";
import DifficultyBadge from "@/components/dashboard/DifficultyBadge";

export type MissedQuestion = {
  id: number;
  title: string;
  difficulty: string;
  app_name: string;
  attempts_count: number;
};

export type MissedConcept = {
  concept: string;
  questions: MissedQuestion[];
};

function conceptLabel(name: string) {
  const text = String(name || "").replace(/_/g, " ");
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export default function MissedConceptsCard({ groups }: { groups: MissedConcept[] }) {
  if (!groups.length) return null;

  return (
    <div className="arena-bg-lowest rounded-xl overflow-hidden mb-12">
      <div className="px-8 py-6 bg-[color-mix(in_srgb,var(--arena-surface-container-low)_50%,transparent)]">
        <h2 className="text-xl font-bold tracking-tight">Practice what you missed</h2>
        <p className="mt-2 text-sm text-[var(--arena-outline)]">
          Unsolved questions, grouped by the concept they use.
        </p>
      </div>
      <div className="px-8 py-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {groups.map((group) => (
          <div key={group.concept}>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--arena-outline)]">
              {conceptLabel(group.concept)}
            </h3>
            <ul className="mt-3 space-y-2">
              {group.questions.map((question) => (
                <li key={`${group.concept}-${question.id}`}>
                  <Link
                    to={`/exercises/${question.id}`}
                    className="flex items-center justify-between gap-3 rounded-lg px-3 py-3 hover:bg-[var(--arena-surface-container-low)]"
                  >
                    <span className="min-w-0">
                      <span className="block font-semibold truncate">{question.title}</span>
                      <span className="mt-1 block text-xs text-[var(--arena-outline)]">
                        {question.app_name}
                        {question.attempts_count > 0
                          ? ` · ${question.attempts_count} ${question.attempts_count === 1 ? "attempt" : "attempts"}`
                          : ""}
                      </span>
                    </span>
                    <DifficultyBadge difficulty={question.difficulty} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
