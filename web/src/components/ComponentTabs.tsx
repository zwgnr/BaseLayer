import { Tab, TabList, TabPanel, TabsRoot } from "@/potions/tabs";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ComponentTabs = (props: any) => {
  const { vscTab, reactTab } = props;
  const [val, setVal] = useState<React.Key>("react");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    let contentToCopy;

    if (val === "vsc") {
      contentToCopy = vscTab;
    } else if (val === "react") {
      contentToCopy = reactTab;
    } else {
      contentToCopy = null; // handle the case when the value doesn't match any of the options
    }

    const parser = new DOMParser();
    // Parse the contentToCopy as HTML
    const doc = parser.parseFromString(contentToCopy.props.value, "text/html");
    // Get the text content
    const textContent = doc.body.textContent || "";

    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <TabsRoot
      selectedKey={val}
      onSelectionChange={setVal}
      className="relative flex w-full  flex-col rounded-xl"
    >
      <TabList className="w-full rounded-b-none border-gray-500 bg-[#1b1e28]  p-1  text-gray-500">
        <Tab
          className="w-1/2 rounded-none border-b-2 border-surface-3 hover:bg-transparent aria-selected:border-b-primary aria-selected:bg-transparent aria-selected:text-blue-400"
          id="vsc"
        >
          <Icon icon="devicon-plain:vscode" className="h-5 w-5" />
        </Tab>
        <Tab
          className="w-1/2 rounded-none border-b-2 border-surface-3 hover:bg-transparent aria-selected:border-b-primary aria-selected:bg-transparent aria-selected:text-blue-400"
          id="react"
        >
          <Icon icon="simple-icons:react" className="h-5 w-5" />
        </Tab>
      </TabList>
      <div className="absolute right-8 top-24 rounded-md ">
        <button onClick={copyToClipboard}>
          <Copy
            className={clsx(
              "text-white hover:text-slate-600",
              copied ? "hidden" : "block"
            )}
          />
          <Check
            className={clsx(
              "text-white hover:text-slate-600",
              copied ? "block" : "hidden"
            )}
          />
        </button>
      </div>

      <div className="w-full overflow-y-auto rounded-b-xl bg-[#1b1e28] ">
        <TabPanel
          className="no-scrollbar rounded-t-0 max-h-64 w-72 overflow-y-auto rounded-xl bg-[#1b1e28] md:w-full"
          id="vsc"
        >
          {vscTab}
        </TabPanel>
        <TabPanel id="react">
          <div className="no-scrollbar max-h-64 w-72 overflow-y-auto rounded-xl md:w-full">
            {reactTab}
          </div>
        </TabPanel>
      </div>
    </TabsRoot>
  );
};
