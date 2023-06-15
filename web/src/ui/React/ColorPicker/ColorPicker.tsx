import { colorPickerPotion } from "@/potions/colorPickerPotion";
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

const {
  content,
  area,
  areaThumb,
  input,
  gradient,
  channelSliderTrack,
  swatch,
  swatchGroup,
  channelSliderThumb,
} = colorPickerPotion();

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
            <div className="flex w-full flex-row gap-4 p-4">
              <ColorPickerEyeDropperTrigger>
                <Pipette />
              </ColorPickerEyeDropperTrigger>
              <div className="flex w-full flex-col gap-2">
                <ColorPickerChannelSliderTrack
                  className={channelSliderTrack()}
                  channel={hue}
                >
                  <ColorPickerChannelSliderBackground />
                  <ColorPickerChannelSliderThumb
                    className={channelSliderThumb()}
                  />
                </ColorPickerChannelSliderTrack>
                <ColorPickerChannelSliderTrack
                  className={channelSliderTrack()}
                  channel="alpha"
                >
                  <ColorPickerChannelSliderBackground />
                  <ColorPickerChannelSliderThumb
                    className={channelSliderThumb()}
                  />
                </ColorPickerChannelSliderTrack>
              </div>
            </div>
            <div className="flex justify-center gap-2 p-4 pb-0">
              <ColorPickerChannelInput className={input()} channel={hue} />
              <ColorPickerChannelInput
                className={input()}
                channel={saturation}
              />
              <ColorPickerChannelInput
                className={input()}
                channel={lightness}
              />
              <ColorPickerChannelInput className={input()} channel="alpha" />
            </div>
            <div className="p-4">
              <p>Presets</p>
              <ColorPickerSwatchGroup className={swatchGroup()}>
                {presets.map((color) => (
                  <ColorPickerSwatch
                    className={swatch()}
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
