import { cx, styled } from "@/lib/twc";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";

import {
  Slider as AriaSlider,
  SliderThumb as AriaSliderThumb,
  SliderTrack as AriaSliderTrack,
  Label,
  SliderOutput,
} from "react-aria-components";

export const SliderRoot = styled(
  AriaSlider,
  "grid grid-cols-1  w-64 auto-cols-fr  text-gray-900 "
);

export const StyledSliderThumb = styled(
  AriaSliderThumb,
  "bg-slateblue h-5 w-5 rounded-full bg-primary"
);

export const StyledSliderTrack = styled(
  AriaSliderTrack,
  "relative col-start-1 col-span-2 w-full before:absolute before:top-1/2 before:h-0.5 before:w-full before:-translate-y-1/2 before:transform before:bg-gray-400"
);

export const SliderThumb = forwardRef<
  ElementRef<typeof StyledSliderThumb>,
  ComponentPropsWithoutRef<typeof StyledSliderThumb>
>(({ children, className, ...props }, ref) => (
  <StyledSliderTrack>
    <StyledSliderThumb className={className} ref={ref} {...props} />
  </StyledSliderTrack>
));

export const SliderLabel = forwardRef<
  ElementRef<typeof Label>,
  ComponentPropsWithoutRef<typeof Label>
>(({ children, className, ...props }, ref) => (
  <div className="col-span-2 my-4 flex w-full justify-between">
    <Label className={cx("text-sm", className)} ref={ref} {...props}>
      {children}
    </Label>
    <SliderOutput className="text-sm" />
  </div>
));
