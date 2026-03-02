// ============================================================================
//  ORGANISM: Drawer
//  Slide-in panel for forms and secondary tasks.
//  All style values use CSS custom properties from theme.css.
//  Typography: Inter (--font-family-primary).
//  Imports: atoms only.
// ============================================================================
import React from "react";
import { Typography } from "../../atoms";
import type { OrgSize } from "../shared";
import { drawerWidthVar } from "../shared";

interface DrawerProps {
  title: string;
  size?: OrgSize;
  open?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
  backLabel?: string;
  className?: string;
}

export function Drawer({
  title,
  size = "md",
  open = true,
  onClose,
  children,
  footer,
  backLabel,
  className,
}: DrawerProps) {
  if (!open) return null;
  return (
    <div
      className={className}
      style={{
        width: drawerWidthVar[size],
        display: "flex",
        flexDirection: "column",
        background: "var(--drawer-bg)",
        border: "var(--border-width-thin) solid var(--drawer-border)",
        borderRadius: "var(--radius-md-ds)",
        boxShadow: "var(--shadow-xl)",
        overflow: "hidden",
        maxHeight: "var(--drawer-panel-max-h)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--space-2)",
          padding: "var(--space-4) var(--space-6)",
          borderBottom: "var(--border-width-thin) solid var(--border-divider)",
          flexShrink: 0,
        }}
      >
        {backLabel && (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ cursor: "pointer", flexShrink: 0 }}>
            <path d="M10 4L6 8L10 12" stroke="var(--icon-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        <Typography variant="title" weight="semibold" color="primary" style={{ flex: 1 }}>{title}</Typography>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ cursor: "pointer", flexShrink: 0 }} onClick={onClose}>
          <path d="M3 3L11 11M11 3L3 11" stroke="var(--icon-tertiary)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <div style={{ flex: 1, overflow: "auto", padding: "var(--space-6)" }}>{children}</div>
      {footer && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "var(--space-2)",
            padding: "var(--space-3) var(--space-6)",
            borderTop: "var(--border-width-thin) solid var(--border-divider)",
            flexShrink: 0,
          }}
        >
          {footer}
        </div>
      )}
    </div>
  );
}
