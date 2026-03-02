// ============================================================================
//  FORM FIELD MOLECULE
//  Composes Label atom + Input atom + optional error message text span.
//  All style values use CSS custom properties from theme.css.
//  Typography: Inter (--font-family-primary).
//  Imports: atoms only (Label, Input).
// ============================================================================
import * as React from "react";
import { Label } from "../../atoms/Label/Label";
import { Input } from "../../atoms/Input/Input";
import { cn } from "../../atoms/utils";

export interface FormFieldProps {
  /** Unique id linking label + input */
  id: string;
  /** Label text */
  label: string;
  /** Optional helper text below the input */
  helperText?: string;
  /** Error message — when set, the field enters error state */
  error?: string;
  /** Mark the field as required (shows asterisk) */
  required?: boolean;
  /** Disable the input */
  disabled?: boolean;
  /** Container className override */
  className?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Input type */
  type?: React.HTMLInputTypeAttribute;
  /** Controlled value */
  value?: string;
  /** Uncontrolled default value */
  defaultValue?: string;
  /** Change handler */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** Blur handler */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  /** Pass-through input props */
  inputProps?: Omit<React.ComponentProps<"input">, "id" | "type" | "value" | "onChange" | "onBlur" | "disabled" | "placeholder">;
}

export function FormField({
  id,
  label,
  helperText,
  error,
  required = false,
  disabled = false,
  className,
  placeholder,
  type = "text",
  value,
  defaultValue,
  onChange,
  onBlur,
  inputProps,
}: FormFieldProps) {
  const hasError = Boolean(error);

  return (
    <div
      className={cn("flex flex-col", className)}
      style={{
        gap: "var(--form-field-gap)",
        fontFamily: "var(--font-family-primary)",
      }}
      data-disabled={disabled || undefined}
    >
      {/* Label row */}
      <Label htmlFor={id}>
        {label}
        {required && (
          <span
            aria-hidden="true"
            style={{
              color: "var(--form-required-color)",
              marginLeft: "var(--space-half)",
            }}
          >
            *
          </span>
        )}
      </Label>

      {/* Input */}
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        aria-invalid={hasError || undefined}
        aria-describedby={
          hasError ? `${id}-error` : helperText ? `${id}-helper` : undefined
        }
        style={
          hasError
            ? {
                borderColor: "var(--input-ds-border-error)",
                backgroundColor: "var(--input-ds-bg-error)",
              }
            : undefined
        }
        {...inputProps}
      />

      {/* Error message */}
      {hasError && (
        <span
          id={`${id}-error`}
          role="alert"
          style={{
            fontFamily: "var(--font-family-primary)",
            fontSize: "var(--form-helper-size)",
            lineHeight: "var(--line-height-sm)",
            color: "var(--fg-error)",
          }}
        >
          {error}
        </span>
      )}

      {/* Helper text (hidden when error is present) */}
      {!hasError && helperText && (
        <span
          id={`${id}-helper`}
          style={{
            fontFamily: "var(--font-family-primary)",
            fontSize: "var(--form-helper-size)",
            lineHeight: "var(--line-height-sm)",
            color: "var(--form-helper-color)",
          }}
        >
          {helperText}
        </span>
      )}
    </div>
  );
}

export default FormField;