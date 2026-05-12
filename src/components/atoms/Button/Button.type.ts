// components/atoms/Button/Button.types.ts
import { type LucideIcon } from "lucide-react";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // ══════════════════════════════════════
  // Content
  // ══════════════════════════════════════
  children?: ReactNode;

  // ══════════════════════════════════════
  // Icon Props
  // ══════════════════════════════════════
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  iconSize?: number;
  iconOnly?: boolean;

  // ══════════════════════════════════════
  // Variants & Styles
  // ══════════════════════════════════════
  variant?: "default" | "outline" | "ghost" | "link";
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  size?: "sm" | "md" | "lg";

  // ══════════════════════════════════════
  // States
  // ══════════════════════════════════════
  loading?: boolean;
  disabled?: boolean;

  // ══════════════════════════════════════
  // Layout
  // ══════════════════════════════════════
  fullWidth?: boolean;

  // ══════════════════════════════════════
  // Styling
  // ══════════════════════════════════════
  className?: string;
}
