"use client";

import { cn } from "@/src/lib/utils";
import {
  useId,
  type ChangeEvent,
  type FocusEvent,
  type KeyboardEvent,
} from "react";
import { type FieldValues } from "react-hook-form";
import type { InputProps } from "./Input.type";

export const Input = <T extends FieldValues = FieldValues>({
  // ── React Hook Form ──────────────────────────────────────────
  register,
  rules,
  name,
  errors,

  // ── Layout ───────────────────────────────────────────────────
  label,
  labelWidth,
  inputWidth,

  // ── Size ─────────────────────────────────────────────────────`
  size = "md",

  // ── Icon ─────────────────────────────────────────────────────
  icon: Icon,
  iconPosition = "right",
  iconSize = 20,
  onIconClick,

  // ── Styling ──────────────────────────────────────────────────
  containerClassName = "",
  labelClassName = "",
  inputClassName = "",
  errorClassName = "",
  iconClassName = "",
  actionButton,

  containerStyle,
  labelStyle,
  inputStyle,

  // ── Native input attributes ───────────────────────────────────
  id,
  type = "text",
  placeholder,
  disabled = false,
  readOnly = false,
  required = false,
  defaultValue,
  value,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  autoComplete,
  maxLength,
  minLength,
  pattern,
}: InputProps<T>) => {
  const reactId = useId();
  const inputId = id || (`${name}-${reactId}` as string);

  // ── Size tokens ───────────────────────────────────────────────
  const SIZES_CONFIG = {
    sm: {
      input: "h-8 text-sm",
      padding: Icon
        ? iconPosition === "left"
          ? "pl-9  pr-3"
          : "pl-3  pr-9"
        : "px-3",
      icon: "left-2.5",
    },
    md: {
      input: "h-10 text-sm",
      padding: Icon
        ? iconPosition === "left"
          ? "pl-11 pr-3"
          : "pl-3  pr-11"
        : "px-3",
      icon: "left-3",
    },
    lg: {
      input: "h-12 text-base",
      padding: Icon
        ? iconPosition === "left"
          ? "pl-13 pr-4"
          : "pl-4  pr-13"
        : "px-4",
      icon: "left-4",
    },
  };

  const currentSizeConfig = SIZES_CONFIG[size] || SIZES_CONFIG.md;

  const iconPos =
    iconPosition === "left"
      ? currentSizeConfig.icon
      : currentSizeConfig.icon.replace("left", "right");

  // ── RHF registration ─────────────────────────────────────────
  const rhfRegister =
    register && name ? register(name, { required, ...rules }) : null;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    rhfRegister?.onChange(e);
    onChange?.(e);
  };

  const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
    rhfRegister?.onBlur(e);
    onBlur?.(e);
  };

  // ── Number-type keyboard guard ────────────────────────────────
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (type === "number") {
      const ALLOWED = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];
      if (
        !/\d/.test(e.key) &&
        !ALLOWED.includes(e.key) &&
        !e.ctrlKey &&
        !e.metaKey
      ) {
        e.preventDefault();
      }
    }
    onKeyDown?.(e);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    if (type === "number" && isNaN(Number(e.clipboardData.getData("text")))) {
      e.preventDefault();
    }
  };

  // ── Derived classes ───────────────────────────────────────────
  const inputClass = cn(
    "w-full rounded-md border bg-[#F7F7F8]",
    "placeholder:text-sm placeholder:text-[#B8B9C1]",
    "transition-colors",
    "focus:outline-none focus:ring-1 focus:ring-primary-400 focus:border-transparent",
    "disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60",
    errors ? "border-red-500" : "border-[#EEEEF0]",
    currentSizeConfig.input,
    currentSizeConfig.padding,
    inputClassName,
  );

  const resolvedInputStyle = inputWidth
    ? { width: inputWidth, ...inputStyle }
    : (inputStyle as React.CSSProperties);

  const errorMessage =
    typeof errors === "string"
      ? errors
      : errors && "message" in errors
        ? (errors.message as string)
        : null;

  return (
    <div className={containerClassName} style={containerStyle}>
      {label && (
        <label
          htmlFor={inputId}
          className={cn(
            "text-sm block  font-medium text-neutral-950",
            labelClassName,
          )}
          style={labelStyle ?? (labelWidth ? { width: labelWidth } : undefined)}
        >
          {label}
          {required && <span className="text-red-500 mr-1">*</span>}
        </label>
      )}

      <div className="flex flex-col flex-1">
        <div className="flex gap-2">
          <div className="relative flex-1 w-full">
            <input
              id={inputId}
              type={type}
              className={inputClass}
              style={resolvedInputStyle}
              placeholder={placeholder}
              disabled={disabled}
              readOnly={readOnly}
              autoComplete={autoComplete}
              maxLength={maxLength}
              minLength={minLength}
              pattern={pattern}
              onFocus={onFocus}
              onKeyDown={handleKeyDown}
              onPaste={handlePaste}
              {...rhfRegister}
              name={name as string}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              {...(value !== undefined ? { value } : {})}
              {...(defaultValue !== undefined ? { defaultValue } : {})}
            />

            {Icon && (
              <span
                className={cn(
                  "absolute top-1/2 -translate-y-1/2",
                  "flex items-center justify-center",
                  iconPos,
                  onIconClick &&
                    !disabled &&
                    "cursor-pointer hover:text-primary-500",
                  disabled && "opacity-50 cursor-not-allowed",
                  iconClassName,
                )}
                onClick={!disabled && onIconClick ? onIconClick : undefined}
              >
                <Icon size={iconSize} className="text-gray-500" />
              </span>
            )}
          </div>
          {actionButton && (
            <div className="shrink-0 flex items-stretch">{actionButton}</div>
          )}
        </div>

        {errors && (
          <span
            className={cn("text-xs text-red-500 mt-2 mx-2", errorClassName)}
          >
            {errorMessage || "هذا الحقل مطلوب"}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
