// ============================================================================
//  TEMPLATE: DashboardTemplate
//  Dashboard layout with sidebar, top stats row, main content grid,
//  and an optional right panel.
//
//  Defines WHERE organisms go, not WHAT they say.
//  All style values reference CSS custom properties from theme.css.
//  Typography: Inter (--font-family-primary), DM Sans (--font-family-display),
//              Cousine (--font-family-mono).
// ============================================================================
import React from "react";

/* ── Public types ─────────────────────────────────────────────── */

export interface DashboardTemplateProps {
  /** Page title rendered in the display font. */
  title?: React.ReactNode;

  /** Optional description text below the title. */
  description?: React.ReactNode;

  /**
   * Top stats row — typically a row of KPI / stat cards.
   * Rendered in a horizontal flex row with even spacing.
   */
  statsRow?: React.ReactNode;

  /**
   * Main content grid area — charts, tables, activity feeds.
   * Rendered as a CSS grid with `--template-dashboard-grid-cols` columns.
   */
  children: React.ReactNode;

  /**
   * Optional right panel — sidebar info, related items, quick actions.
   * Rendered to the right of the main grid with a fixed width.
   */
  rightPanel?: React.ReactNode;

  /**
   * Optional toolbar area between stats and content grid.
   * For filters, date range pickers, view toggles, etc.
   */
  toolbar?: React.ReactNode;

  /**
   * Number of columns for the main content grid.
   * @default 3
   */
  columns?: 1 | 2 | 3 | 4;

  /** Forward a className to the root container. */
  className?: string;

  /** Forward a style object to the root container. */
  style?: React.CSSProperties;
}

/* ── Component ────────────────────────────────────────────────── */

export function DashboardTemplate({
  title,
  description,
  statsRow,
  children,
  rightPanel,
  toolbar,
  columns = 3,
  className,
  style,
}: DashboardTemplateProps) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--template-dashboard-gap)",
        maxWidth: "var(--template-shell-content-max-w)",
        padding: "var(--template-shell-content-padding)",
        fontFamily: "var(--font-family-primary)",
        ...style,
      }}
    >
      {/* ── PAGE HEADER ───────────────────────────────────────── */}
      {(title || description) && (
        <div
          data-slot="page-header"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-1)",
          }}
        >
          {title && (
            <h1
              style={{
                margin: 0,
                fontFamily: "var(--font-family-display)",
                fontSize: "var(--page-title-size)",
                lineHeight: "var(--page-title-line-height)",
                color: "var(--fg-primary)",
                letterSpacing: "var(--letter-spacing-heading)",
              }}
            >
              {title}
            </h1>
          )}
          {description && (
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-family-primary)",
                fontSize: "var(--page-desc-size)",
                color: "var(--page-desc-color)",
              }}
            >
              {description}
            </p>
          )}
        </div>
      )}

      {/* ── STATS ROW ──────────────────────────────────────────── */}
      {statsRow && (
        <div
          data-slot="stats-row"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
            gap: "var(--template-dashboard-stats-gap)",
          }}
        >
          {statsRow}
        </div>
      )}

      {/* ── TOOLBAR ────────────────────────────────────────────── */}
      {toolbar && (
        <div
          data-slot="toolbar"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-3)",
            flexWrap: "wrap",
          }}
        >
          {toolbar}
        </div>
      )}

      {/* ── BODY: MAIN GRID + OPTIONAL RIGHT PANEL ─────────────── */}
      <div
        style={{
          display: "flex",
          gap: "var(--template-dashboard-gap)",
          alignItems: "flex-start",
        }}
      >
        {/* Main content grid */}
        <div
          data-slot="content-grid"
          style={{
            flex: 1,
            minWidth: 0,
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: "var(--template-dashboard-gap)",
          }}
        >
          {children}
        </div>

        {/* Optional right panel */}
        {rightPanel && (
          <aside
            data-slot="right-panel"
            style={{
              width: "var(--template-dashboard-panel-w)",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              gap: "var(--template-dashboard-gap)",
            }}
          >
            {rightPanel}
          </aside>
        )}
      </div>
    </div>
  );
}

export default DashboardTemplate;
