// ============================================================================
//  ORGANISM: Modal
//  Focused dialog for confirmations and quick actions.
//  All style values use CSS custom properties from theme.css.
//  Typography: Inter (--font-family-primary).
//  Imports: atoms only.
// ============================================================================
import React from "react";
import { Typography } from "../../atoms";
import type { OrgSize } from "../shared";
import { modalWidthVar } from "../shared";

interface ModalProps {
  title: string;
  size?: OrgSize;
  open?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export function Modal({
  title,
  size = "md",
  open = true,
  onClose,
  children,
  footer,
  className,
}: ModalProps) {
  if (!open) return null;
  return (
    <div
      className={className}
      style={{
        width: modalWidthVar[size],
        background: "var(--modal-bg)",
        border: "var(--border-width-thin) solid var(--modal-border)",
        borderRadius: "var(--modal-radius)",
        boxShadow: "var(--shadow-xl)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "var(--space-4) var(--space-6)",
          borderBottom: "var(--border-width-thin) solid var(--border-divider)",
        }}
      >
        <Typography variant="title" weight="semibold" color="primary">{title}</Typography>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ cursor: "pointer" }} onClick={onClose}>
          <path d="M3 3L11 11M11 3L3 11" stroke="var(--icon-tertiary)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <div style={{ padding: "var(--space-6)", maxHeight: "var(--panel-content-max-h)", overflow: "auto" }}>
        {children}
      </div>
      {footer && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "var(--space-2)",
            padding: "var(--space-3) var(--space-6)",
            borderTop: "var(--border-width-thin) solid var(--border-divider)",
            background: "var(--bg-flush)",
          }}
        >
          {footer}
        </div>
      )}
    </div>
  );
}
