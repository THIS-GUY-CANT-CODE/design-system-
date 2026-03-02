// ============================================================================
//  ORGANISM: DataTable
//  Sortable, paginated table with status cells and row actions.
//  All style values use CSS custom properties from theme.css.
//  Typography: Inter (--font-family-primary).
//  Imports: atoms + molecules only.
// ============================================================================
import React from "react";
import { cn, Typography } from "../../atoms";
import { LegacyPagination as Pagination } from "../../molecules";
import type { OrgSize } from "../shared";
import { dtCellPad } from "../shared";

interface Column {
  key: string;
  title: string;
  render?: (val: any, row: any) => React.ReactNode;
  width?: number;
}

interface DataTableProps {
  title?: string;
  columns: Column[];
  data: Record<string, any>[];
  rowKey?: string;
  actions?: React.ReactNode;
  pagination?: { current: number; total: number };
  size?: OrgSize;
  className?: string;
}

export function DataTable({
  title,
  columns,
  data,
  rowKey = "id",
  actions,
  pagination,
  size = "md",
  className,
}: DataTableProps) {
  return (
    <div
      className={className}
      style={{
        background: "var(--card-ds-bg)",
        border: "var(--border-width-thin) solid var(--card-ds-border)",
        borderRadius: "var(--radius-md-ds)",
        boxShadow: "var(--shadow-sm)",
        overflow: "hidden",
      }}
    >
      {(title || actions) && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "var(--space-3) var(--space-4)",
            borderBottom: "var(--border-width-thin) solid var(--border-divider)",
          }}
        >
          {title && <Typography variant="title" weight="semibold" color="primary">{title}</Typography>}
          {actions && <div style={{ display: "flex", gap: "var(--space-2)" }}>{actions}</div>}
        </div>
      )}
      <div style={{ overflowX: "auto" as const }}>
        <table style={{ width: "100%", borderCollapse: "collapse" as const, fontFamily: "var(--font-family-primary)" }}>
          <thead>
            <tr style={{ borderBottom: "var(--border-width-thin) solid var(--border-divider)", background: "var(--table-header-bg)" }}>
              {columns.map((col) => (
                <th
                  key={col.key}
                  style={{
                    textAlign: "left" as const,
                    padding: dtCellPad[size],
                    fontSize: "var(--text-caption)",
                    fontWeight: "var(--font-weight-medium)" as any,
                    color: "var(--fg-tertiary)",
                    width: col.width,
                  }}
                >
                  {col.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {data.map((row, ri) => (
              <tr
                key={row[rowKey] ?? ri}
                className={cn(
                  "transition-colors duration-150 hover:bg-muted/50",
                )}
              >
                {columns.map((col) => (
                  <td key={col.key} style={{ padding: dtCellPad[size], fontSize: "var(--text-base)", color: "var(--fg-primary)" }}>
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {pagination && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "var(--space-3) var(--space-4)",
            borderTop: "var(--border-width-thin) solid var(--border-divider)",
            background: "var(--bg-flush)",
          }}
        >
          <Typography variant="label" color="tertiary">
            Showing 1–{data.length} of {pagination.total}
          </Typography>
          <Pagination current={pagination.current} total={Math.ceil(pagination.total / data.length)} size="sm" />
        </div>
      )}
    </div>
  );
}
