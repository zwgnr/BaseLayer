import { useToast } from "@ark-ui/react";
import { button } from "@/components/base/button";
import { Toast } from "../../Examples/React/Toast/toast";

export const ToastError = () => {
  return (
    <Toast intent="error">
      <ToastTrigger />
    </Toast>
  );
};

export const ToastTrigger = () => {
  const toast = useToast();
  return (
    <button
      className={button({ className: "bg-critical hover:bg-critical-700 text-black" })}
      onClick={() => {
        toast.create({
          title: "Hi,",
          description: "I'm an Error Toast",
          placement: "bottom-end",
          removeDelay: 0,
        });
      }}
    >
      Error
    </button>
  );
};
