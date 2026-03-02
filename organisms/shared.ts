// ============================================================================
//  ORGANISMS — Shared types and size-token maps
//  All organisms import sizing constants from here.
//  Uses CSS custom properties exclusively — no hardcoded values.
// ============================================================================

export type OrgSize = "sm" | "md" | "lg";

export const dtCellPad: Record<OrgSize, string> = {
  sm: "var(--space-2) var(--space-3)",
  md: "var(--space-2) var(--space-4)",
  lg: "var(--space-3) var(--space-4)",
};

export const drawerWidthVar: Record<OrgSize, string> = {
  sm: "var(--drawer-width-sm)",
  md: "var(--drawer-width-md)",
  lg: "var(--drawer-width-lg)",
};

export const modalWidthVar: Record<OrgSize, string> = {
  sm: "var(--modal-width-sm)",
  md: "var(--modal-width-md)",
  lg: "var(--modal-width-lg)",
};
