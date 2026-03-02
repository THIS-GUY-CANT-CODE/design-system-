// ============================================================================
//  ORGANISMS — Canonical barrel export
//  Re-exports every organism component from its co-located sub-folder.
//  Also explicitly re-exports the remaining DS organisms from the monolith
//  that have NOT yet been split into co-located folders (no wildcard `export *`).
//
//  Organism rules:
//    - Import from src/atoms/ and src/molecules/ only.
//    - Never import from templates or pages.
// ============================================================================

// ── Co-located DS organism components ──────────────────────────────────────
export { NavBar } from "./NavBar/NavBar";
export { SideNavigation } from "./SideNavigation/SideNavigation";
export { DataTable } from "./DataTable/DataTable";
export { Drawer } from "./Drawer/Drawer";
export { Modal } from "./Modal/Modal";
export { ProfileCard } from "./ProfileCard/ProfileCard";
export { CardGrid } from "./CardGrid/CardGrid";
export { StatsRow } from "./StatsRow/StatsRow";
export { ActivityFeed } from "./ActivityFeed/ActivityFeed";
export { CommentThread } from "./CommentThread/CommentThread";

// ── Radix / shadcn UI organism wrappers ────────────────────────────────────

// Sidebar (shadcn/Radix collapsible sidebar system)
export {
  Sidebar, SidebarContent, SidebarFooter, SidebarGroup,
  SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel,
  SidebarHeader, SidebarInput, SidebarInset, SidebarMenu,
  SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton,
  SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub,
  SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider,
  SidebarRail, SidebarSeparator, SidebarTrigger, useSidebar,
} from "./Sidebar/Sidebar";

// Dialog
export {
  Dialog, DialogClose, DialogContent, DialogDescription,
  DialogFooter, DialogHeader, DialogOverlay, DialogPortal,
  DialogTitle, DialogTrigger,
} from "./Dialog/Dialog";

// AlertDialog
export {
  AlertDialog, AlertDialogAction, AlertDialogCancel,
  AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
  AlertDialogHeader, AlertDialogOverlay, AlertDialogPortal,
  AlertDialogTitle, AlertDialogTrigger,
} from "./AlertDialog/AlertDialog";

// Sheet (aliased to avoid conflict with DS monolith Sheet)
export {
  Sheet as RadixSheet, SheetTrigger, SheetClose, SheetContent,
  SheetHeader, SheetFooter, SheetTitle, SheetDescription,
} from "./Sheet/Sheet";

// Vaul Drawer (bottom-sheet / slide-up)
export {
  VaulDrawer, DrawerPortal, DrawerOverlay, DrawerTrigger,
  DrawerClose, DrawerContent, DrawerHeader, DrawerFooter,
  DrawerTitle, DrawerDescription,
} from "./Drawer/VaulDrawer";

// CommandPalette (cmdk — aliased to avoid conflict with DS monolith Command)
export {
  Command as CmdkCommand, CommandDialog, CommandEmpty, CommandGroup,
  CommandInput, CommandItem, CommandList, CommandSeparator,
  CommandShortcut,
} from "./CommandPalette/CommandPalette";

// DropdownMenu (aliased to avoid conflict with DS monolith DropdownMenu)
export {
  DropdownMenu as RadixDropdownMenu,
  DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup,
  DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal,
  DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator,
  DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent,
  DropdownMenuSubTrigger, DropdownMenuTrigger,
} from "./DropdownMenu/DropdownMenu";

// ContextMenu
export {
  ContextMenu, ContextMenuCheckboxItem, ContextMenuContent,
  ContextMenuGroup, ContextMenuItem, ContextMenuLabel,
  ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem,
  ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub,
  ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger,
} from "./ContextMenu/ContextMenu";

// Menubar (Radix — aliased to avoid conflict with DS monolith Menubar)
export {
  RadixMenubar, MenubarPortal, MenubarMenu, MenubarTrigger,
  MenubarContent, MenubarGroup, MenubarSeparator, MenubarLabel,
  MenubarItem, MenubarShortcut, MenubarCheckboxItem,
  MenubarRadioGroup, MenubarRadioItem, MenubarSub,
  MenubarSubTrigger, MenubarSubContent,
} from "./Menubar/Menubar";

// NavigationMenu (Radix — aliased to avoid conflict with DS monolith NavigationMenu)
export {
  NavigationMenu as RadixNavigationMenu,
  NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem,
  NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
  NavigationMenuViewport, navigationMenuTriggerStyle,
} from "./NavigationMenu/NavigationMenu";

// Form (react-hook-form + Radix label)
export {
  Form, FormControl, FormDescription, FormField as RHFFormField,
  FormItem, FormLabel, FormMessage, useFormField,
} from "./Form/Form";

// Calendar (react-day-picker)
export { Calendar } from "./Calendar/Calendar";

// Carousel (embla)
export {
  type CarouselApi,
  Carousel, CarouselContent, CarouselItem,
  CarouselNext, CarouselPrevious,
} from "./Carousel/Carousel";

// Chart (recharts)
export {
  ChartContainer, ChartTooltip, ChartTooltipContent,
  ChartLegend, ChartLegendContent, ChartStyle,
} from "./Chart/Chart";
export type { ChartConfig } from "./Chart/Chart";
export { NodeHealthChart } from "./Chart/NodeHealthChart";
export type { NodeHealthDataPoint, NodeHealthChartProps } from "./Chart/NodeHealthChart";

// Select (Radix — aliased to avoid conflict with DS monolith Select)
export {
  RadixSelect, SelectContent, SelectGroup, SelectItem,
  SelectLabel, SelectScrollDownButton, SelectScrollUpButton,
  SelectSeparator, SelectTrigger, SelectValue,
} from "./Select/Select";

// Resizable (react-resizable-panels)
export {
  ResizableHandle, ResizablePanel, ResizablePanelGroup,
} from "./Resizable/Resizable";

// ── Shared types ────────────────────────────────────────────────────────────
export type { OrgSize } from "./shared";
export { dtCellPad, drawerWidthVar, modalWidthVar } from "./shared";

// ── DS organisms from monolith (explicit — no wildcard) ─────────────────────
//    These are showcase / Ant Design-style DS organisms that have NOT yet
//    been split into their own co-located folders. Names that conflict with
//    co-located Radix organisms above are aliased with a DS prefix.
export {
  // Settings
  SettingsForm,
  SettingsSidebarOrg,
  // Cards
  PricingCards,
  ProductCard,
  // Drawers
  ImportDrawer,
  ExportDrawer,
  ResourceAllocationDrawer,
  // Wizards
  FormWizard,
  OnboardingWizard,
  // Panels
  NotificationPanelOrg,
  CommandBar,
  FileManager,
  DashboardHeader,
  // Tables
  TableWithFilters,
  ClusterNodesTable,
  // Auth
  LoginForm,
  // Import
  ImportRepoModal,
  // DS showcase organisms (name conflicts aliased)
  Menubar as DSMenubar,
  Sheet as DSSheet,
  Command as DSCommand,
  NavigationMenu as DSNavigationMenu,
  SidebarNav as DSSidebarNav,
  FormWrapper as DSFormWrapper,
  // Showcase tab (demo page renderer)
  OrganismsTab,
} from "../app/components/ds-organisms";

// ── DS organism type-only exports from monolith ─────────────────────────────
export type {
  NotificationItem as DSNotificationItem,
  ImportRepoFile,
  ResourceGpu,
  ResourceAllocationState,
  ResourceAllocationDrawerProps,
  ClusterNode,
  ClusterNodesTableProps,
} from "../app/components/ds-organisms";
