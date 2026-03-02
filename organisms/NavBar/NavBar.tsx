// ============================================================================
//  ORGANISM: NavBar
//  Top navigation bar with brand, links, search, and user avatar.
//  All style values use CSS custom properties from theme.css.
//  Typography: Inter (--font-family-primary), DM Sans (--font-family-display).
//  Imports: atoms + molecules only.
// ============================================================================
import React from "react";
import {
  Typography, Avatar, BadgeLabel, Button,
} from "../../atoms";
import {
  LegacySearchBar as SearchBar,
} from "../../molecules";

interface NavBarProps {
  brand?: string;
  items?: string[];
  activeIndex?: number;
  className?: string;
}

export function NavBar({
  brand = "ICM+",
  items = ["Admin Tools", "Workspaces"],
  activeIndex = 1,
  className,
}: NavBarProps) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 var(--space-4)",
        height: "var(--topnav-height-md)",
        background: "var(--bg-primary)",
        borderBottom: "var(--border-width-thin) solid var(--border-divider)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-6)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
          <div
            style={{
              width: "var(--size-control-md)",
              height: "var(--size-control-md)",
              borderRadius: "var(--radius-sm-ds)",
              background: "var(--bg-brand)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <rect x="1" y="1" width="7" height="7" rx="1.5" fill="var(--primary-foreground)" />
              <rect x="10" y="1" width="7" height="7" rx="1.5" fill="var(--primary-foreground)" style={{ fillOpacity: "var(--opacity-logo-secondary)" }} />
              <rect x="1" y="10" width="7" height="7" rx="1.5" fill="var(--primary-foreground)" style={{ fillOpacity: "var(--opacity-logo-secondary)" }} />
              <rect x="10" y="10" width="7" height="7" rx="1.5" fill="var(--primary-foreground)" style={{ fillOpacity: "var(--opacity-subtle)" }} />
            </svg>
          </div>
          <Typography variant="title" weight="bold" color="primary">{brand}</Typography>
        </div>
        {items.map((item, i) => (
          <Typography
            key={item}
            variant="body"
            weight={i === activeIndex ? "semibold" : "medium"}
            color={i === activeIndex ? "brand" : "secondary"}
            style={{ cursor: "pointer" }}
          >
            {item}
          </Typography>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
        <SearchBar width="var(--navbar-search-w)" size="sm" />
        <Typography variant="body" color="secondary" style={{ cursor: "pointer" }}>Docs</Typography>
        <Avatar size="sm" shape="circle" label="ME" />
      </div>
    </div>
  );
}
