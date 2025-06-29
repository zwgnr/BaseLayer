"use client";

import {
	Slider as AriaSlider,
	SliderThumb as AriaSliderThumb,
	SliderTrack as AriaSliderTrack,
	Label,
	type LabelProps,
	SliderOutput,
	type SliderProps,
	type SliderThumbProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const slider = tv({
	slots: {
		root: "grid w-64 auto-cols-fr grid-cols-1 text-fg-muted",
		thumb:
			"h-5 w-5 rounded-full bg-primary ring-focus ring-offset-2 ring-offset-surface data-[focus-visible]:ring-2",
		track:
			"before:-translate-y-1/2 relative col-span-2 col-start-1 w-full before:absolute before:top-1/2 before:h-0.5 before:w-full before:transform before:bg-secondary",
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
		<Label className="text-fg text-sm" {...props}>
			{children}
		</Label>
		<SliderOutput className="text-fg text-sm" />
	</div>
);

export { SliderRoot, SliderThumb, SliderLabel };
