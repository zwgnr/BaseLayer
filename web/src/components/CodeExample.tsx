import { CopyToaster } from "./copyToaster";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CodeExample = (props: any) => {
  const { content } = props;
  const copyToClipboard = () => {
    const parser = new DOMParser();
    // Parse the contentToCopy as HTML
    const doc = parser.parseFromString(content.props.value, "text/html");
    // Get the text content
    const textContent = doc.body.textContent || "";

    navigator.clipboard.writeText(textContent);
    //alert("success");
  };
  return (
    <div className="max-h-72 w-full overflow-clip rounded-xl bg-[#1b1e28] p-4">
      <div className="flex w-full justify-end rounded-md pr-4 pt-4">
        <CopyToaster copyToClipboard={copyToClipboard} />
      </div>
      <div className="no-scrollbar -mt-12 max-h-56 overflow-y-auto">
        {content}
      </div>
    </div>
  );
};
