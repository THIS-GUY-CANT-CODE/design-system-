// ============================================================================
//  ORGANISM: Menubar (Radix)
//  Re-exports the shadcn/Radix menubar primitives from ui/menubar.tsx.
//  Composes horizontal menu triggers + dropdown content + items.
//  All style values use CSS custom properties from theme.css.
//
//  NOTE: Named RadixMenubar to avoid collision with the DS custom Menubar
//  in ds-organisms.tsx (organism #25).
// ============================================================================
export {
  Menubar as RadixMenubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from "../../app/components/ui/menubar";
