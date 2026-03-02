// ============================================================================
//  MOLECULE: TableRow
//  A table row cell with a storage usage bar (value label + progress bar).
//  Reclassified from /src/imports/TableRowCell.tsx (molecule, not a page).
//  All style values use CSS custom properties from theme.css.
//  Typography: Inter (--font-family-primary).
// ============================================================================

function Frame() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 text-ellipsis w-full"
      style={{
        gap: "var(--breadcrumb-gap)",
        lineHeight: "var(--line-height-md)",
        fontSize: "var(--text-base)",
        letterSpacing: "var(--letter-spacing-body)",
        fontFamily: "var(--font-family-primary)",
      }}
    >
      <p
        className="overflow-hidden relative shrink-0 whitespace-nowrap"
        style={{
          fontWeight: "var(--font-weight-medium)",
          color: "var(--fg-primary)",
          width: "112px",
        }}
      >
        10 / 50 TB
      </p>
      <p
        className="overflow-hidden relative shrink-0"
        style={{
          fontWeight: "var(--font-weight-normal)",
          color: "var(--fg-tertiary)",
        }}
      >
        100TB
      </p>
    </div>
  );
}

function AllocatedBar() {
  return (
    <div
      className="absolute top-0"
      data-name="Allocated"
      style={{
        backgroundColor: "var(--teal-200)",
        height: "var(--table-viz-bar-height)",
        left: "var(--space-4)",
        width: "26px",
        borderTopRightRadius: "var(--table-viz-bar-radius)",
        borderBottomRightRadius: "var(--table-viz-bar-radius)",
      }}
    />
  );
}

function TrackBar() {
  return (
    <div
      className="overflow-clip relative shrink-0 w-full"
      data-name="Track"
      style={{
        backgroundColor: "var(--teal-50)",
        height: "var(--table-viz-bar-height)",
        borderRadius: "var(--table-viz-bar-radius)",
      }}
    >
      <AllocatedBar />
    </div>
  );
}

function UsedBar() {
  return (
    <div
      className="absolute left-0 top-0"
      data-name="Used"
      style={{
        backgroundColor: "var(--teal-500)",
        height: "var(--table-viz-bar-height)",
        width: "var(--space-4)",
        borderTopLeftRadius: "var(--table-viz-bar-radius)",
        borderBottomLeftRadius: "var(--table-viz-bar-radius)",
      }}
    />
  );
}

function BarGroup() {
  return (
    <div
      className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full"
      data-name="BarGroup"
      style={{ gap: "var(--space-half)" }}
    >
      <TrackBar />
      <UsedBar />
    </div>
  );
}

export default function TableRow() {
  return (
    <div
      className="content-stretch flex flex-col items-start justify-center relative size-full"
      data-name="Table Row Cell"
      style={{
        backgroundColor: "var(--card-ds-bg)",
        gap: "var(--breadcrumb-gap)",
        paddingBlock: "var(--space-2) var(--space-2)",
        paddingInline: "var(--space-3) var(--space-5)",
      }}
    >
      <Frame />
      <BarGroup />
    </div>
  );
}

// Named export for barrel usage
export { TableRow };
