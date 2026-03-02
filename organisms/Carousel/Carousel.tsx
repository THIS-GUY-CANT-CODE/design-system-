// ============================================================================
//  ORGANISM: Carousel
//  Re-exports the shadcn/embla carousel primitives from ui/carousel.tsx.
//  Composes slide container + navigation arrows + indicator dots.
//  All style values use CSS custom properties from theme.css.
// ============================================================================
export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../../app/components/ui/carousel";