import { useToast } from "@ark-ui/react";
import { Copy } from "lucide-react";
import { Toast } from "../ui/React/Toast/toast";

interface CopyToasterProps {
  copyToClipboard?: () => void;
}

export const CopyToaster = ({ copyToClipboard }: CopyToasterProps) => {
  return (
    <Toast intent="success">
      <CopyToasterTrigger copyToClipboard={copyToClipboard} />
    </Toast>
  );
};

export const CopyToasterTrigger = ({ copyToClipboard }: CopyToasterProps) => {
  const toast = useToast();
  return (
    <button
      onClick={() => {
        copyToClipboard ? copyToClipboard() : null,
          toast.create({
            title: "Success",
            description: "Code Copied to Clipboard",
            placement: "bottom-end",
            removeDelay: 0,
          });
      }}
    >
      <Copy className="text-white hover:text-slate-600" />
    </button>
  );
};
