import { colorPicker, colorPicker as cp } from "@/potions/colorPicker";

import {
  ColorPickerArea,
  ColorPickerAreaGradient,
  ColorPickerAreaThumb,
  ColorPickerChannelInput,
  ColorPickerChannelSliderBackground,
  ColorPickerChannelSliderThumb,
  ColorPickerChannelSliderTrack,
  ColorPickerContent,
  ColorPickerEyeDropperTrigger,
  ColorPicker as ColorPickerRoot,
  ColorPickerSwatch,
  ColorPickerSwatchBackground,
  ColorPickerSwatchGroup,
} from "@ark-ui/react";
import { Pipette } from "lucide-react";

const presets = [
  "hsl(10, 81%, 59%)",
  "hsl(60, 81%, 59%)",
  "hsl(100, 81%, 59%)",
  "hsl(175, 81%, 59%)",
  "hsl(190, 81%, 59%)",
  "hsl(205, 81%, 59%)",
  "hsl(220, 81%, 59%)",
  "hsl(250, 81%, 59%)",
  "hsl(280, 81%, 59%)",
  "hsl(350, 81%, 59%)",
];

const { content, area, areaThumb, gradient, sliderTrack, sliderThumb } =
  colorPicker();

export const ColorPicker = () => {
  return (
    <ColorPickerRoot defaultValue="hsl(10, 81%, 59%)">
      {(api) => {
        const [hue, saturation, lightness] = api.channels;
        return (
          <ColorPickerContent className={content()}>
            <ColorPickerArea
              className={area()}
              xChannel={saturation}
              yChannel={lightness}
            >
              <ColorPickerAreaGradient className={gradient()} />
              <ColorPickerAreaThumb className={areaThumb()} />
            </ColorPickerArea>
            <div className="flex w-full flex-row items-center gap-4 p-4">
              <ColorPickerEyeDropperTrigger asChild>
                <button>
                  <Pipette className="text-text-4" />
                </button>
              </ColorPickerEyeDropperTrigger>
              <div className="flex w-full flex-col gap-2">
                <ColorPickerChannelSliderTrack
                  className={sliderTrack()}
                  channel={hue}
                >
                  <ColorPickerChannelSliderBackground />
                  <ColorPickerChannelSliderThumb className={sliderThumb()} />
                </ColorPickerChannelSliderTrack>
                <ColorPickerChannelSliderTrack
                  className={sliderTrack()}
                  channel="alpha"
                >
                  <ColorPickerChannelSliderBackground />
                  <ColorPickerChannelSliderThumb className={sliderThumb()} />
                </ColorPickerChannelSliderTrack>
              </div>
            </div>
            <div className="flex w-full items-center justify-center gap-2 p-4 ">
              {api.channels.map((channel, index) => (
                <ColorPickerChannelInput
                  key={index}
                  className={cp().input()}
                  channel={channel}
                />
              ))}
              <ColorPickerChannelInput
                className={cp().input()}
                channel="alpha"
              />
            </div>
            <div className="p-4">
              <p className="text-text-4">Presets</p>
              <ColorPickerSwatchGroup className={cp().swatchGroup()}>
                {presets.map((color) => (
                  <ColorPickerSwatch
                    className={cp().swatch()}
                    key={color}
                    value={color}
                  >
                    <ColorPickerSwatchBackground />
                  </ColorPickerSwatch>
                ))}
              </ColorPickerSwatchGroup>
            </div>
          </ColorPickerContent>
        );
      }}
    </ColorPickerRoot>
  );
};
