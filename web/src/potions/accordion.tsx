import { styled } from "@/lib/twc";
import * as Accordion from "@radix-ui/react-accordion";
import { Minus } from "lucide-react";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";

export const AccordionRoot = styled(
  Accordion.Root,
  "rounded-lg bg-surface shadow-lg w-96"
);

export const AccordionItem = styled(
  Accordion.Item,
  "border-b-2 border-surface-3 [&:last-child]:border-b-0"
);

export const AccordionContent = forwardRef<
  ElementRef<typeof Accordion.Content>,
  ComponentPropsWithoutRef<typeof Accordion.Content>
>(({ className, children, ...props }, ref) => (
  <div className="pb-4 pt-0">
    <Accordion.Content
      className="overflow-hidden px-4 text-sm transition-all data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown"
      {...props}
      ref={ref}
    >
      {children}
    </Accordion.Content>
  </div>
));


export const AccordionTrigger = forwardRef<
  ElementRef<typeof Accordion.Trigger>,
  ComponentPropsWithoutRef<typeof Accordion.Trigger>
>(({ className, children, ...props }, ref) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className="relative flex flex-1 items-center justify-between pl-4 font-medium transition-all [&:nth-child(1)]:[&[data-state=open]>svg]:rotate-180"
      {...props}
      ref={ref}
    >
      <Minus className="absolute right-4 rotate-90 text-fg-3 transition-transform duration-500" />
      <Minus className="text-fg.3 absolute right-4 transition-transform" />
      {children}
    </Accordion.Trigger>
  </Accordion.Header>
));
