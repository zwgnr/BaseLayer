import { VariantProps, tv } from "tailwind-variants";

export const checkboxPotion = tv({
  slots: {
    root: "relative cursor-pointer",
    control:
      "flex cursor-pointer items-center justify-center border-2 border-surface-4 data-[checked]:border-primary data-[checked]:bg-primary",
    label: "",
  },
  variants: {
    size: {
      sm: { control: "h-4 w-4 rounded-md" },
      md: { control: "h-6 w-6 rounded-lg" },
      lg: { control: "h-8 w-8 rounded-lg" },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type CheckboxPotionProps = VariantProps<typeof checkboxPotion>;
