import { SliderLabel, SliderRoot, SliderThumb } from "../core/slider/slider";

export const Slider = () => {
	return (
		<SliderRoot defaultValue={30}>
			<SliderLabel>Opacity</SliderLabel>
			<SliderThumb />
		</SliderRoot>
	);
};
