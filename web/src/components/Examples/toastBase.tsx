import { useToast } from "@ark-ui/react";
import { button } from "@/potions/button";
import { Toast } from "../../ui/React/Toast/toast";

export const ToastBase = () => {
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
      className={button({ intent: "accent" })}
      onClick={() => {
        toast.create({
          title: "Hi,",
          description: "I'm a basic Toast",
          placement: "bottom-end",
          removeDelay: 0,
        });
      }}
    >
      Base
    </button>
  );
};
