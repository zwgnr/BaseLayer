import { button } from "@/potions/button";
import { useToast } from "@ark-ui/react";
import { Toast } from "../../Examples/React/Toast/toast";

export const ToastAlert = () => {
  return (
    <Toast intent="alert">
      <ToastTrigger />
    </Toast>
  );
};

export const ToastTrigger = () => {
  const toast = useToast();
  return (
    <button
      className={button({
        className: "bg-warning text-black hover:bg-warning-700",
      })}
      onClick={() => {
        toast.create({
          title: "Hi,",
          description: "I'm an Alert Toast",
          placement: "bottom-end",
          removeDelay: 0,
        });
      }}
    >
      Alert
    </button>
  );
};
