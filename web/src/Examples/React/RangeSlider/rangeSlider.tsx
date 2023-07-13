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

import { rangeSliderPotion } from "@/components/base/rangeSliderPotion";

const rsp = rangeSliderPotion();

export const RangeSlider = (props: Partial<RangeSliderProps>) => {
  const markers = [25, 50, 75];
  const thumbs = [0, 1];

  return (
    <RangeSliderRoot
      min={0}
      max={100}
      defaultValue={[10, 75]}
      className={rsp.root()}
      {...props}
    >
      <RangeSliderControl className={rsp.control()}>
        <RangeSliderTrack className={rsp.track()}>
          <RangeSliderRange className={rsp.range()} />
        </RangeSliderTrack>
        {thumbs.map((thumbIndex) => (
          <RangeSliderThumb
            key={thumbIndex}
            className={rsp.thumb()}
            index={thumbIndex}
          />
        ))}
      </RangeSliderControl>
      <RangeSliderMarkerGroup>
        {markers.map((marker) => (
          <RangeSliderMarker
            key={marker}
            className={rsp.marker()}
            value={marker}
          >
            {marker}
          </RangeSliderMarker>
        ))}
      </RangeSliderMarkerGroup>
    </RangeSliderRoot>
  );
};