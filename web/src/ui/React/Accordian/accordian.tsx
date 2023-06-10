import { ChevronDown } from "lucide-react";

import {
  AccordionContent,
  AccordionItem,
  Accordion as AccordionRoot,
  AccordionTrigger,
} from "@ark-ui/react";

import { accordianPotion } from "@potions/accordianPotion";

const { accordianRoot, accordianItem, accordianTrigger, accordianContent } =
  accordianPotion();

const parts = [
  {
    trigger: "Is it Accessible?",
    content: "Yep. All components adhere to WAI-ARIA design patterns.",
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
    <AccordionRoot className={accordianRoot()} defaultValue="Is it Accessible?">
      {parts.map((part, id) => (
        <AccordionItem
          className={accordianItem()}
          key={id}
          value={part.trigger}
        >
          <AccordionTrigger className={accordianTrigger()}>
            {part.trigger}
            <ChevronDown className="h-5 w-5 transition duration-500" />
          </AccordionTrigger>
          <AccordionContent className={accordianContent()}>
            <div className="mb-2">{part.content}</div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
};
