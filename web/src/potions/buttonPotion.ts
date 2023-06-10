import { tv, type VariantProps } from "tailwind-variants";

export const buttonPotion = tv({
  base: "inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-transform duration-100 active:scale-[.97] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  variants: {
    intent: {
      primary: "bg-primary text-primary-content hover:bg-primary-400",
      accent: "bg-accent text-accent-content hover:bg-accent-400",
    },
    state: {
      filled: "",
      ghost: "",
      soft: "",
      outline: "",
    },
    size: {
      sm: "h-8 px-2 text-sm",
      md: "text-md h-10 px-4",
      lg: "h-12 px-6 text-lg",
    },
  },
  compoundVariants: [
    {
      intent: "primary",
      state: "ghost",
      className: "border-2 border-primary bg-primary/30 hover:bg-primary",
    },
    {
      intent: "primary",
      state: "soft",
      className:
        "bg-primary-200 text-primary-600 hover:bg-primary-400 hover:text-black",
    },
    {
      intent: "primary",
      state: "outline",
      className:
        "border-2 border-primary bg-transparent text-primary-content hover:bg-primary-500 hover:text-black",
    },
    {
      intent: "accent",
      state: "ghost",
      className: "border-2 border-primary bg-primary/30 hover:bg-primary",
    },
    {
      intent: "accent",
      state: "soft",
      className:
        "bg-primary-200 text-primary-600 hover:bg-primary-400 hover:text-black",
    },
    {
      intent: "accent",
      state: "outline",
      className:
        "border-2 border-primary bg-transparent text-primary-content hover:bg-primary-500 hover:text-black",
    },
  ],
  defaultVariants: {
    intent: "primary",
    state: "filled",
    size: "md",
  },
});

export type ButtonPotionProps = VariantProps<typeof buttonPotion>;
