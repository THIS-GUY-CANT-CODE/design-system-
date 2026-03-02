// ============================================================================
//  TEMPLATE: EmptyStateTemplate
//  Centered layout with illustration placeholder, heading, description
//  text, and a call-to-action button.
//
//  Used when a page or section has no content to display — e.g. empty
//  tables, first-run experiences, search with no results.
//
//  Defines WHERE organisms go, not WHAT they say.
//  All style values reference CSS custom properties from theme.css.
//  Typography: Inter (--font-family-primary), DM Sans (--font-family-display),
//              Cousine (--font-family-mono).
// ============================================================================
import React from "react";

/* ── Public types ─────────────────────────────────────────────── */

export interface EmptyStateTemplateProps {
  /**
   * Illustration slot — an SVG, icon, or image component.
   * Rendered inside a circular container above the heading.
   * If not provided, a default placeholder circle is shown.
   */
  illustration?: React.ReactNode;

  /** Heading text — e.g. "No results found", "Get started". */
  heading?: React.ReactNode;

  /** Description text — supporting copy below the heading. */
  description?: React.ReactNode;

  /**
   * Call-to-action — typically a Button or link.
   * Rendered below the description text.
   */
  action?: React.ReactNode;

  /**
   * Optional secondary action — e.g. "Learn more" link.
   * Rendered below the primary action.
   */
  secondaryAction?: React.ReactNode;

  /**
   * Optional extra content below the actions — e.g. a list of
   * suggestions, keyboard shortcuts, or helpful tips.
   */
  children?: React.ReactNode;

  /**
   * Minimum height of the empty state container.
   * Useful for filling a specific region (e.g. table body).
   * @default "400px"
   */
  minHeight?: string;

  /** Forward a className to the root container. */
  className?: string;

  /** Forward a style object to the root container. */
  style?: React.CSSProperties;
}

/* ── Component ────────────────────────────────────────────────── */

export function EmptyStateTemplate({
  illustration,
  heading,
  description,
  action,
  secondaryAction,
  children,
  minHeight = "400px",
  className,
  style,
}: EmptyStateTemplateProps) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight,
        padding: "var(--template-shell-content-padding)",
        fontFamily: "var(--font-family-primary)",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "var(--template-empty-gap)",
          maxWidth: "var(--template-empty-max-w)",
        }}
      >
        {/* ── ILLUSTRATION ──────────────────────────────────────── */}
        <div
          data-slot="illustration"
          style={{
            width: "var(--template-empty-icon-size)",
            height: "var(--template-empty-icon-size)",
            borderRadius: "var(--radius-full-ds)",
            background: "var(--template-empty-illustration-bg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            color: "var(--template-empty-illustration-fg)",
          }}
        >
          {illustration ?? (
            /* Default placeholder icon */
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M16 6v20M6 16h20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>

        {/* ── HEADING ───────────────────────────────────────────── */}
        {heading && (
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-family-display)",
              fontSize: "var(--text-heading)",
              lineHeight: "var(--line-height-xl)",
              color: "var(--fg-primary)",
              letterSpacing: "var(--letter-spacing-heading)",
            }}
          >
            {heading}
          </h2>
        )}

        {/* ── DESCRIPTION ───────────────────────────────────────── */}
        {description && (
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-family-primary)",
              fontSize: "var(--page-desc-size)",
              color: "var(--page-desc-color)",
              lineHeight: "var(--line-height-lg)",
            }}
          >
            {description}
          </p>
        )}

        {/* ── ACTIONS ───────────────────────────────────────────── */}
        {(action || secondaryAction) && (
          <div
            data-slot="actions"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "var(--space-3)",
              paddingTop: "var(--space-2)",
            }}
          >
            {action}
            {secondaryAction && (
              <div
                style={{
                  fontSize: "var(--text-caption)",
                  color: "var(--fg-link)",
                }}
              >
                {secondaryAction}
              </div>
            )}
          </div>
        )}

        {/* ── EXTRA CONTENT ─────────────────────────────────────── */}
        {children && (
          <div
            data-slot="extra"
            style={{ paddingTop: "var(--space-2)", width: "100%" }}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

export default EmptyStateTemplate;
