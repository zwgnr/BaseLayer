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
import { colorPickerPotion } from "@potions/colorPickerPotion";
import { Pipette } from "lucide-react";

const {
  cpContent,
  cpAreaThumb,
  cpInput,
  cpChannelSliderTrack,
  cpSwatch,
  cpSwatchGroup,
  cpChannelSliderThumb,
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
          <ColorPickerContent className={cpContent()}>
            <ColorPickerArea
              className="h-48"
              xChannel={saturation}
              yChannel={lightness}
            >
              <ColorPickerAreaGradient className="h-full" />
              <ColorPickerAreaThumb className={cpAreaThumb()} />
            </ColorPickerArea>
            <div className="flex w-full flex-row gap-4 p-4">
              <ColorPickerEyeDropperTrigger>
                <Pipette />
              </ColorPickerEyeDropperTrigger>
              <div className="flex w-full flex-col gap-2">
                <ColorPickerChannelSliderTrack
                  className={cpChannelSliderTrack()}
                  channel={hue}
                >
                  <ColorPickerChannelSliderBackground />
                  <ColorPickerChannelSliderThumb
                    className={cpChannelSliderThumb()}
                  />
                </ColorPickerChannelSliderTrack>
                <ColorPickerChannelSliderTrack
                  className={cpChannelSliderTrack()}
                  channel="alpha"
                >
                  <ColorPickerChannelSliderBackground />
                  <ColorPickerChannelSliderThumb
                    className={cpChannelSliderThumb()}
                  />
                </ColorPickerChannelSliderTrack>
              </div>
            </div>
            <div className="flex justify-center gap-2 p-4 pb-0">
              <ColorPickerChannelInput className={cpInput()} channel={hue} />
              <ColorPickerChannelInput
                className={cpInput()}
                channel={saturation}
              />
              <ColorPickerChannelInput
                className={cpInput()}
                channel={lightness}
              />
              <ColorPickerChannelInput className={cpInput()} channel="alpha" />
            </div>
            <div className="p-4">
              <p>Presets</p>
              <ColorPickerSwatchGroup className={cpSwatchGroup()}>
                {presets.map((color) => (
                  <ColorPickerSwatch
                    className={cpSwatch()}
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
