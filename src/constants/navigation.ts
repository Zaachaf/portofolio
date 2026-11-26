import type { NavItem } from "@/types";

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
] as const;

export const SITE_NAME = "Zabihullah";
