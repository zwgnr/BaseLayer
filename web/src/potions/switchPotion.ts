import { tv, type VariantProps } from "tailwind-variants";

export const switchPotion = tv({
  slots: {
    root: "w-fit-content relative flex items-center gap-2",
    control:
      "focus-visible:focus focus-visible:shadow-0-0-0-4 inline-flex flex-shrink-0 cursor-pointer items-center justify-start rounded-full  border-2 border-transparent transition-colors duration-150",
    thumb:
      "pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform",
    label: "text-fg-3",
  },
  variants: {
    intent: {
      primary: {
        control: "bg-surface-3 data-[checked]:bg-primary",
      },
      secondary: {
        control: "bg-surface-3 data-[checked]:bg-green-800",
        thumb: "bg-secondary",
      },
    },
    size: {
      sm: {
        root: "h-[20px] w-[36px]",
        thumb: "h-4 w-4 translate-x-0 data-[checked]:translate-x-8",
      },
      md: {
        root: "",
        control: "h-6 w-11",
        thumb: "h-5 w-5 translate-x-0 data-[checked]:translate-x-5",
      },
      lg: {
        root: "h-[30px] w-[56px]",
        thumb:
          "h-6 w-6 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0",
      },
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "md",
  },
});

export type SwitchPotionProps = VariantProps<typeof switchPotion>;
