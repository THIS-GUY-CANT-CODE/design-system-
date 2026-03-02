// ============================================================================
//  ORGANISM: ActivityFeed
//  Chronological event feed with actor, action, and target.
//  All style values use CSS custom properties from theme.css.
//  Typography: Inter (--font-family-primary).
//  Imports: atoms only.
// ============================================================================
import React from "react";
import { Typography, Avatar } from "../../atoms";

interface ActivityItem {
  actor: string;
  action: string;
  target?: string;
  time: string;
  type?: "created" | "updated" | "deleted" | "deployed" | "failed" | "info";
}

interface ActivityFeedProps {
  items?: ActivityItem[];
  className?: string;
}

export function ActivityFeed({ items, className }: ActivityFeedProps) {
  const typeColor: Record<string, string> = {
    created: "var(--status-healthy)",
    updated: "var(--accent)",
    deleted: "var(--status-unhealthy)",
    deployed: "var(--primary)",
    failed: "var(--status-unhealthy)",
    info: "var(--fg-disabled)",
  };
  const defaultItems: ActivityItem[] = [
    { actor: "Sarah C.", action: "deployed", target: "gpt-base-v2", time: "2m ago", type: "deployed" },
    { actor: "System", action: "failed health check on", target: "worker-pool-3", time: "15m ago", type: "failed" },
    { actor: "Marcus W.", action: "created workspace", target: "Vision Experiments", time: "1h ago", type: "created" },
    { actor: "Aisha P.", action: "updated config for", target: "inference-cluster", time: "2h ago", type: "updated" },
  ];
  const data = items ?? defaultItems;
  return (
    <div
      className={className}
      style={{
        background: "var(--card-ds-bg)",
        border: "var(--border-width-thin) solid var(--card-ds-border)",
        borderRadius: "var(--radius-md-ds)",
        overflow: "hidden",
      }}
    >
      <div style={{ padding: "var(--space-3) var(--space-4)", borderBottom: "var(--border-width-thin) solid var(--border-divider)" }}>
        <Typography variant="title" weight="semibold" color="primary">Activity</Typography>
      </div>
      <div>
        {data.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-3)",
              padding: "var(--space-3) var(--space-4)",
              borderBottom: i < data.length - 1 ? "var(--border-width-thin) solid var(--border-divider)" : undefined,
            }}
          >
            <div
              style={{
                width: "var(--size-dot-md)",
                height: "var(--size-dot-md)",
                borderRadius: "var(--radius-full)",
                background: typeColor[item.type ?? "info"],
                flexShrink: 0,
              }}
            />
            <Avatar size="sm" shape="circle" label={item.actor.split(" ").map((s) => s[0]).join("")} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <Typography variant="body" color="primary" truncate>
                <span style={{ fontWeight: "var(--font-weight-semibold)" as any }}>{item.actor}</span>
                {" "}{item.action}{" "}
                {item.target && <span style={{ color: "var(--fg-brand)", fontWeight: "var(--font-weight-medium)" as any }}>{item.target}</span>}
              </Typography>
            </div>
            <Typography variant="micro" color="tertiary" style={{ flexShrink: 0, whiteSpace: "nowrap" as const }}>{item.time}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
