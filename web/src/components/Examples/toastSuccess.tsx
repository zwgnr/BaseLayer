import { useToast } from "@ark-ui/react";
import { buttonPotion } from "@/potions/button";
import { Toast } from "@/ui/React/Toast/toast";

export const ToastSuccess = () => {
  return (
    <Toast intent="success">
      <ToastTrigger />
    </Toast>
  );
};

export const ToastTrigger = () => {
  const toast = useToast();
  return (
    <button
      className={buttonPotion({ className: "bg-positive hover:bg-positive-700 text-black" })}
      onClick={() => {
        toast.create({
          title: "Hi,",
          description: "I'm a Success Toast",
          placement: "bottom-end",
          removeDelay: 0,
        });
      }}
    >
      Success
    </button>
  );
};
