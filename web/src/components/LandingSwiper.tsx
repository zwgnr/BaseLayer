import { RadioGroupExample } from "@/Examples/RadioGroup/RadioGroup";
import { Button } from "./base/button";

import { ComboBoxExample } from "@/Examples/ComboBox/ComboBox";
import { Dialog } from "@/Examples/Dialog/Dialog";
import { MeterExample } from "@/Examples/Meter/Meter";
import { Slider } from "@/Examples/Slider/Slider";
import { SwitchExample } from "@/Examples/Switch/Switch";
import { TableReorderable } from "@/Examples/Table/TableReorderable";
import {
  Carousel as ArkCarousel,
  CarouselControl,
  CarouselNextTrigger,
  CarouselPrevTrigger,
  CarouselItem,
  CarouselItemGroup,
  CarouselViewport,
} from "@ark-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Calendar } from "./base/calendar";

export default function LandingCarousel() {
  return (
    <ArkCarousel className="relative  flex h-full w-full items-center justify-center">
      <CarouselControl>
        <CarouselPrevTrigger className="absolute left-4 top-1/2 z-10 flex -translate-y-1/2">
          <ChevronLeft className="h-12 w-12 text-fg-5" />
        </CarouselPrevTrigger>
        <CarouselNextTrigger className="absolute right-4 top-1/2 z-10 flex -translate-y-1/2">
          <ChevronRight className="h-12 w-12 text-fg-5" />
        </CarouselNextTrigger>
      </CarouselControl>
      <CarouselViewport className="relative overflow-x-hidden">
        <CarouselItemGroup>
          <CarouselItem
            className="z-50 flex items-center justify-center p-12"
            index={1}
          >
            <Calendar />
          </CarouselItem>
          <CarouselItem
            className="z-50 flex items-center justify-center p-12"
            index={2}
          >
            <div className="">
              {" "}
              <TableReorderable />
            </div>
          </CarouselItem>
          <CarouselItem
            className="z-50 flex flex-col items-center justify-center gap-8 p-12"
            index={3}
          >
            <div className="flex gap-12">
              <Dialog />
            </div>
            <ComboBoxExample />
            <MeterExample />
          </CarouselItem>
          <CarouselItem
            className="z-50 flex flex-col items-center justify-center gap-8 p-12"
            index={4}
          >
            <div className="flex flex-col items-start gap-8">
              <div className="flex gap-12">
                <Button intent="secondary">Button</Button>
                <SwitchExample />
              </div>
              <RadioGroupExample />
              <Slider />
            </div>
          </CarouselItem>
        </CarouselItemGroup>
      </CarouselViewport>
    </ArkCarousel>
  );
}
