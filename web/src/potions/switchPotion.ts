import { tv, type VariantProps } from "tailwind-variants";

export const switchPotion = tv({
  slots: {
    switchRoot: "w-fit-content relative flex items-center gap-2",
    switchControl:
      "focus-visible:focus focus-visible:shadow-0-0-0-4 inline-flex flex-shrink-0 cursor-pointer items-center justify-start rounded-full  border-2 border-transparent transition-colors duration-150",
    switchThumb:
      "pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform",
  },
  variants: {
    intent: {
      primary: {
        control: "bg-gray-200 data-[checked]:bg-primary",
      },
      accent: {
        control: "bg-gray-200 data-[checked]:bg-green-800",
        thumb: "bg-primary",
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
