import { buttonPotion, type ButtonPotionProps } from "@/potions/buttonPotion";
import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonPotionProps {}

export const Button = ({
  children,
  className,
  intent,
  size,
  state,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={buttonPotion({ intent, size, state, className })}
      {...props}
    >
      {children}
    </button>
  );
};
