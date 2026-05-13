// components/atoms/Button/Button.tsx
import { cn } from "@/src/lib/utils";
import { Loader2 } from "lucide-react";
import type { FC } from "react";
import type { ButtonProps } from "./Button.type";

const COLOR_VARIANTS = {
  primary: {
    default:
      "bg-primary text-white hover:bg-primary-300 active:bg-primary-500 disabled:bg-primary-50 disabled:text-primary-200",
    outline:
      "border border-primary text-primary hover:border-primary-300 hover:text-primary-300 active:border-primary-500 disabled:border-primary-200 disabled:text-primary-200",
    ghost:
      "bg-primary-50 text-primary hover:bg-primary-100 active:bg-primary-200 disabled:bg-primary-50 disabled:text-primary-200",
    link: "text-primary hover:text-primary-300 active:text-primary-500 disabled:text-primary-200",
  },
  secondary: {
    default:
      "bg-white text-neutral-950 border border-[#F7F7F8] hover:bg-[#F7F7F8] active:bg-[#EEEEF0] disabled:bg-[#F7F7F8] disabled:text-[#D9D9DE]",
    outline:
      "border border-neutral-950 text-neutral-950 hover:border-neutral-600 hover:text-neutral-600 active:border-neutral-950 disabled:border-neutral-200 disabled:text-neutral-200",
    ghost:
      "bg-[#F7F7F8] text-neutral-950 hover:bg-[#EEEEF0] active:bg-[#D9D9DE] disabled:bg-[#F7F7F8] disabled:text-[#D9D9DE]",
    link: "text-neutral-950 hover:text-neutral-600 active:text-neutral-950 disabled:text-neutral-200",
  },
  info: {
    default:
      "bg-info-400 text-white hover:bg-info-300 active:bg-info-500 disabled:bg-info-50 disabled:text-info-200",
    outline:
      "border border-info-400 text-info-400 hover:border-info-300 hover:text-info-300 active:border-info-500 disabled:border-info-200 disabled:text-info-200",
    ghost:
      "bg-info-50 text-info-400 hover:bg-info-100 active:bg-info-200 disabled:bg-info-50 disabled:text-info-200",
    link: "text-info-400 hover:text-info-300 active:text-info-500 disabled:text-info-200",
  },
  success: {
    default:
      "bg-success-400 text-white hover:bg-success-300 active:bg-success-500 disabled:bg-success-50 disabled:text-success-200",
    outline:
      "border border-success-400 text-success-400 hover:border-success-300 hover:text-success-300 active:border-success-500 disabled:border-success-200 disabled:text-success-200",
    ghost:
      "bg-success-50 text-success-400 hover:bg-success-100 active:bg-success-200 disabled:bg-success-50 disabled:text-success-200",
    link: "text-success-400 hover:text-success-300 active:text-success-500 disabled:text-success-200",
  },
  danger: {
    default:
      "bg-danger-400 text-white hover:bg-danger-300 active:bg-danger-500 disabled:bg-danger-50 disabled:text-danger-200",
    outline:
      "border border-danger-400 text-danger-400 hover:border-danger-300 hover:text-danger-300 active:border-danger-500 disabled:border-danger-200 disabled:text-danger-200",
    ghost:
      "bg-danger-50 text-danger-400 hover:bg-danger-100 active:bg-danger-200 disabled:bg-danger-50 disabled:text-danger-200",
    link: "text-danger-400 hover:text-danger-300 active:text-danger-500 disabled:text-danger-200",
  },
  warning: {
    default:
      "bg-warning-400 text-white hover:bg-warning-300 active:bg-warning-500 disabled:bg-warning-50 disabled:text-warning-200",
    outline:
      "border border-warning-400 text-warning-400 hover:border-warning-300 hover:text-warning-300 active:border-warning-500 disabled:border-warning-200 disabled:text-warning-200",
    ghost:
      "bg-warning-50 text-warning-400 hover:bg-warning-100 active:bg-warning-200 disabled:bg-warning-50 disabled:text-warning-200",
    link: "text-warning-400 hover:text-warning-300 active:text-warning-500 disabled:text-warning-200",
  },
};

const SIZE_CLASSES = {
  sm: { iconOnly: "min-w-21 h-8 px-3 py-2 text-sm", default: "min-w-16 h-8 px-3 py-2 text-sm" },
  md: { iconOnly: "w-11 h-11 p-3", default: "h-11 min-w-21 px-4 py-3 text-lg " },
  lg: { iconOnly: "w-13 h-13 p-4", default: "h-13 min-w-21 p-4 text-lg  " },
};

export const Button: FC<ButtonProps> = ({
  children,
  icon: Icon,
  iconPosition = "left",
  iconSize = 20,
  iconOnly = false,
  variant = "default",
  color = "primary",
  size = "md",
  loading = false,
  disabled = false,
  fullWidth = false,
  className = "",
  type = "button",
  ...rest
}) => {
  // Removed configuration mappings internally to avoid instantiation per render lifecycle

  // ══════════════════════════════════════
  // Base Classes
  // ══════════════════════════════════════
  const baseClasses = cn(
    // Base
    "inline-flex items-center justify-center gap-2",
    "font-medium rounded-xl whitespace-nowrap",
    "transition-all duration-200 outline-none cursor-pointer",

    // Focus
    "focus-visible:ring-2 focus-visible:ring-ring/50",

    // Disabled
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60",

    // Icon sizing
    "[&_svg]:shrink-0",

    // Full Width
    fullWidth && "w-full",

    // Size
    SIZE_CLASSES[size as keyof typeof SIZE_CLASSES]?.[iconOnly ? "iconOnly" : "default"],

    // Color + Variant
    (COLOR_VARIANTS[color as keyof typeof COLOR_VARIANTS] as Record<string, string>)?.[variant],

    // Custom className
    className,
  );

  // ══════════════════════════════════════
  // Render Icon
  // ══════════════════════════════════════
  const renderIcon = () => {
    if (loading) {
      return <Loader2 size={iconSize} className="animate-spin" />;
    }
    if (Icon) {
      return <Icon size={iconSize} />;
    }
    return null;
  };

  return (
    <button
      type={type}
      className={baseClasses}
      disabled={disabled || loading}
      {...rest}
    >
      {/* Left Icon */}
      {iconPosition === "left" && renderIcon()}

      {/* Text */}
      {!iconOnly && children}

      {/* Right Icon */}
      {iconPosition === "right" && !loading && renderIcon()}
    </button>
  );
};
