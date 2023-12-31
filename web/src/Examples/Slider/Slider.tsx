import { SliderLabel, SliderRoot, SliderThumb } from "@/components/base/slider";

export const Slider = () => {
  return (
    <SliderRoot defaultValue={30}>
      <SliderLabel>Opacity</SliderLabel>
      <SliderThumb />
    </SliderRoot>
  );
};
