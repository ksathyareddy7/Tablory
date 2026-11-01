import { Play, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function QueryRunSubmitButtons({
  onRun,
  onSubmit,
  runDisabled,
  submitDisabled,
  runPending,
  submitPending,
  dataTourRun,
  dataTourSubmit,
  className,
}: {
  onRun: () => void;
  onSubmit: () => void;
  runDisabled: boolean;
  submitDisabled: boolean;
  runPending: boolean;
  submitPending: boolean;
  dataTourRun?: string;
  dataTourSubmit?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex gap-3", className)}>
      <button
        type="button"
        onClick={onRun}
        disabled={runDisabled}
        {...(dataTourRun ? { "data-tour": dataTourRun } : {})}
        className={cn(
          "lc-focus h-8 cursor-pointer rounded-md px-3 text-sm font-medium",
          "inline-flex items-center justify-center gap-1.5",
          "border border-[var(--arena-outline-variant)] bg-[var(--arena-surface-container)] text-[var(--arena-on-surface)]",
          "transition-colors duration-200 hover:bg-[var(--arena-surface-container-high)]",
          "disabled:pointer-events-none disabled:opacity-50",
        )}
      >
        <Play className="h-[18px] w-[18px]" />
        {runPending ? "Running…" : "Run Query"}
      </button>

      <button
        type="button"
        onClick={onSubmit}
        disabled={submitDisabled}
        {...(dataTourSubmit ? { "data-tour": dataTourSubmit } : {})}
        className={cn(
          "lc-focus h-8 cursor-pointer rounded-md px-3 text-sm font-semibold",
          "inline-flex items-center justify-center gap-1.5",
          "bg-[var(--arena-tertiary-container)] text-[#06210f]",
          "transition-colors duration-200 hover:bg-[var(--arena-tertiary-solid)]",
          "disabled:pointer-events-none disabled:opacity-50",
        )}
      >
        <CheckCircle2 className="h-[18px] w-[18px]" />
        {submitPending ? "Submitting…" : "Submit"}
      </button>
    </div>
  );
}

