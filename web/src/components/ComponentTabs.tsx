import {
  TabContent,
  TabIndicator,
  TabList,
  TabTrigger,
  Tabs,
} from "@ark-ui/react";
import { Icon } from "@iconify/react";
import { tabsPotion } from "@potions/tabsPotion";
import { clsx } from "clsx";
import { useState } from "react";
import { CopyToaster } from "./copyToaster";

const { list, trigger, content, indicator } = tabsPotion();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ComponentTabs = (props: any) => {
  const { vscTab, reactTab, solidTab, solidDisabled, vueDisabled } = props;
  const [value, setValue] = useState<string | null>("vsc");
  /*
  useEffect(() => {
    const loader = document.getElementById("loader") as HTMLElement;
    if (loader) {
      loader.style.display = "none";
    }
  }, []);
*/
  const copyToClipboard = () => {
    let contentToCopy;

    if (value === "vsc") {
      contentToCopy = vscTab;
    } else if (value === "react") {
      contentToCopy = reactTab;
    } else if (value === "solid") {
      contentToCopy = solidTab;
    } else {
      contentToCopy = null; // handle the case when the value doesn't match any of the options
    }
    const parser = new DOMParser();
    // Parse the contentToCopy as HTML
    const doc = parser.parseFromString(contentToCopy.props.value, "text/html");
    // Get the text content
    const textContent = doc.body.textContent || "";

    navigator.clipboard.writeText(textContent);
  };

  return (
    <Tabs
      value={value}
      onChange={(e) => setValue(e.value)}
      className="w-full rounded-xl bg-[#1b1e28]"
    >
      <TabList
        className={list({
          className:
            "grid w-full grid-cols-4 rounded-b-none border-b-4 border-gray-500 bg-transparent text-gray-500",
        })}
      >
        <TabTrigger
          className={trigger({
            className:
              "data-[selected]:bg-transparent data-[selected]:font-bold data-[selected]:text-white",
          })}
          value="vsc"
        >
          <Icon icon="devicon:vscode" className="mb-2 h-5 w-5 text-gray-600" />
        </TabTrigger>
        <TabTrigger
          className={trigger({
            className:
              "data-[selected]:bg-transparent data-[selected]:font-bold data-[selected]:text-white",
          })}
          value="react"
        >
          <Icon
            icon="simple-icons:react"
            className="mb-2 h-5 w-5 text-blue-400"
          />
        </TabTrigger>
        <TabTrigger
          disabled={solidDisabled && true}
          className={trigger({
            className:
              "data-[selected]:bg-transparent data-[selected]:font-bold data-[selected]:text-white",
          })}
          value="solid"
        >
          <Icon
            icon="simple-icons:solid"
            className={clsx(
              "mb-2 h-5 w-5",
              solidDisabled === true ? null : "text-blue-500"
            )}
          />
        </TabTrigger>
        <TabTrigger
          disabled={vueDisabled && true}
          className={trigger({
            className:
              "data-[selected]:bg-transparent data-[selected]:font-bold data-[selected]:text-white",
          })}
          value="vue"
        >
          <Icon
            icon="simple-icons:vuedotjs"
            className={clsx(
              "mb-2 h-5 w-5",
              vueDisabled === true ? null : "text-green-500"
            )}
          />
        </TabTrigger>
        <TabIndicator className={indicator()} />
      </TabList>
      <div className="flex w-full justify-end rounded-md pr-4 pt-4">
      <CopyToaster copyToClipboard={copyToClipboard} />
      </div>

      <TabContent className={content({ className: "-mt-8" })} value="vsc">
        <div className="no-scrollbar h-56 max-h-64 overflow-y-auto rounded-xl">
          {vscTab}
        </div>
      </TabContent>
      <TabContent className={content({ className: "-mt-8" })} value="react">
        <div className="no-scrollbar h-56 max-h-64 overflow-y-auto rounded-xl">
          {reactTab}
        </div>
      </TabContent>
      <TabContent className={content({ className: "-mt-8" })} value="solid">
        <div className="no-scrollbar h-56 max-h-64 overflow-y-auto rounded-xl">
          {solidTab}
        </div>
      </TabContent>
      <TabContent className={content({ className: "-mt-8" })} value="vue">
        vue placeholder
      </TabContent>
    </Tabs>
  );
};
