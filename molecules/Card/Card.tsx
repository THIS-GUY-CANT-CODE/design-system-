// ============================================================================
//  CARD MOLECULE
//  Composes a container with header, content, and footer sections.
//  All style values use CSS custom properties from theme.css.
//  Typography: Inter (--font-family-primary).
//  Imports: atoms only.
// ============================================================================
import * as React from "react";
import { cn } from "../../atoms/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "flex flex-col text-card-foreground transition-shadow duration-200 hover:shadow-md",
        className,
      )}
      style={{
        background: "var(--card-ds-bg)",
        borderRadius: "var(--card-ds-radius-md)",
        border: "var(--border-width-thin) solid var(--card-ds-border)",
        gap: "var(--space-6)",
        fontFamily: "var(--font-family-primary)",
      }}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      style={{
        gap: "var(--space-1)",
        paddingInline: "var(--card-ds-padding-lg)",
        paddingTop: "var(--card-ds-padding-lg)",
      }}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <h4
      data-slot="card-title"
      className={cn(className)}
      style={{
        fontFamily: "var(--font-family-primary)",
        fontSize: "var(--card-ds-font-title)",
        fontWeight: "var(--font-weight-semibold)",
        lineHeight: "var(--line-height-lg)",
        color: "var(--fg-primary)",
      }}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <p
      data-slot="card-description"
      className={cn(className)}
      style={{
        fontFamily: "var(--font-family-primary)",
        fontSize: "var(--card-ds-font-meta)",
        color: "var(--fg-secondary)",
        lineHeight: "var(--line-height-sm)",
      }}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("[&:last-child]:pb-6", className)}
      style={{ paddingInline: "var(--card-ds-padding-lg)" }}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center [.border-t]:pt-6", className)}
      style={{
        paddingInline: "var(--card-ds-padding-lg)",
        paddingBottom: "var(--card-ds-padding-lg)",
      }}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};