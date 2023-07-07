import { button } from "@/components/base/button";
import { Toast } from "@/Examples/React/Toast/toast";
import { useToast } from "@ark-ui/react";

export const ToastExample = () => {
  return (
    <Toast>
      <ToastTrigger />
    </Toast>
  );
};

export const ToastTrigger = () => {
  const toast = useToast();
  return (
    <button
      className={button({ intent: "secondary" })}
      onClick={() => {
        toast.create({
          title: "Hello",
          description: "I'm a toast",
          placement: "bottom-end",
          removeDelay: 0,
        });
      }}
    >
      Pop Toast!
    </button>
  );
};
