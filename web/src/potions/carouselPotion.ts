import { tv } from "tailwind-variants";

export const carouselPotion = tv({
  slots: {
    root: "w-full",
    viewport: "relative overflow-x-hidden",
    control:
      "z-1  absolute left-4 right-4 top-1/2 flex -translate-y-2/4 justify-between	",
  },
});
