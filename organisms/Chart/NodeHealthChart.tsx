// ============================================================================
//  ORGANISM: NodeHealthChart
//  A node health status chart built on the Chart organism primitives.
//  Displays cluster node health over time using stacked area / bar charts.
//  All style values use CSS custom properties from theme.css.
//  Typography: Inter (--font-family-primary), Cousine (--font-family-mono).
//  Imports: atoms + molecules + Chart organism primitives only.
// ============================================================================
import React from "react";
import { Typography } from "../../atoms";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "./Chart";
import type { ChartConfig } from "./Chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

// ── Types ──────────────────────────────────────────────────────────────────
export interface NodeHealthDataPoint {
  time: string;
  healthy: number;
  warning: number;
  unhealthy: number;
  maintenance: number;
}

export interface NodeHealthChartProps {
  data?: NodeHealthDataPoint[];
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

// ── Default demo data ──────────────────────────────────────────────────────
const DEFAULT_DATA: NodeHealthDataPoint[] = [
  { time: "00:00", healthy: 42, warning: 3, unhealthy: 1, maintenance: 2 },
  { time: "04:00", healthy: 40, warning: 4, unhealthy: 2, maintenance: 2 },
  { time: "08:00", healthy: 38, warning: 5, unhealthy: 3, maintenance: 2 },
  { time: "12:00", healthy: 41, warning: 3, unhealthy: 2, maintenance: 2 },
  { time: "16:00", healthy: 43, warning: 2, unhealthy: 1, maintenance: 2 },
  { time: "20:00", healthy: 44, warning: 2, unhealthy: 0, maintenance: 2 },
  { time: "24:00", healthy: 42, warning: 3, unhealthy: 1, maintenance: 2 },
];

// ── Chart config ───────────────────────────────────────────────────────────
const chartConfig: ChartConfig = {
  healthy:     { label: "Healthy",     color: "var(--status-healthy)" },
  warning:     { label: "Warning",     color: "var(--status-warning)" },
  unhealthy:   { label: "Unhealthy",   color: "var(--status-unhealthy)" },
  maintenance: { label: "Maintenance", color: "var(--fg-disabled)" },
};

// ── Component ──────────────────────────────────────────────────────────────
export function NodeHealthChart({
  data = DEFAULT_DATA,
  title = "Node Health",
  className,
  style,
}: NodeHealthChartProps) {
  return (
    <div
      className={className}
      style={{
        background: "var(--card-ds-bg)",
        border: "var(--border-width-thin) solid var(--card-ds-border)",
        borderRadius: "var(--radius-md-ds)",
        boxShadow: "var(--shadow-sm)",
        overflow: "hidden",
        fontFamily: "var(--font-family-primary)",
        ...style,
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "var(--space-3) var(--space-4)",
          borderBottom: "var(--border-width-thin) solid var(--border-divider)",
        }}
      >
        <Typography variant="title" weight="semibold" color="primary">
          {title}
        </Typography>
      </div>

      {/* Chart */}
      <div style={{ padding: "var(--space-4)", height: 280 }}>
        <ChartContainer config={chartConfig} className="h-full w-full">
          <BarChart data={data} stackOffset="none">
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--text-micro)" }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--text-micro)" }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="healthy"     stackId="a" fill="var(--status-healthy)"   radius={[0, 0, 0, 0]} />
            <Bar dataKey="warning"     stackId="a" fill="var(--status-warning)"   radius={[0, 0, 0, 0]} />
            <Bar dataKey="unhealthy"   stackId="a" fill="var(--status-unhealthy)" radius={[0, 0, 0, 0]} />
            <Bar dataKey="maintenance" stackId="a" fill="var(--fg-disabled)"      radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}