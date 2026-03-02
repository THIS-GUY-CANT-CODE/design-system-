// ============================================================================
//  STAT CARD MOLECULE
//  Composes icon + metric value + label, matching the Stat_Cards design.
//  All style values use CSS custom properties from theme.css.
//  Typography: DM Sans (--font-family-display) for the value,
//              Inter (--font-family-primary) for label/change text.
//  Imports: atoms only.
// ============================================================================
import * as React from "react";
import { cn } from "../../atoms/utils";

type StatSize = "sm" | "md" | "lg";

export interface StatCardProps {
  /** KPI label, e.g. "Total Users" */
  label: string;
  /** KPI value, e.g. "12,840" */
  value: string;
  /** Delta change string, e.g. "+8.2%" */
  change?: string;
  /** Direction of change — controls colour */
  changeType?: "up" | "down";
  /** Optional icon element (rendered in a tinted container) */
  icon?: React.ReactNode;
  /** sm | md | lg — defaults to md */
  size?: StatSize;
  /** Container className override */
  className?: string;
  /** Container style override */
  style?: React.CSSProperties;
}

const PAD: Record<StatSize, string> = {
  sm: "var(--card-ds-padding-sm)",
  md: "var(--card-ds-padding-md)",
  lg: "var(--card-ds-padding-lg)",
};

export function StatCard({
  label,
  value,
  change,
  changeType,
  icon,
  size = "md",
  className,
  style,
}: StatCardProps) {
  const pad = PAD[size];

  return (
    <div
      className={cn(className)}
      style={{
        background: "var(--card-ds-bg)",
        border: "var(--border-width-thin) solid var(--card-ds-border)",
        borderRadius: "var(--kpi-radius)",
        padding: pad,
        boxShadow: "var(--shadow-sm)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-2)",
        fontFamily: "var(--font-family-primary)",
        ...style,
      }}
    >
      {/* Label row + optional icon */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span
          style={{
            fontFamily: "var(--font-family-primary)",
            fontSize: "var(--kpi-title-size)",
            fontWeight: "var(--font-weight-normal)",
            color: "var(--kpi-title-color)",
            lineHeight: "var(--line-height-md)",
          }}
        >
          {label}
        </span>
        {icon && (
          <div
            style={{
              width: "var(--size-control-md)",
              height: "var(--size-control-md)",
              borderRadius: "var(--radius-sm-ds)",
              background: "var(--bg-brand-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {icon}
          </div>
        )}
      </div>

      {/* Value */}
      <span
        style={{
          fontFamily: "var(--kpi-value-family)",
          fontSize: "var(--kpi-value-size)",
          fontWeight: "var(--kpi-value-weight)",
          color: "var(--fg-primary)",
          lineHeight: "var(--line-height-2xl)",
          letterSpacing: "var(--letter-spacing-heading)",
        }}
      >
        {value}
      </span>

      {/* Change delta */}
      {change && (
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-1)" }}>
          <span
            style={{
              fontFamily: "var(--font-family-primary)",
              fontSize: "var(--text-caption)",
              fontWeight: "var(--font-weight-medium)",
              lineHeight: "var(--line-height-sm)",
              color: changeType === "up" ? "var(--fg-success)" : "var(--fg-error)",
            }}
          >
            {changeType === "up" ? "\u25B2" : "\u25BC"} {change}
          </span>
          <span
            style={{
              fontFamily: "var(--font-family-primary)",
              fontSize: "var(--text-caption)",
              fontWeight: "var(--font-weight-normal)",
              lineHeight: "var(--line-height-sm)",
              color: "var(--fg-tertiary)",
            }}
          >
            vs last month
          </span>
        </div>
      )}
    </div>
  );
}

export default StatCard;
