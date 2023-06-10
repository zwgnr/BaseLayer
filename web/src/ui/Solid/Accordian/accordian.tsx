/** @jsxImportSource solid-js */
import { ChevronDown } from "lucide-solid";

import {
  AccordionContent,
  AccordionItem,
  Accordion as AccordionRoot,
  AccordionTrigger,
} from "@ark-ui/solid";
import { accordianPotion } from "@potions/accordianPotion";
import { For } from "solid-js";

const { accordianRoot, accordianItem, accordianTrigger, accordianContent } =
  accordianPotion();

const parts = [
  {
    trigger: "Is it Accessible?",
    content: "Yep! All components adhere to WAI-ARIA design patterns.",
  },
  {
    trigger: "Can I customize?",
    content:
      "The open component architecture allows for customization and customization.",
  },
  {
    trigger: "Uncontrolled or Controlled?",
    content:
      "Components can be uncontrolled by default or controlled alternatively.",
  },
];

export const Accordian = () => {
  return (
    <div class="h-full w-full rounded-xl bg-slate-200 p-8">
      <AccordionRoot class={accordianRoot()}>
        <For each={parts}>
          {(part) => (
            <AccordionItem class={accordianItem()} value={part.trigger}>
              <AccordionTrigger class={accordianTrigger()}>
                {part.trigger}
                <ChevronDown class="h-5 w-5 transition duration-500" />
              </AccordionTrigger>
              <AccordionContent class={accordianContent()}>
                <div class="mb-2">{part.content}</div>
              </AccordionContent>
            </AccordionItem>
          )}
        </For>
      </AccordionRoot>
    </div>
  );
};
