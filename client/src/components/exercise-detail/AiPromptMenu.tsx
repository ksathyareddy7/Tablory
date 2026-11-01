import {
  Bot,
  Copy,
  MessageCircleQuestion,
  Bug,
  FlaskConical,
  Lightbulb,
  Info,
} from "lucide-react";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { AI_PROMPT_TYPES, buildAiPrompt } from "@/utils/aiPrompts";
import { copyToClipboard } from "@/utils/clipboard";

export type AiPromptMenuProps = {
  exercise?: any;
  userQuery?: string;
  lastRunQuery?: string;
  result?: any;
  submitMessage?: any;
  columnWarning?: string | null;
  explainPlan?: any;
  hints?: any;
};

export default function AiPromptMenu({
  exercise,
  userQuery,
  lastRunQuery,
  result,
  submitMessage,
  columnWarning,
  explainPlan,
  hints,
}: AiPromptMenuProps) {
  const copyPrompt = async (type) => {
    try {
      if (!exercise) {
        throw new Error("Missing exercise context.");
      }
      const prompt = buildAiPrompt({
        type,
        exercise,
        userQuery,
        lastRunQuery,
        result,
        submitMessage,
        columnWarning,
        explainPlan,
      });
      await copyToClipboard(prompt);
      toast.success("AI prompt copied", {
        description: "Paste it into any AI chat app.",
      });
    } catch (e) {
      toast.error("Copy failed", {
        description: e?.message || "Unable to copy prompt to clipboard.",
      });
    }
  };

  const hasError = !!result?.error;
  const isWrong = submitMessage?.isCorrect === false;
  const canOptimize =
    !!userQuery?.trim() &&
    !!lastRunQuery &&
    lastRunQuery === userQuery &&
    !result?.error;

  const hintList = Array.isArray(hints) ? hints : [];
  const allHintsRevealed =
    hintList.length > 0 && hintList.every((h) => h && h.revealed);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "lc-focus inline-flex h-8 cursor-pointer items-center justify-center gap-1.5 rounded-md px-3 text-xs font-medium",
          "border border-[var(--arena-outline-variant)] bg-transparent text-[var(--arena-on-surface)]",
          "transition-colors duration-200 hover:bg-[var(--arena-surface-container)]",
        )}
        title="Copy an AI prompt with question + schema context"
        type="button"
      >
        <Bot className="h-4 w-4" />
        AI Prompt
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Copy prompt for…</DropdownMenuLabel>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => copyPrompt(AI_PROMPT_TYPES.SOLVE)}
        >
          <Info className="w-4 h-4 mr-2 text-blue-500" />
          Help me solve
          <span className="ml-auto text-xs text-slate-500 dark:text-slate-400">
            <Copy className="w-3.5 h-3.5" />
          </span>
        </DropdownMenuItem>

        {hasError && (
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => copyPrompt(AI_PROMPT_TYPES.DEBUG_ERROR)}
          >
            <Bug className="w-4 h-4 mr-2 text-red-500" />
            Debug my error
            <span className="ml-4 text-xs text-slate-500 dark:text-slate-400">
              <Copy className="w-3.5 h-3.5" />
            </span>
          </DropdownMenuItem>
        )}

        {isWrong && (
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => copyPrompt(AI_PROMPT_TYPES.WRONG_RESULT)}
          >
            <MessageCircleQuestion className="w-4 h-4 mr-2 text-red-500" />
            Why is my result wrong?
            <span className="ml-4 text-xs text-slate-500 dark:text-slate-400">
              <Copy className="w-3.5 h-3.5" />
            </span>
          </DropdownMenuItem>
        )}

        {canOptimize && (
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => copyPrompt(AI_PROMPT_TYPES.OPTIMIZE)}
          >
            <FlaskConical className="w-4 h-4 mr-2 text-blue-500" />
            Help me optimize query
            <span className="ml-4 text-xs text-slate-500 dark:text-slate-400">
              <Copy className="w-3.5 h-3.5" />
            </span>
          </DropdownMenuItem>
        )}

        {allHintsRevealed && (
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => copyPrompt(AI_PROMPT_TYPES.HINTS_ONLY)}
          >
            <Lightbulb className="w-4 h-4 mr-2 text-yellow-500" />
            Get new hint
            <span className="ml-auto text-xs text-slate-500 dark:text-slate-400">
              <Copy className="w-3.5 h-3.5" />
            </span>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
