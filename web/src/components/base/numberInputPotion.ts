import { tv } from "tailwind-variants";

const baseTriggerStyles = tv({
  base: "relative inline-flex cursor-pointer select-none appearance-none items-center whitespace-nowrap rounded-md bg-surface-3 align-middle font-semibold outline-none transition duration-100 ease-out hover:bg-surface-2 focus-visible:z-10 focus-visible:border-secondary focus-visible:shadow-md data-[disabled]:cursor-not-allowed hover:data-[disabled]:cursor-not-allowed",
});

export const numberInputPotion = tv({
  slots: {
    root: "text-md flex overflow-hidden rounded-lg border-2 border-transparent bg-surface-3 pl-4 shadow-sm focus-within:z-10 focus-within:border-secondary focus-within:shadow-lg",
    control: "border-surface-4 flex flex-col",
    field: "bg-surface-3 outline-none",
    decrementTrigger: [baseTriggerStyles()],
    incrementTrigger: [baseTriggerStyles()],
  },
});
