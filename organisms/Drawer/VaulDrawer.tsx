// ============================================================================
//  ORGANISM: Drawer (Vaul)
//  Re-exports the shadcn/vaul drawer primitives from ui/drawer.tsx.
//  This is the animated bottom-sheet / slide-up drawer, distinct from the
//  DS custom Drawer component in ./Drawer.tsx (which is a side panel).
//  All style values use CSS custom properties from theme.css.
// ============================================================================
export {
  Drawer as VaulDrawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from "../../app/components/ui/drawer";
