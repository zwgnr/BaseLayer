import { forwardRef, ReactNode, type ElementRef } from "react";

import {
  Switch as AriaSwitch,
  SwitchProps as AriaSwitchProps,
} from "react-aria-components";

import { tv, type VariantProps } from "tailwind-variants";

export const switchVariants = tv({
  slots: {
    root: "flex items-center gap-2 transition-none duration-200",
    indicator:
      "h-6 w-10 cursor-pointer rounded-2xl bg-surface-3 duration-200 before:mx-[2px] before:mt-[2px] before:block before:h-5 before:w-5 before:rounded-2xl before:bg-white before:transition-all",
    label: "text-fg-3",
  },
  variants: {
    selected: {
      true: { indicator: "bg-primary before:translate-x-4" },
    },
  },
  defaultVariants: {
    selected: false,
  },
});

export type SwitchVariantProps = VariantProps<typeof switchVariants>;

interface SwitchProps
  extends VariantProps<typeof switchVariants>,
    AriaSwitchProps {
  children?: ReactNode;
  className?: string | undefined;
}

export const Switch = forwardRef<ElementRef<typeof AriaSwitch>, SwitchProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <AriaSwitch
        className={switchVariants().root({ className })}
        ref={ref}
        {...props}
      >
        {({ isSelected }) => (
          <>
            <div
              className={switchVariants({
                selected: isSelected,
              }).indicator()}
            />
            {children}
          </>
        )}
      </AriaSwitch>
    );
  }
);
