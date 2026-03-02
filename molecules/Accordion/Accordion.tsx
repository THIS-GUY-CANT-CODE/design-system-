// ============================================================================
//  ACCORDION MOLECULE
//  Composes triggers with collapsible content.
//  All style values use CSS custom properties from theme.css.
//  Typography: Inter (--font-family-primary).
//  Imports: atoms only.
// ============================================================================
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "../../atoms/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("last:border-b-0", className)}
      style={{ borderBottom: "var(--border-width-thin) solid var(--divider-color)" }}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between rounded-[var(--radius-md-ds)] text-left transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className,
        )}
        style={{
          padding: "var(--tab-padding-y) var(--space-0)",
          gap: "var(--space-4)",
          fontFamily: "var(--font-family-primary)",
          fontSize: "var(--text-base)",
          fontWeight: "var(--font-weight-medium)",
        }}
        {...props}
      >
        {children}
        <ChevronDownIcon
          className="pointer-events-none shrink-0 translate-y-0.5 transition-transform duration-200"
          style={{
            width: "var(--size-icon-sm)",
            height: "var(--size-icon-sm)",
            color: "var(--fg-tertiary)",
          }}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden"
      style={{
        fontFamily: "var(--font-family-primary)",
        fontSize: "var(--text-base)",
      }}
      {...props}
    >
      <div
        className={cn(className)}
        style={{ paddingTop: "var(--space-0)", paddingBottom: "var(--space-4)" }}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };