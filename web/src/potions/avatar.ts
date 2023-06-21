import { tv } from "tailwind-variants";

export const avatar = tv({
  slots: {
    root: "h-16 w-16 rounded-full border-2 border-accent",
    fallback:
      "flex h-[inherit] items-center justify-center bg-surface-2 font-bold text-text",
    image: "object-cover",
  },
});
