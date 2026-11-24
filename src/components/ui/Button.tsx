import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
}

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-accent text-white hover:bg-accent-soft",
  outline:
    "border border-border text-foreground hover:border-accent hover:text-accent-soft",
};

export default function Button({
  href,
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-colors",
        VARIANTS[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
