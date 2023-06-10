import {
  SplitterPanel,
  SplitterResizeTrigger,
  Splitter as SplitterRoot,
} from "@ark-ui/react";
import { splitterPotion } from "@potions/splitterPotion";

const { splitterPanel, splitterResizeTrigger, splitterRoot } = splitterPotion();

export const Splitter = () => (
  <SplitterRoot
    orientation="horizontal"
    className={splitterRoot()}
    defaultSize={[
      { id: "a", size: 50 },
      { id: "b", size: 50 },
    ]}
  >
    <SplitterPanel className={splitterPanel()} id="a">
      A
    </SplitterPanel>
    <SplitterResizeTrigger className={splitterResizeTrigger()} id="a:b" />
    <SplitterPanel className={splitterPanel()} id="b">
      B
    </SplitterPanel>
  </SplitterRoot>
);
