// ============================================================================
//  ORGANISM: StatsRow
//  Horizontal grid of KPI stat cards.
//  All style values use CSS custom properties from theme.css.
//  Typography: Inter (--font-family-primary).
//  Imports: atoms + molecules only.
// ============================================================================
import React from "react";
import { Icon } from "../../atoms";
import { LegacyStatCard as StatCard } from "../../molecules";

interface StatsRowProps {
  stats?: {
    label: string;
    value: string;
    change?: string;
    changeType?: "up" | "down";
    icon?: React.ReactNode;
  }[];
  className?: string;
}

export function StatsRow({ stats, className }: StatsRowProps) {
  const defaultStats = [
    { label: "Active Models", value: "142", change: "12%", changeType: "up" as const, icon: <Icon name="grid" size="sm" color="brand" /> },
    { label: "Workspaces", value: "38", change: "5%", changeType: "up" as const, icon: <Icon name="folder" size="sm" color="brand" /> },
    { label: "GPU Utilization", value: "76%", change: "3%", changeType: "down" as const, icon: <Icon name="settings" size="sm" color="brand" /> },
    { label: "Avg. Job Duration", value: "4m 12s", icon: <Icon name="clock" size="sm" color="brand" /> },
  ];
  const s = stats ?? defaultStats;
  return (
    <div
      className={className}
      style={{ display: "grid", gridTemplateColumns: `repeat(${s.length}, 1fr)`, gap: "var(--space-4)" }}
    >
      {s.map((stat) => (
        <StatCard key={stat.label} label={stat.label} value={stat.value} change={stat.change} changeType={stat.changeType} icon={stat.icon} />
      ))}
    </div>
  );
}
