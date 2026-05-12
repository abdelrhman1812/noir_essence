// components/atoms/Input/Input.types.ts

import type { AtomError } from "@/src/types/form.types";
import type { LucideIcon } from "lucide-react";
import type { CSSProperties, InputHTMLAttributes } from "react";
import type {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

export interface InputProps<T extends FieldValues = FieldValues> extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value" | "defaultValue" | "size" | "name"
> {
  // ══════════════════════════════════════
  // React Hook Form Props
  // ══════════════════════════════════════
  register?: UseFormRegister<T>;
  name: Path<T>;
  rules?: RegisterOptions<T, Path<T>>;
  errors?: AtomError;

  // ══════════════════════════════════════
  // Layout Props
  // ══════════════════════════════════════
  label?: string;
  labelWidth?: string | number;
  inputWidth?: string | number;

  // ══════════════════════════════════════
  // Size
  // ══════════════════════════════════════
  size?: "sm" | "md" | "lg";

  // ══════════════════════════════════════
  // Icon Props
  // ══════════════════════════════════════
  icon?:
    | LucideIcon
    | React.ComponentType<{ size?: number; className?: string }>;
  iconPosition?: "left" | "right";
  iconSize?: number;
  onIconClick?: () => void;
  actionButton?: React.ReactNode;

  // ══════════════════════════════════════
  // Styling Props
  // ══════════════════════════════════════
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
  iconClassName?: string;

  // Custom Styles
  containerStyle?: CSSProperties;
  labelStyle?: CSSProperties;
  inputStyle?: CSSProperties;

  // ══════════════════════════════════════
  // Input Attributes (Overrides)
  // ══════════════════════════════════════
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  defaultValue?: string | number;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  id?: string;
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "url"
    | "search"
    | "date"
    | "time";
}
