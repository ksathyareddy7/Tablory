import { useMemo, useState } from "react";
import { Pause, Play, Square, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TIMER_STATUS, STOP_REASON } from "@/utils/exerciseTimerMachine";
import { cn } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const statusLabel = (status: string) => {
  if (status === TIMER_STATUS.IDLE) return "Idle";
  if (status === TIMER_STATUS.RUNNING) return "Running";
  if (status === TIMER_STATUS.PAUSED) return "Paused";
  if (status === TIMER_STATUS.STOPPED) return "Stopped";
  return "Idle";
};

export default function ExerciseTimerControls({ timer }: { timer: any }) {
  const status: string = timer?.status || TIMER_STATUS.IDLE;
  const formatted: string = timer?.formatted || "00:00";
  const { start, pause, resume, stop, reset } = timer?.actions || {};
  const [confirmStopOpen, setConfirmStopOpen] = useState(false);

  const showStart = status === TIMER_STATUS.IDLE;
  const showPause = status === TIMER_STATUS.RUNNING;
  const showResume = status === TIMER_STATUS.PAUSED;
  const showStop =
    status === TIMER_STATUS.RUNNING || status === TIMER_STATUS.PAUSED;
  const showReset = status === TIMER_STATUS.STOPPED;

  const dotClass = useMemo(() => {
    if (status === TIMER_STATUS.RUNNING) return "bg-emerald-500";
    if (status === TIMER_STATUS.PAUSED) return "bg-amber-500";
    if (status === TIMER_STATUS.STOPPED) return "bg-rose-500";
    return "bg-slate-400";
  }, [status]);

  return (
    <div className="flex items-center gap-2">
      <div
        className={cn(
          "h-8 flex items-center gap-2 px-4 bg-[var(--arena-surface-container-lowest)] rounded-lg border",
          "border-[color:rgb(194_198_214/0.20)] dark:border-[color:rgb(42_51_66/0.7)]",
        )}
        title="Exercise timer"
      >
        <span className={cn("w-2.5 h-2.5 rounded-full", dotClass)} />
        <span className="text-[13px] font-mono font-bold text-[var(--arena-label)] tabular-nums">
          {formatted}
        </span>
        <span className="text-[13px] font-bold text-[var(--arena-placeholder)]">
          • {statusLabel(status)}
        </span>
      </div>

      {showStart ? (
        <Button
          size="sm"
          variant="outline"
          onClick={start}
          className={cn(
            "lc-focus h-8 cursor-pointer gap-1.5 rounded-md px-3 text-sm font-semibold",
            "border-0 bg-[var(--arena-tertiary-container)] text-[#06210f] hover:bg-[var(--arena-tertiary-solid)] hover:text-[#06210f]",
          )}
          title="Start timer"
        >
          <Play className="h-4 w-4" />
          Start
        </Button>
      ) : null}

      {showPause ? (
        <Button
          size="sm"
          variant="outline"
          onClick={pause}
          className={cn(
            "lc-focus h-8 cursor-pointer gap-1.5 rounded-md px-3 text-sm font-medium",
            "border border-[var(--arena-outline-variant)] bg-[var(--arena-surface-container)] text-[var(--arena-on-surface)]",
            "hover:bg-[var(--arena-surface-container-high)] hover:text-[var(--arena-on-surface)]",
          )}
          title="Pause timer"
        >
          <Pause className="h-4 w-4" />
          Pause
        </Button>
      ) : null}

      {showResume ? (
        <Button
          size="sm"
          variant="outline"
          onClick={resume}
          className={cn(
            "lc-focus h-8 cursor-pointer gap-1.5 rounded-md px-3 text-sm font-semibold",
            "border-0 bg-[var(--arena-accent)] text-white hover:bg-[var(--arena-primary-solid)] hover:text-white",
          )}
          title="Resume timer"
        >
          <Play className="h-4 w-4" />
          Resume
        </Button>
      ) : null}

      {showStop ? (
        <>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setConfirmStopOpen(true)}
            className={cn(
              "lc-focus h-8 cursor-pointer gap-1.5 rounded-md px-3 text-sm font-medium",
              "border border-[var(--arena-error)] bg-transparent text-[var(--arena-error)]",
              "hover:bg-[var(--arena-error-container)] hover:text-[var(--arena-error)]",
            )}
            title="Stop timer"
          >
            <Square className="h-4 w-4" />
            Stop
          </Button>

          <AlertDialog open={confirmStopOpen} onOpenChange={setConfirmStopOpen}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Stop the timer?</AlertDialogTitle>
                <AlertDialogDescription>
                  Stopping is irreversible for this attempt. You won’t be able
                  to resume once it’s stopped.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  className="bg-rose-600 text-white hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-600"
                  onClick={() => {
                    setConfirmStopOpen(false);
                    stop?.(STOP_REASON.MANUAL);
                  }}
                >
                  Stop timer
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      ) : null}

      {showReset ? (
        <Button
          size="sm"
          variant="outline"
          onClick={reset}
          className={cn(
            "lc-focus h-8 cursor-pointer gap-1.5 rounded-md px-3 text-sm font-medium",
            "border border-[var(--arena-outline-variant)] bg-transparent text-[var(--arena-on-surface)]",
            "hover:bg-[var(--arena-surface-container)] hover:text-[var(--arena-on-surface)]",
          )}
          title="Reset timer (start a new attempt)"
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>
      ) : null}
    </div>
  );
}
