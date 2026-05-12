import type { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

/**
 * Unified error type for atomic form components.
 * Handles standard field errors, nested object errors, and array-based errors.
 */
export type AtomError =
  | string
  | FieldError
  | Merge<FieldError, FieldErrorsImpl<any>> // eslint-disable-line @typescript-eslint/no-explicit-any
  | Merge<FieldError, (FieldError | undefined)[]>;
