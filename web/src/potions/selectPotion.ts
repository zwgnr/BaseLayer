import { tv } from "tailwind-variants";

export const selectPotion = tv({
  slots: {
    selectTrigger: "flex h-12 w-56 items-center rounded-xl bg-slate-300 px-2",
    selectContent: "w-56 rounded-xl bg-slate-300 p-2",
    selectOption:
      "mb-1 cursor-pointer rounded-md p-2 hover:bg-primary-300 data-[selected]:bg-primary",
  },
});
