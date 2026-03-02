// ============================================================================
//  MOLECULES — Canonical barrel export
//  Re-exports every molecule component from its co-located sub-folder.
//  Also explicitly re-exports the DS molecules from the monolith that have
//  NOT yet been split into co-located folders (no wildcard `export *`).
//
//  Molecule rules:
//    - Import only from src/atoms/ or other molecules.
//    - Never from organisms or templates.
// ============================================================================

// ── Co-located Radix-based molecule components ──────────────────────────────
export { Alert, AlertTitle, AlertDescription, alertVariants } from "./Alert/Alert";
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "./Breadcrumb/Breadcrumb";
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "./Card/Card";
export { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs/Tabs";
export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./Accordion/Accordion";
export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "./Pagination/Pagination";
export {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "./HoverCard/HoverCard";
export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
} from "./Popover/Popover";
export {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "./InputOTP/InputOTP";
export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "./Collapsible/Collapsible";
export { Toaster } from "./Sonner/Sonner";

// ── TableRow (existing, now co-located) ─────────────────────────────────────
export { TableRow } from "./TableRow/TableRow";

// ── New molecules ───────────────────────────────────────────────────────────
export { FormField } from "./FormField/FormField";
export type { FormFieldProps } from "./FormField/FormField";

export { SearchBar } from "./SearchBar/SearchBar";
export type { SearchBarProps } from "./SearchBar/SearchBar";

export { StatCard } from "./StatCard/StatCard";
export type { StatCardProps } from "./StatCard/StatCard";

// ── DS molecules from monolith (explicit — no wildcard) ─────────────────────
//    These are showcase / Ant Design-style DS molecules that have NOT yet been
//    split into their own co-located folders. Names that conflict with Radix
//    co-located molecules above or with organism-level components are omitted
//    — the co-located Radix versions are canonical.
export {
  // List & Item patterns
  ListItem,
  CheckboxBlock,
  EmptyState,
  AvatarGroup,
  Transfer,
  BreadcrumbNav,
  // Notification & Toast
  ToastStack,
  NotificationItem,
  Toast,
  // Command palette (DS showcase version)
  CommandPaletteFull,
  CommandPalette,
  // Date / Time
  DateRangePicker,
  // File patterns
  FileCard,
  FileUploadItem,
  // Metric / Stats
  MetricCard,
  StatusRow,
  ResourceStatRow,
  // Actions & Navigation
  ActionBar,
  FilterBar,
  FilterChipGroup,
  // Form patterns
  FormSection,
  InlineEdit,
  MultiStepHeader,
  PageHeader,
  ToggleSwitchField,
  FormInputField,
  SelectDropdown,
  RichMetadataDropdown,
  // Table
  TablePrimitive,
  // Card patterns
  UserCard,
  PricingCard,
  DataCard,
  // DS showcase molecules (name-conflicting with organisms are safe here
  // since organisms barrel uses Radix aliases: RadixDropdownMenu, etc.)
  DropdownMenu,
  ContextMenu,
  AlertDialog,
  Carousel,
  Chart,
  // GPU / Accelerator domain molecules
  GpuModelTag,
  GpuAllocationStepper,
  MigToggleRow,
  MigPartitionBar,
  MigPartitionRow,
  GpuAllocationCard,
  AcceleratorGridCell,
  ResourceBarCell,
  NodeNameCell,
  StorageQuotaRow,
  StackedBarChart,
  // Showcase tab (demo page renderer)
  MoleculesTab,
  // Legacy aliases (used by organisms not yet refactored to new APIs)
  LegacyAlert,
  LegacySearchBar,
  LegacyPagination,
  LegacyTabs,
  LegacyCard,
  LegacyStatCard,
  LegacyFormField,
} from "../app/components/ds-molecules";

// ── DS molecule type-only exports from monolith ─────────────────────────────
export type {
  TransferItem,
  CommandItem,
  FilterOption,
  DropdownItem,
  GpuModelTagProps,
  GpuAllocationStepperProps,
  MigToggleRowProps,
  MigPartitionBarProps,
  MigPartitionRowProps,
  MigPartition,
  GpuAllocationCardProps,
  AcceleratorGridCellProps,
  ResourceBarCellProps,
  NodeNameCellProps,
  StorageQuotaRowProps,
} from "../app/components/ds-molecules";