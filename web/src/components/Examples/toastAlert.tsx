import { useToast } from "@ark-ui/react";
import { buttonPotion } from "@potions/buttonPotion";
import { Toast } from "../../ui/React/Toast/toast";

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
      className={buttonPotion({ className: "bg-warning hover:bg-warning-700" })}
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
