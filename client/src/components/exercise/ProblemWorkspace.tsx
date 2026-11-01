import { useEffect, useState, type CSSProperties, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const LEFT_KEY = "sql-arena:workspace:left";
const CONSOLE_KEY = "sql-arena:workspace:console";

function readNumber(key: string, fallback: number, min: number, max: number) {
  try {
    const raw = localStorage.getItem(key);
    if (raw == null || raw === "") return fallback;
    const n = Number(raw);
    if (!Number.isFinite(n)) return fallback;
    return Math.min(max, Math.max(min, n));
  } catch {
    return fallback;
  }
}

function ResizeGrip({ orientation }: { orientation: "vertical" | "horizontal" }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full",
        "border border-[var(--arena-outline-variant)] bg-[var(--arena-surface-container-lowest)] text-[var(--arena-placeholder)]",
        "group-hover:border-[var(--arena-accent)] group-hover:text-[var(--arena-accent)]",
        "group-data-[dragging=true]:border-[var(--arena-accent)] group-data-[dragging=true]:text-[var(--arena-accent)]",
        orientation === "vertical" ? "h-8 w-3 flex-col gap-1" : "h-3 w-8 gap-1",
      )}
    >
      <span className="size-1 rounded-full bg-current" />
      <span className="size-1 rounded-full bg-current" />
      <span className="size-1 rounded-full bg-current" />
    </span>
  );
}

type ProblemWorkspaceProps = {
  toolbar: ReactNode;
  left: ReactNode;
  editor: ReactNode;
  console: ReactNode;
};

export default function ProblemWorkspace({
  toolbar,
  left,
  editor,
  console: consolePane,
}: ProblemWorkspaceProps) {
  const [leftPct, setLeftPct] = useState(() => readNumber(LEFT_KEY, 42, 28, 62));
  const [consoleH, setConsoleH] = useState(() => readNumber(CONSOLE_KEY, 240, 140, 560));
  const [dragging, setDragging] = useState<null | "left" | "console">(null);

  useEffect(() => {
    try {
      localStorage.setItem(LEFT_KEY, String(leftPct));
    } catch {
      // private mode
    }
  }, [leftPct]);

  useEffect(() => {
    try {
      localStorage.setItem(CONSOLE_KEY, String(consoleH));
    } catch {
      // private mode
    }
  }, [consoleH]);

  const dragLeft = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    const parent = event.currentTarget.parentElement;
    if (!parent) return;
    const bounds = parent.getBoundingClientRect();
    setDragging("left");
    const move = (e: PointerEvent) => {
      const next = ((e.clientX - bounds.left) / bounds.width) * 100;
      setLeftPct(Math.min(62, Math.max(28, next)));
    };
    const up = () => {
      setDragging(null);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  const dragConsole = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    const parent = event.currentTarget.parentElement;
    if (!parent) return;
    const bounds = parent.getBoundingClientRect();
    setDragging("console");
    const move = (e: PointerEvent) => {
      const next = bounds.bottom - e.clientY;
      setConsoleH(Math.min(bounds.height - 180, Math.max(140, next)));
    };
    const up = () => {
      setDragging(null);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  return (
    <div className="flex flex-col bg-[var(--arena-surface)] lg:h-[calc(100dvh-var(--arena-nav-h))] lg:overflow-hidden">
      <div className="shrink-0 border-b border-[var(--arena-outline-variant)] bg-[var(--arena-surface-container-lowest)]">
        {toolbar}
      </div>
      <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
        <section
          className="flex max-h-[46vh] min-h-[220px] w-full flex-col overflow-hidden border-b border-[var(--arena-outline-variant)] bg-[var(--arena-surface-container-lowest)] lg:max-h-none lg:min-h-0 lg:w-[var(--workspace-left)] lg:shrink-0 lg:border-b-0"
          style={{ "--workspace-left": `${leftPct}%` } as CSSProperties}
        >
          {left}
        </section>

        <div
          role="separator"
          aria-orientation="vertical"
          aria-label="Resize question panel"
          aria-valuemin={28}
          aria-valuemax={62}
          aria-valuenow={Math.round(leftPct)}
          tabIndex={0}
          title="Drag to resize the question panel"
          data-dragging={dragging === "left" ? "true" : undefined}
          onPointerDown={dragLeft}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setLeftPct((p) => Math.max(28, p - 2));
            if (e.key === "ArrowRight") setLeftPct((p) => Math.min(62, p + 2));
          }}
          className="group lc-focus relative hidden w-3 shrink-0 cursor-col-resize lg:block"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[var(--arena-outline-variant)] group-hover:bg-[var(--arena-accent)] group-data-[dragging=true]:bg-[var(--arena-accent)]"
          />
          <ResizeGrip orientation="vertical" />
        </div>

        <section className="flex min-h-[420px] min-w-0 flex-1 flex-col lg:min-h-0">
          <div className="min-h-[260px] flex-1 overflow-hidden bg-[var(--arena-surface-container-lowest)]">
            {editor}
          </div>
          <div
            role="separator"
            aria-orientation="horizontal"
            aria-label="Resize result panel"
            aria-valuemin={140}
            aria-valuemax={560}
            aria-valuenow={Math.round(consoleH)}
            tabIndex={0}
            title="Drag to resize the result panel"
            data-dragging={dragging === "console" ? "true" : undefined}
            onPointerDown={dragConsole}
            onKeyDown={(e) => {
              if (e.key === "ArrowUp") setConsoleH((h) => Math.min(560, h + 16));
              if (e.key === "ArrowDown") setConsoleH((h) => Math.max(140, h - 16));
            }}
            className="group lc-focus relative h-3 shrink-0 cursor-row-resize"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[var(--arena-outline-variant)] group-hover:bg-[var(--arena-accent)] group-data-[dragging=true]:bg-[var(--arena-accent)]"
            />
            <ResizeGrip orientation="horizontal" />
          </div>
          <div
            className="shrink-0 overflow-hidden bg-[var(--arena-surface-container-lowest)]"
            style={{ height: consoleH }}
          >
            {consolePane}
          </div>
        </section>
      </div>
    </div>
  );
}
