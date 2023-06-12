import { tv } from "tailwind-variants";

export const ratingGroupPotion = tv({
  slots: {
    root: "",
    control: "flex gap-1",
    rating:
      "[&[data-[highlighted]]:text-accent cursor-pointer fill-surface-3 text-text-3 transition duration-75  focus:outline-0 [&>svg]:h-12 [&>svg]:w-12 [&[data-highlighted]]:fill-accent",
  },
});
