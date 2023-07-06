import { splitterPotion } from "@/potions/splitterPotion";
import {
  SplitterPanel,
  SplitterResizeTrigger,
  Splitter as SplitterRoot,
} from "@ark-ui/react";

const { panel, resizeTrigger, root } = splitterPotion();

export const Splitter = () => (
  <SplitterRoot
    orientation="horizontal"
    className={root()}
    defaultSize={[
      { id: "a", size: 50 },
      { id: "b", size: 50 },
    ]}
  >
    <SplitterPanel className={panel()} id="a">
      A
    </SplitterPanel>
    <SplitterResizeTrigger className={resizeTrigger()} id="a:b" />
    <SplitterPanel className={panel()} id="b">
      B
    </SplitterPanel>
  </SplitterRoot>
);
