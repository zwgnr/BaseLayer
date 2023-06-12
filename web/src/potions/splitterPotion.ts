import { tv } from "tailwind-variants";

export const splitterPotion = tv({
  slots: {
    root: "flex w-full gap-2",
    panel: "flex flex-1 overflow-auto bg-surface-3",
    resizeTrigger:
      "relative flex items-center justify-center rounded-md bg-surface-4 p-0 outline-0 transition-colors ease-in-out hover:bg-gray-900 active:bg-slate-900 data-[orientation=horizontal]:my-2 data-[orientation=vertical]:mx-1 data-[orientation=vertical]:h-1 data-[orientation=horizontal]:w-1 data-[disabled]:opacity-50",
  },
});
