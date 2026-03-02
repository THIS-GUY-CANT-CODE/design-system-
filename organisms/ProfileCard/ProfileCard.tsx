// ============================================================================
//  ORGANISM: ProfileCard
//  User or resource overview card with stats.
//  All style values use CSS custom properties from theme.css.
//  Typography: Inter (--font-family-primary).
//  Imports: atoms only.
// ============================================================================
import React from "react";
import { Typography, Avatar, Divider, Button } from "../../atoms";

interface ProfileCardProps {
  name?: string;
  role?: string;
  email?: string;
  stats?: { label: string; value: string }[];
  className?: string;
}

export function ProfileCard({
  name = "Jane Doe",
  role = "Product Designer",
  email,
  stats = [],
  className,
}: ProfileCardProps) {
  return (
    <div
      className={className}
      style={{
        background: "var(--card-ds-bg)",
        border: "var(--border-width-thin) solid var(--card-ds-border)",
        borderRadius: "var(--radius-md-ds)",
        overflow: "hidden",
        boxShadow: "var(--shadow-sm)",
        width: "var(--card-profile-width)",
      }}
    >
      <div style={{ height: "var(--card-img-header-h)", background: "linear-gradient(135deg, var(--card-header-grad-from), var(--card-header-grad-to))" }} />
      <div style={{ padding: "0 var(--space-4) var(--space-4)" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginTop: "calc(-1 * var(--space-6))",
            marginBottom: "var(--space-3)",
          }}
        >
          <Avatar size="lg" shape="circle" label={name.split(" ").map((s) => s[0]).join("")} style={{ border: "var(--border-width-medium) solid var(--bg-primary)" }} />
          <Button variant="secondary" size="sm">Message</Button>
        </div>
        <Typography variant="title" weight="semibold" color="primary">{name}</Typography>
        <Typography variant="label" color="secondary" style={{ marginTop: "var(--space-half)" }}>{role}</Typography>
        {email && <Typography variant="label" color="brand" style={{ marginTop: "var(--space-half)" }}>{email}</Typography>}
        {stats.length > 0 && (
          <div style={{ display: "contents" }}>
            <Divider style={{ margin: "var(--space-3) 0" }} />
            <div style={{ display: "flex", gap: "var(--space-4)" }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <Typography variant="title" weight="bold" color="primary">{s.value}</Typography>
                  <Typography variant="micro" color="tertiary">{s.label}</Typography>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}