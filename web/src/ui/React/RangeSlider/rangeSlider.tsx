import {
  RangeSliderControl,
  RangeSliderMarker,
  RangeSliderMarkerGroup,
  RangeSliderRange,
  RangeSlider as RangeSliderRoot,
  RangeSliderThumb,
  RangeSliderTrack,
  type RangeSliderProps,
} from "@ark-ui/react";

import { rangeSliderPotion } from "@potions/rangeSliderPotion";

const { rsControl, rsMarker, rsRange, rsRoot, rsThumb, rsTrack } =
  rangeSliderPotion();

export const RangeSlider = (props: Partial<RangeSliderProps>) => {
  const markers = [25, 50, 75];
  const thumbs = [0, 1];

  return (
    <RangeSliderRoot
      min={0}
      max={100}
      defaultValue={[10, 75]}
      className={rsRoot()}
      {...props}
    >
      <RangeSliderControl className={rsControl()}>
        <RangeSliderTrack className={rsTrack()}>
          <RangeSliderRange className={rsRange()} />
        </RangeSliderTrack>
        {thumbs.map((thumbIndex) => (
          <RangeSliderThumb
            key={thumbIndex}
            className={rsThumb()}
            index={thumbIndex}
          />
        ))}
      </RangeSliderControl>
      <RangeSliderMarkerGroup>
        {markers.map((marker) => (
          <RangeSliderMarker key={marker} className={rsMarker()} value={marker}>
            {marker}
          </RangeSliderMarker>
        ))}
      </RangeSliderMarkerGroup>
    </RangeSliderRoot>
  );
};
