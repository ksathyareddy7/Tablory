import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, LogOut, CircleHelp, Menu, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuth } from "@/contexts/AuthContext";
import NavLink from "./NavLink";
import { getTourIdForPath } from "@/tours/registry";
import { useTour } from "@/contexts/TourContext";
import IconButton from "@/components/common/IconButton";

const LINKS = [
  { to: "/", label: "Exercises", end: true, extraActivePaths: ["/exercises/*"] },
  { to: "/tracks", label: "Learn", end: false, extraActivePaths: [] },
  { to: "/mock-interviews", label: "Mock Interview", end: false, extraActivePaths: [] },
  { to: "/dashboard", label: "Dashboard", end: false, extraActivePaths: [] },
  { to: "/about", label: "About", end: false, extraActivePaths: [] },
] as const;

export default function TopNav() {
  const { resolvedTheme, setTheme } = useTheme();
  const { user, logout } = useAuth();
  const location = useLocation();
  const { startTour, stopTour, isRunning, activeTourId } = useTour();
  const [menuOpen, setMenuOpen] = useState(false);
  const tourId = getTourIdForPath(location.pathname);
  const persistentSearch = location.search || "";
  const searchWithoutView = (() => {
    const next = new URLSearchParams(persistentSearch);
    next.delete("view");
    const s = next.toString();
    return s ? `?${s}` : "";
  })();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--arena-outline-variant)] bg-[var(--arena-surface-container-lowest)]">
      <div className="flex h-[var(--arena-nav-h)] items-center justify-between gap-3 px-3 sm:px-4">
        <div className="flex min-w-0 items-center gap-4">
          <Link
            to={{ pathname: "/", search: searchWithoutView }}
            className="lc-focus flex items-center gap-2"
          >
            <img src="/tablory.svg" alt="" className="h-7 w-7" />
            <span className="text-[15px] font-semibold tracking-tight text-[var(--arena-on-surface)]">
              Tablory
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                extraActivePaths={[...link.extraActivePaths]}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <IconButton
            aria-label="Start tour"
            disabled={!tourId}
            tone="warning"
            className="h-8 w-8 disabled:cursor-not-allowed disabled:opacity-40"
            onClick={() => {
              if (isRunning && activeTourId === tourId) stopTour();
              else startTour(tourId);
            }}
            title="Page tour"
          >
            <CircleHelp className="h-4 w-4" aria-hidden="true" />
          </IconButton>
          <IconButton
            aria-label="Toggle color theme"
            tone="primary"
            className="h-8 w-8"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            title="Toggle theme"
          >
            {resolvedTheme === "dark" ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </IconButton>
          <IconButton
            aria-label="Logout"
            tone="danger"
            className="hidden h-8 w-8 sm:inline-flex"
            onClick={logout}
            title="Logout"
          >
            <LogOut className="h-4 w-4" aria-hidden="true" />
          </IconButton>

          <div className="hidden items-center gap-2 pl-1 sm:flex">
            <span className="max-w-[8rem] truncate text-sm font-medium text-[var(--arena-on-surface)]">
              {user?.username}
            </span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--arena-primary-fixed)] text-xs font-semibold text-[var(--arena-primary)]">
              {user?.username?.slice(0, 1)?.toUpperCase() || "U"}
            </div>
          </div>

          <button
            type="button"
            className="lc-focus inline-flex h-8 w-8 items-center justify-center rounded-md text-[var(--arena-on-surface)] lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          className="absolute left-0 right-0 top-[var(--arena-nav-h)] border-b border-[var(--arena-outline-variant)] bg-[var(--arena-surface-container-lowest)] px-3 py-2 shadow-lg lg:hidden"
          aria-label="Primary"
        >
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              variant="menu"
              extraActivePaths={[...link.extraActivePaths]}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <button
            type="button"
            className="lc-focus mt-1 block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-[var(--arena-error)] sm:hidden"
            onClick={logout}
          >
            Log out
          </button>
        </nav>
      ) : null}
    </header>
  );
}
