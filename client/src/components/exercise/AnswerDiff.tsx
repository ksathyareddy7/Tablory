import type { SubmitMessage } from "@/types/exercise";

type Row = Record<string, unknown>;

function cellText(value: unknown) {
  if (value === null || value === undefined) return "NULL";
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

function columnsOf(rows: Row[]) {
  const names: string[] = [];
  for (const row of rows) {
    for (const key of Object.keys(row)) {
      if (!names.includes(key)) names.push(key);
    }
  }
  return names;
}

function SampleTable({ title, rows }: { title: string; rows: Row[] }) {
  if (!rows.length) return null;
  const columns = columnsOf(rows);
  return (
    <div className="mt-3">
      <div className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[var(--arena-outline)]">
        {title}
      </div>
      <div className="overflow-x-auto rounded-lg border border-[color:rgb(194_198_214/0.25)] dark:border-[color:rgb(42_51_66/0.7)]">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="bg-[var(--arena-surface-container-low)]">
              {columns.map((column) => (
                <th
                  key={column}
                  className="px-3 py-2 font-semibold text-[var(--arena-on-surface)]"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className="border-t border-[color:rgb(194_198_214/0.2)] dark:border-[color:rgb(42_51_66/0.7)]"
              >
                {columns.map((column) => (
                  <td key={column} className="px-3 py-2 font-mono whitespace-nowrap">
                    {cellText(row[column])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function AnswerDiff({ message }: { message: SubmitMessage }) {
  if (message.isCorrect) return null;
  const expected = message.expectedRowCount;
  const actual = message.actualRowCount;
  const missing = Array.isArray(message.missingRows) ? message.missingRows : [];
  const extra = Array.isArray(message.extraRows) ? message.extraRows : [];
  const hasCounts = expected !== null && expected !== undefined && actual !== null && actual !== undefined;
  if (!hasCounts && missing.length === 0 && extra.length === 0) return null;

  return (
    <div className="m-4 rounded-xl border border-[color:rgb(186_26_26/0.25)] bg-[var(--arena-surface-container-lowest)] p-4">
      <div className="text-sm font-semibold text-[var(--arena-error)]">
        {message.text || "Result does not match."}
      </div>
      {hasCounts ? (
        <p className="mt-1 text-sm text-[var(--arena-outline)]">
          Expected {String(expected)} {Number(expected) === 1 ? "row" : "rows"}, got {String(actual)}.
        </p>
      ) : null}
      <SampleTable title="Missing from your result" rows={missing} />
      <SampleTable title="Extra in your result" rows={extra} />
      {hasCounts && missing.length === 0 && extra.length === 0 ? (
        <p className="mt-2 text-xs text-[var(--arena-outline)]">
          The row sets differ, and a sample could not be shown.
        </p>
      ) : null}
    </div>
  );
}
