import { Link } from "react-router-dom";
import { Check } from "lucide-react";

function difficultyClass(difficulty: string) {
  if (difficulty === "easy") return "lc-diff-easy";
  if (difficulty === "medium") return "lc-diff-medium";
  return "lc-diff-hard";
}

type ChallengeRowProps = {
  exercise: any;
  search: string;
};

export default function ChallengeRow({ exercise, search }: ChallengeRowProps) {
  const status: string =
    exercise.status === "not started" ? "not_started" : exercise.status;
  const appType = exercise.app_type
    ? String(exercise.app_type).charAt(0).toUpperCase() + String(exercise.app_type).slice(1)
    : "";
  const searchString = String(search || "").trim();
  const to = {
    pathname: `/exercises/${exercise.id}`,
    search: searchString ? `?${searchString}` : "",
  };
  const statusLabel =
    status === "solved" ? "Solved" : status === "attempted" ? "Attempted" : "Todo";

  const quietLink = { tabIndex: -1, "aria-hidden": true } as const;
  const difficulty =
    String(exercise.difficulty || "").charAt(0).toUpperCase() +
    String(exercise.difficulty || "").slice(1);

  return (
    <tr className="group cursor-pointer border-b border-[var(--arena-outline-variant)] last:border-0 hover:bg-[var(--arena-surface-container-low)]">
      <td className="relative w-10 p-0 text-center">
        <Link
          to={to}
          state={{ search }}
          {...quietLink}
          className="absolute inset-0 flex items-center justify-center"
        >
          {status === "solved" ? (
            <Check className="h-4 w-4 text-[var(--arena-easy)]" />
          ) : status === "attempted" ? (
            <span className="block h-3.5 w-3.5 rounded-full border-2 border-[var(--arena-accent)]" />
          ) : (
            <span className="sr-only">{statusLabel}</span>
          )}
        </Link>
      </td>
      <td className="p-0">
        <Link
          to={to}
          state={{ search }}
          className="lc-focus block cursor-pointer px-3 py-3.5 text-base font-medium text-[var(--arena-on-surface)] group-hover:text-[var(--arena-primary)]"
        >
          <span className="sr-only">{statusLabel}. </span>
          {exercise.id}. {exercise.title}
        </Link>
      </td>
      <td className="relative hidden p-0 sm:table-cell">
        <Link
          to={to}
          state={{ search }}
          {...quietLink}
          className="absolute inset-0 flex items-center px-3 text-base text-[var(--arena-outline)]"
        >
          {appType}
        </Link>
      </td>
      <td className="relative p-0">
        <Link
          to={to}
          state={{ search }}
          {...quietLink}
          className={`absolute inset-0 flex items-center px-3 text-base font-medium ${difficultyClass(exercise.difficulty)}`}
        >
          {difficulty}
        </Link>
      </td>
    </tr>
  );
}
