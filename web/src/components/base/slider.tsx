import {
  Slider as AriaSlider,
  SliderThumb as AriaSliderThumb,
  SliderTrack as AriaSliderTrack,
  Label,
  LabelProps,
  SliderOutput,
  SliderProps,
  SliderThumbProps,
} from "react-aria-components";

import { tv } from "tailwind-variants";

const slider = tv({
  slots: {
    root: "grid w-64  auto-cols-fr grid-cols-1  text-gray-900",
    thumb: "h-5 w-5 rounded-full bg-secondary",
    track:
      "relative col-span-2 col-start-1 w-full before:absolute before:top-1/2 before:h-0.5 before:w-full before:-translate-y-1/2 before:transform before:bg-gray-400",
    button:
      "flex w-56 appearance-none items-center justify-between rounded-lg border p-2 outline-none hover:bg-surface-2",
  },
});

const { root, thumb, track } = slider();

const SliderRoot = ({
  children,
  className,
  ...props
}: SliderProps & { className?: string }) => (
  <AriaSlider {...props} className={root({ className })}>
    {children}
  </AriaSlider>
);

const SliderThumb = ({
  children,
  className,
  ...props
}: SliderThumbProps & { className?: string }) => (
  <AriaSliderTrack className={track()}>
    <AriaSliderThumb className={thumb({ className })} {...props} />
  </AriaSliderTrack>
);

const SliderLabel = ({
  children,
  className,
  ...props
}: LabelProps & { className?: string }) => (
  <div className="col-span-2 my-4 flex w-full justify-between">
    <Label className="text-sm text-fg" {...props}>
      {children}
    </Label>
    <SliderOutput className="text-sm text-fg" />
  </div>
);

export { SliderRoot, SliderThumb, SliderLabel };
