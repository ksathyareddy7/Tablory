import type { ReactNode } from "react";
import TopNav from "./TopNav";
import TourProvider from "@/contexts/TourContext";
import BadgesUnlockedDialogProvider from "@/contexts/BadgesUnlockedDialogContext";

type PageShellProps = {
  children: ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="arena-bg-surface arena-text-on-surface min-h-screen">
      <TourProvider>
        <BadgesUnlockedDialogProvider>
          <TopNav />
          <main className="min-h-[calc(100dvh-var(--arena-nav-h))] pt-[var(--arena-nav-h)]">{children}</main>
        </BadgesUnlockedDialogProvider>
      </TourProvider>
    </div>
  );
}
