import { tv } from "tailwind-variants";

export const radioGroupPotion = tv({
  slots: {
    root: "flex flex-col gap-2",
    control:
      "h-5 w-5 appearance-none rounded-full border-2 bg-surface data-[checked]:border-primary data-[checked]:bg-surface data-[checked]:outline data-[checked]:outline-[4px] data-[checked]:outline-offset-[-5px] data-[checked]:outline-primary",
    radio: "flex cursor-pointer items-center gap-3 rounded-full",
    radioLabel: "",
  },
});
