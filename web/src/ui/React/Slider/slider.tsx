import { sliderPotion } from "@/potions/sliderPotion";
import {
  SliderControl,
  SliderMarker,
  SliderMarkerGroup,
  SliderRange,
  Slider as SliderRoot,
  SliderThumb,
  SliderTrack,
  type SliderProps,
} from "@ark-ui/react";

const {
  sliderControl,
  sliderMarker,
  sliderRange,
  sliderRoot,
  sliderThumb,
  sliderTrack,
} = sliderPotion();

export const Slider = (props: Partial<SliderProps>) => {
  const markers = [25, 50, 75];
  return (
    <SliderRoot
      min={0}
      max={100}
      defaultValue={33}
      className={sliderRoot()}
      {...props}
    >
      <SliderControl className={sliderControl()}>
        <SliderTrack className={sliderTrack()}>
          <SliderRange className={sliderRange()} />
        </SliderTrack>
        <SliderThumb className={sliderThumb()} />
      </SliderControl>
      <SliderMarkerGroup>
        {markers.map((marker) => (
          <SliderMarker key={marker} className={sliderMarker()} value={marker}>
            {marker}
          </SliderMarker>
        ))}
      </SliderMarkerGroup>
    </SliderRoot>
  );
};
