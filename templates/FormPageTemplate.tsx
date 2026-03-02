// ============================================================================
//  TEMPLATE: FormPageTemplate
//  Form page layout with page header, breadcrumb navigation, a form
//  content area, and a sticky action bar at the bottom.
//
//  Defines WHERE organisms go, not WHAT they say.
//  All style values reference CSS custom properties from theme.css.
//  Typography: Inter (--font-family-primary), DM Sans (--font-family-display),
//              Cousine (--font-family-mono).
// ============================================================================
import React from "react";

/* ── Public types ─────────────────────────────────────────────── */

export interface FormPageTemplateProps {
  /** Breadcrumb navigation — rendered at the top of the page. */
  breadcrumb?: React.ReactNode;

  /** Page title rendered in the display font. */
  title?: React.ReactNode;

  /** Optional description text below the title. */
  description?: React.ReactNode;

  /**
   * Form content area — form fields, field groups, sections.
   * Centered horizontally with a max-width constraint.
   */
  children: React.ReactNode;

  /**
   * Sticky action bar at the bottom — Save, Cancel, Submit buttons.
   * Sticks to the bottom of the viewport when the form is long.
   */
  actions?: React.ReactNode;

  /**
   * Optional sidebar — form navigation, help panel, preview.
   * Rendered to the right of the form content area.
   */
  sidebar?: React.ReactNode;

  /**
   * Optional secondary actions on the left side of the action bar.
   * E.g. "Delete", "Reset", step indicator.
   */
  actionsLeft?: React.ReactNode;

  /** Forward a className to the root container. */
  className?: string;

  /** Forward a style object to the root container. */
  style?: React.CSSProperties;
}

/* ── Component ────────────────────────────────────────────────── */

export function FormPageTemplate({
  breadcrumb,
  title,
  description,
  children,
  actions,
  sidebar,
  actionsLeft,
  className,
  style,
}: FormPageTemplateProps) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        fontFamily: "var(--font-family-primary)",
        ...style,
      }}
    >
      {/* ── BREADCRUMB ─────────────────────────────────────────── */}
      {breadcrumb && (
        <div
          data-slot="breadcrumb"
          style={{
            display: "flex",
            alignItems: "center",
            minHeight: "var(--breadcrumb-height)",
            padding: "0 var(--template-shell-content-padding)",
            background: "var(--breadcrumb-bg)",
            borderBottom: "var(--border-width-thin) solid var(--border-default)",
            fontFamily: "var(--font-family-primary)",
            fontSize: "var(--text-caption)",
            color: "var(--breadcrumb-fg)",
            flexShrink: 0,
          }}
        >
          {breadcrumb}
        </div>
      )}

      {/* ── SCROLLABLE BODY ────────────────────────────────────── */}
      <div
        style={{
          flex: 1,
          overflow: "auto",
          display: "flex",
          justifyContent: "center",
          padding: "var(--template-shell-content-padding)",
          paddingBottom: actions
            ? "calc(var(--template-form-action-h) + var(--template-shell-content-padding))"
            : "var(--template-shell-content-padding)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "var(--template-dashboard-gap)",
            width: "100%",
            maxWidth: sidebar
              ? "calc(var(--template-form-max-w) + var(--template-detail-sidebar-w) + var(--template-dashboard-gap))"
              : "var(--template-form-max-w)",
          }}
        >
          {/* Main form column */}
          <div
            data-slot="form-content"
            style={{
              flex: 1,
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              gap: "var(--template-form-gap)",
            }}
          >
            {/* Page header */}
            {(title || description) && (
              <div
                data-slot="form-header"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-1)",
                  paddingBottom: "var(--space-4)",
                  borderBottom: "var(--border-width-thin) solid var(--border-default)",
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

            {/* Form fields */}
            {children}
          </div>

          {/* Optional sidebar */}
          {sidebar && (
            <aside
              data-slot="form-sidebar"
              style={{
                width: "var(--template-detail-sidebar-w)",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-4)",
              }}
            >
              {sidebar}
            </aside>
          )}
        </div>
      </div>

      {/* ── STICKY ACTION BAR ──────────────────────────────────── */}
      {(actions || actionsLeft) && (
        <div
          data-slot="action-bar"
          style={{
            position: "sticky",
            bottom: 0,
            zIndex: "var(--z-sticky)" as any,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "var(--template-form-action-h)",
            padding: "var(--space-3) var(--template-shell-content-padding)",
            background: "var(--template-form-action-bg)",
            borderTop: "var(--border-width-thin) solid var(--template-form-action-border)",
            boxShadow: "var(--template-form-action-shadow)",
            fontFamily: "var(--font-family-primary)",
            flexShrink: 0,
          }}
        >
          {/* Left actions */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-2)",
            }}
          >
            {actionsLeft}
          </div>

          {/* Right actions (primary) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-2)",
            }}
          >
            {actions}
          </div>
        </div>
      )}
    </div>
  );
}

export default FormPageTemplate;
