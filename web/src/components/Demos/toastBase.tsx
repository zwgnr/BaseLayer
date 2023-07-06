import { Button } from "@/potions/button";
import { useToast } from "@ark-ui/react";
import { Toast } from "../../Examples/React/Toast/toast";

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
    <Button intent="primary"
 
      onPress={() => {
        toast.create({
          title: "Hi,",
          description: "I'm a basic Toast",
          placement: "bottom-end",
          removeDelay: 0,
        });
      }}
    >
      Base
    </Button>
  );
};
