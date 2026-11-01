import { Link } from "react-router-dom";
import DifficultyBadge from "@/components/dashboard/DifficultyBadge";
import { useLessonPracticeQuery } from "@/queries/lessons";

type PracticeQuestion = {
  id: number;
  title: string;
  difficulty: string;
  app_name: string;
  status: string;
};

function statusLabel(status: string) {
  if (status === "solved") return "Solved";
  if (status === "attempted") return "Attempted";
  return "Not started";
}

export default function LessonPractice({
  slug,
  userId,
}: {
  slug?: string;
  userId?: number;
}) {
  const practiceQuery = useLessonPracticeQuery(slug, userId);
  const questions: PracticeQuestion[] = practiceQuery.data?.data || [];
  if (!questions.length) return null;

  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold tracking-tight">Practice this lesson</h2>
      <p className="mt-2 text-sm text-[var(--arena-outline)] max-w-[760px]">
        Graded questions that use the same patterns. Solve them in the exercise editor.
      </p>
      <ul className="mt-4 divide-y divide-[color:rgb(194_198_214/0.25)] dark:divide-[color:rgb(42_51_66/0.7)] rounded-xl border border-[color:rgb(194_198_214/0.25)] dark:border-[color:rgb(42_51_66/0.7)] overflow-hidden">
        {questions.map((question) => (
          <li key={question.id}>
            <Link
              to={`/exercises/${question.id}`}
              className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-[var(--arena-surface-container-low)]"
            >
              <span className="min-w-0">
                <span className="block font-semibold truncate">{question.title}</span>
                <span className="mt-1 block text-xs uppercase tracking-widest text-[var(--arena-outline)]">
                  {question.app_name} · {statusLabel(question.status)}
                </span>
              </span>
              <DifficultyBadge difficulty={question.difficulty} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
