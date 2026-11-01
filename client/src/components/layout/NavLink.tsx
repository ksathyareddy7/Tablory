import { NavLink as RouterNavLink, matchPath, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import React from "react";

type NavLinkProps = {
  to: string;
  end?: boolean;
  children: React.ReactNode;
  extraActivePaths?: string[];
  onClick?: () => void;
  variant?: "bar" | "menu";
};

export default function NavLink({
  to,
  end,
  children,
  extraActivePaths = [],
  onClick,
  variant = "bar",
}: NavLinkProps) {
  const location = useLocation();
  const isExtraActive =
    extraActivePaths.length > 0 &&
    extraActivePaths.some((p) =>
      p.includes("*")
        ? location.pathname.startsWith(p.replace(/\*.*$/, ""))
        : !!matchPath({ path: p, end: false }, location.pathname),
    );

  return (
    <RouterNavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "lc-focus cursor-pointer text-sm font-medium text-[var(--arena-outline)] transition-colors duration-200 hover:text-[var(--arena-on-surface)]",
          variant === "bar" && "px-4 py-2 text-[15px]",
          variant === "menu" && "block rounded-md px-3 py-2",
          (isActive || isExtraActive) &&
            "font-semibold text-[var(--arena-nav-active)]",
          variant === "menu" &&
            (isActive || isExtraActive) &&
            "bg-[var(--arena-primary-fixed)]",
        )
      }
    >
      {children}
    </RouterNavLink>
  );
}
