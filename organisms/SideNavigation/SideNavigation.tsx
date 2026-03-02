// ============================================================================
//  ORGANISM: SideNavigation
//  Vertical sidebar with icon nav items and optional badge counts.
//  All style values use CSS custom properties from theme.css.
//  Typography: Inter (--font-family-primary).
//  Imports: atoms only.
// ============================================================================
import React from "react";
import { Typography, BadgeLabel } from "../../atoms";

interface SideNavItem {
  label: string;
  active?: boolean;
  badge?: string;
  icon?: React.ReactNode;
}

interface SideNavigationProps {
  title?: string;
  items: SideNavItem[];
  footer?: React.ReactNode;
  width?: number | string;
  className?: string;
}

export function SideNavigation({
  title,
  items,
  footer,
  width = "var(--sidebar-ds-width-compact)",
  className,
}: SideNavigationProps) {
  return (
    <div
      className={className}
      style={{
        width,
        display: "flex",
        flexDirection: "column",
        background: "var(--bg-primary)",
        borderRight: "var(--border-width-thin) solid var(--border-divider)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      {title && (
        <div style={{ padding: "var(--space-3) var(--space-4)", borderBottom: "var(--border-width-thin) solid var(--border-divider)" }}>
          <Typography variant="label" weight="bold" color="disabled" mono style={{ letterSpacing: "var(--letter-spacing-tracking-lg)", textTransform: "uppercase" as const }}>
            {title}
          </Typography>
        </div>
      )}
      <div style={{ flex: 1, padding: "var(--space-2)", display: "flex", flexDirection: "column", gap: "var(--sidebar-item-gap)" }}>
        {items.map((item) => (
          <div
            key={item.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--sidebar-item-icon-gap)",
              padding: "0 var(--sidebar-item-padding-x)",
              height: "var(--sidebar-item-height)",
              borderRadius: "var(--sidebar-item-radius)",
              cursor: "pointer",
              background: item.active ? "var(--sidebar-item-bg-active)" : "transparent",
              color: item.active ? "var(--sidebar-item-fg-active)" : "var(--sidebar-item-fg)",
              borderLeft: item.active ? "2px solid var(--primary)" : "2px solid transparent",
              transition: "background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out)",
            }}
          >
            {item.icon && <span style={{ display: "flex", flexShrink: 0 }}>{item.icon}</span>}
            <Typography variant="body" weight={item.active ? "semibold" : "regular"} color={item.active ? "brand" : "secondary"} style={{ flex: 1 }}>
              {item.label}
            </Typography>
            {item.badge && <BadgeLabel label={item.badge} variant={item.active ? "primary" : "neutral"} size="sm" />}
          </div>
        ))}
      </div>
      {footer && (
        <div style={{ padding: "var(--space-3)", borderTop: "var(--border-width-thin) solid var(--border-divider)" }}>
          {footer}
        </div>
      )}
    </div>
  );
}