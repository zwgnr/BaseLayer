import { tabsPotion } from "@/potions/tabsPotion";
import { TabContent, TabList, TabTrigger, Tabs } from "@ark-ui/react";
import { Icon } from "@iconify/react";
import { clsx } from "clsx";
import { useState } from "react";
import { CopyToaster } from "./copyToaster";

const { list, trigger, content, indicator } = tabsPotion();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ComponentTabs = (props: any) => {
  const { vscTab, reactTab, solidTab, solidDisabled, vueDisabled } = props;
  const [value, setValue] = useState<string | null>("react");
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
      className="relative flex w-full  flex-col gap-4 rounded-xl"
    >
      <TabList
        className={list({
          className:
            "grid w-full grid-cols-3 border-gray-500 bg-surface-2 p-1 text-gray-500",
        })}
      >
        <TabTrigger
          className={trigger({
            className:
              "data-[selected]:bg-surface data-[selected]:font-bold data-[selected]:text-blue-400",
          })}
          value="react"
        >
          <Icon icon="simple-icons:react" className="h-5 w-5" />
        </TabTrigger>
        <TabTrigger
          disabled={solidDisabled && true}
          className={trigger({
            className:
              "data-[selected]:bg-surface data-[selected]:font-bold data-[selected]:text-blue-400",
          })}
          value="solid"
        >
          <Icon icon="simple-icons:solid" className="h-5 w-5" />
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
              "h-5 w-5",
              vueDisabled === true ? null : "text-green-500"
            )}
          />
        </TabTrigger>
      </TabList>
      <div className="absolute right-8 top-24 rounded-md ">
        <CopyToaster copyToClipboard={copyToClipboard} />
      </div>

      <div className="overflow-y-auto rounded-lg bg-[#1b1e28]">
        <TabContent className={content({ className: "" })} value="react">
          <div className="no-scrollbar max-h-64 w-72 overflow-y-auto rounded-xl md:w-full">
            {reactTab}
          </div>
        </TabContent>
        <TabContent className={content({ className: "-mt-8" })} value="solid">
          <div className="no-scrollbar max-h-64 w-72 overflow-y-auto rounded-xl md:w-full">
            {solidTab}
          </div>
        </TabContent>
        <TabContent className={content({ className: "-mt-8" })} value="vue">
          vue placeholder
        </TabContent>
      </div>
    </Tabs>
  );
};
