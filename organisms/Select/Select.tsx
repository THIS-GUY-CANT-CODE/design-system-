// ============================================================================
//  ORGANISM: Select (Radix)
//  Re-exports the shadcn/Radix select primitives from ui/select.tsx.
//  Composes trigger + content + viewport + items + separators.
//  All style values use CSS custom properties from theme.css.
//
//  NOTE: This is the Radix-based select, distinct from the DS atom Select
//  at src/atoms/Select which is a simpler controlled component.
// ============================================================================
export {
  Select as RadixSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "../../app/components/ui/select";
