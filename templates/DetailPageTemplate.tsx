// ============================================================================
//  TEMPLATE: DetailPageTemplate
//  Detail page layout with breadcrumb, a hero/header section, tabbed
//  content area, and a related-items sidebar.
//
//  Defines WHERE organisms go, not WHAT they say.
//  All style values reference CSS custom properties from theme.css.
//  Typography: Inter (--font-family-primary), DM Sans (--font-family-display),
//              Cousine (--font-family-mono).
// ============================================================================
import React from "react";

/* ── Public types ─────────────────────────────────────────────── */

export interface DetailPageTemplateProps {
  /** Breadcrumb navigation — rendered at the top of the page. */
  breadcrumb?: React.ReactNode;

  /**
   * Hero / header section — title, metadata, status, cover image,
   * avatar, or any prominent header organism.
   * Rendered as a full-width block below the breadcrumb.
   */
  hero?: React.ReactNode;

  /**
   * Tab navigation — rendered below the hero.
   * Typically a Tabs organism controlling which tab panel is visible.
   */
  tabs?: React.ReactNode;

  /**
   * Main tabbed content area — the currently active tab panel.
   * Fills all remaining space to the left of the sidebar.
   */
  children: React.ReactNode;

  /**
   * Related-items sidebar — metadata cards, related resources,
   * quick actions, or contextual information.
   * Rendered to the right of the main content.
   */
  sidebar?: React.ReactNode;

  /**
   * Optional actions rendered inside the hero header area.
   * E.g. "Edit", "Delete", "Share" buttons.
   */
  heroActions?: React.ReactNode;

  /** Forward a className to the root container. */
  className?: string;

  /** Forward a style object to the root container. */
  style?: React.CSSProperties;
}

/* ── Component ────────────────────────────────────────────────── */

export function DetailPageTemplate({
  breadcrumb,
  hero,
  tabs,
  children,
  sidebar,
  heroActions,
  className,
  style,
}: DetailPageTemplateProps) {
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

      {/* ── HERO / HEADER SECTION ──────────────────────────────── */}
      {(hero || heroActions) && (
        <div
          data-slot="hero"
          style={{
            padding: "var(--template-detail-hero-padding) var(--template-shell-content-padding)",
            background: "var(--template-detail-hero-bg)",
            borderBottom: "var(--border-width-thin) solid var(--border-default)",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "var(--space-4)",
              maxWidth: "var(--template-shell-content-max-w)",
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              {hero}
            </div>
            {heroActions && (
              <div
                data-slot="hero-actions"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-2)",
                  flexShrink: 0,
                }}
              >
                {heroActions}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── TABS ───────────────────────────────────────────────── */}
      {tabs && (
        <div
          data-slot="tabs"
          style={{
            padding: "0 var(--template-shell-content-padding)",
            borderBottom: "var(--border-width-thin) solid var(--border-default)",
            background: "var(--bg-primary)",
            flexShrink: 0,
          }}
        >
          {tabs}
        </div>
      )}

      {/* ── BODY: CONTENT + SIDEBAR ────────────────────────────── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          gap: "var(--template-dashboard-gap)",
          padding: "var(--template-shell-content-padding)",
          minHeight: 0,
          maxWidth: "var(--template-shell-content-max-w)",
        }}
      >
        {/* Main content */}
        <div
          data-slot="tab-content"
          style={{
            flex: 1,
            minWidth: 0,
            overflow: "auto",
          }}
        >
          {children}
        </div>

        {/* Related-items sidebar */}
        {sidebar && (
          <aside
            data-slot="related-sidebar"
            style={{
              width: "var(--template-detail-sidebar-w)",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-4)",
              overflow: "auto",
            }}
          >
            {sidebar}
          </aside>
        )}
      </div>
    </div>
  );
}

export default DetailPageTemplate;
