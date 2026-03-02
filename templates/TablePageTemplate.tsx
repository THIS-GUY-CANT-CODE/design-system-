// ============================================================================
//  TEMPLATE: TablePageTemplate
//  Table page layout with page header, toolbar area for search/filter/sort
//  controls, a DataTable content area, and a pagination footer.
//
//  Defines WHERE organisms go, not WHAT they say.
//  All style values reference CSS custom properties from theme.css.
//  Typography: Inter (--font-family-primary), DM Sans (--font-family-display),
//              Cousine (--font-family-mono).
// ============================================================================
import React from "react";

/* ── Public types ─────────────────────────────────────────────── */

export interface TablePageTemplateProps {
  /** Page title rendered in the display font. */
  title?: React.ReactNode;

  /** Optional description text below the title. */
  description?: React.ReactNode;

  /**
   * Header actions — typically primary CTA buttons (e.g. "Add New", "Export").
   * Rendered inline with the title, aligned to the right.
   */
  headerActions?: React.ReactNode;

  /**
   * Toolbar row — search bar, filter chips, sort controls, view toggles.
   * Rendered as a horizontal flex row between the header and table.
   */
  toolbar?: React.ReactNode;

  /**
   * Main table content area — DataTable or any tabular organism.
   * Fills all remaining vertical space.
   */
  children: React.ReactNode;

  /**
   * Pagination footer — page controls, row count, rows-per-page selector.
   * Rendered as a sticky footer below the table.
   */
  pagination?: React.ReactNode;

  /**
   * Optional bulk-action bar — appears when rows are selected.
   * Rendered between the toolbar and the table.
   */
  bulkActions?: React.ReactNode;

  /** Forward a className to the root container. */
  className?: string;

  /** Forward a style object to the root container. */
  style?: React.CSSProperties;
}

/* ── Component ────────────────────────────────────────────────── */

export function TablePageTemplate({
  title,
  description,
  headerActions,
  toolbar,
  children,
  pagination,
  bulkActions,
  className,
  style,
}: TablePageTemplateProps) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        maxWidth: "var(--template-shell-content-max-w)",
        padding: "var(--template-shell-content-padding)",
        fontFamily: "var(--font-family-primary)",
        gap: "var(--space-4)",
        ...style,
      }}
    >
      {/* ── PAGE HEADER ───────────────────────────────────────── */}
      {(title || description || headerActions) && (
        <div
          data-slot="page-header"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "var(--space-4)",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-1)",
              minWidth: 0,
              flex: 1,
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

          {headerActions && (
            <div
              data-slot="header-actions"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-2)",
                flexShrink: 0,
              }}
            >
              {headerActions}
            </div>
          )}
        </div>
      )}

      {/* ── TOOLBAR ────────────────────────────────────────────── */}
      {toolbar && (
        <div
          data-slot="toolbar"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--template-table-toolbar-gap)",
            minHeight: "var(--template-table-toolbar-h)",
            flexShrink: 0,
            flexWrap: "wrap",
          }}
        >
          {toolbar}
        </div>
      )}

      {/* ── BULK ACTIONS ───────────────────────────────────────── */}
      {bulkActions && (
        <div
          data-slot="bulk-actions"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-3)",
            padding: "var(--space-2) var(--space-4)",
            background: "var(--bg-brand-subtle)",
            borderRadius: "var(--radius-md-ds)",
            border: "var(--border-width-thin) solid var(--border-brand-subtle)",
            flexShrink: 0,
          }}
        >
          {bulkActions}
        </div>
      )}

      {/* ── TABLE CONTENT ──────────────────────────────────────── */}
      <div
        data-slot="table-content"
        style={{
          flex: 1,
          minHeight: 0,
          overflow: "auto",
          background: "var(--table-bg)",
          border: "var(--border-width-thin) solid var(--table-border)",
          borderRadius: "var(--table-radius)",
        }}
      >
        {children}
      </div>

      {/* ── PAGINATION FOOTER ──────────────────────────────────── */}
      {pagination && (
        <div
          data-slot="pagination"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "var(--template-table-footer-h)",
            flexShrink: 0,
            fontFamily: "var(--font-family-primary)",
            fontSize: "var(--text-caption)",
            color: "var(--fg-secondary)",
          }}
        >
          {pagination}
        </div>
      )}
    </div>
  );
}

export default TablePageTemplate;
