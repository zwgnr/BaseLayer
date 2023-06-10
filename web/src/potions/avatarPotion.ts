import { tv } from "tailwind-variants";

export const avatarPotion = tv({
  slots: {
    avatarRoot: "h-16 w-16 rounded-full border-2 border-accent",
    avatarFallback:
      "flex h-[inherit] items-center justify-center bg-surface-2 font-bold text-text",
    avatarImage: "object-cover",
  },
});
