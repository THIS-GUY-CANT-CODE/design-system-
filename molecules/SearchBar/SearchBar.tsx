// ============================================================================
//  SEARCH BAR MOLECULE
//  Composes Input atom + SearchIcon atom + optional FilterIcon atom.
//  All style values use CSS custom properties from theme.css.
//  Typography: Inter (--font-family-primary).
//  Imports: atoms only.
// ============================================================================
import * as React from "react";
import { Input } from "../../atoms/Input/Input";
import { SearchIcon } from "../../atoms/icons/SearchIcon";
import { FilterIcon } from "../../atoms/icons/FilterIcon";
import { cn } from "../../atoms/utils";

export interface SearchBarProps {
  /** Placeholder text */
  placeholder?: string;
  /** Controlled value */
  value?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Show the filter icon button */
  showFilter?: boolean;
  /** Filter click handler */
  onFilterClick?: () => void;
  /** Filter active state (highlights the icon) */
  filterActive?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Container className override */
  className?: string;
  /** Container style override */
  style?: React.CSSProperties;
}

export function SearchBar({
  placeholder = "Search...",
  value,
  onChange,
  showFilter = false,
  onFilterClick,
  filterActive = false,
  disabled = false,
  className,
  style,
}: SearchBarProps) {
  return (
    <div
      className={cn("relative flex items-center", className)}
      style={{
        gap: "var(--space-2)",
        fontFamily: "var(--font-family-primary)",
        ...style,
      }}
    >
      {/* Search input with leading icon */}
      <div className="relative flex-1">
        {/* Leading search icon */}
        <div
          className="pointer-events-none absolute left-0 top-0 flex items-center justify-center"
          style={{
            width: "var(--btn-height-md)",
            height: "var(--input-ds-height-md)",
            color: "var(--fg-tertiary)",
          }}
        >
          <SearchIcon size={16} color="currentColor" />
        </div>

        <Input
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          style={{
            paddingLeft: "var(--btn-height-md)",
          }}
        />
      </div>

      {/* Optional filter button */}
      {showFilter && (
        <button
          type="button"
          onClick={onFilterClick}
          disabled={disabled}
          aria-label="Filter"
          aria-pressed={filterActive}
          className="flex items-center justify-center shrink-0 transition-colors outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            width: "var(--input-ds-height-md)",
            height: "var(--input-ds-height-md)",
            borderRadius: "var(--input-ds-radius)",
            border: `var(--border-width-thin) solid ${filterActive ? "var(--border-brand)" : "var(--border-default)"}`,
            backgroundColor: filterActive ? "var(--bg-brand-subtle)" : "var(--bg-primary)",
            color: filterActive ? "var(--fg-brand)" : "var(--fg-tertiary)",
            cursor: disabled ? "not-allowed" : "pointer",
          }}
        >
          <FilterIcon size={16} color="currentColor" />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
