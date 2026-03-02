// ============================================================================
//  ORGANISM: Chart
//  Re-exports the shadcn/recharts chart primitives from ui/chart.tsx.
//  Composes responsive container + tooltip + legend + style injection.
//  All style values use CSS custom properties from theme.css.
// ============================================================================
export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
} from "../../app/components/ui/chart";

export type { ChartConfig } from "../../app/components/ui/chart";
