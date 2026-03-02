// ============================================================================
//  ORGANISM: CardGrid
//  Responsive grid layout for card collections.
//  All style values use CSS custom properties from theme.css.
// ============================================================================
import React from "react";

interface CardGridProps {
  columns?: 1 | 2 | 3;
  gap?: string;
  children: React.ReactNode;
  className?: string;
}

export function CardGrid({
  columns = 2,
  gap = "var(--space-4)",
  children,
  className,
}: CardGridProps) {
  return (
    <div
      className={className}
      style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, gap }}
    >
      {children}
    </div>
  );
}
