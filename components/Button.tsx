import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost-light" | "ghost-dark";
  className?: string;
  icon?: ReactNode;
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-accent text-paper hover:bg-accent-dark focus-visible:outline-accent-dark",
  secondary:
    "bg-ink text-paper hover:bg-ink-soft focus-visible:outline-ink",
  "ghost-light":
    "bg-transparent text-paper border border-paper/40 hover:border-paper hover:bg-paper/10 focus-visible:outline-paper",
  "ghost-dark":
    "bg-transparent text-ink border border-ink/30 hover:border-ink hover:bg-ink/5 focus-visible:outline-ink",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 font-semibold tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
    >
      {children}
      {icon}
    </Link>
  );
}
