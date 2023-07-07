import { Button } from "@/components/base/button";
import {
  DialogContent,
  DialogModal,
  DialogTrigger,
} from "@/components/base/dialog";
import { Check } from "lucide-react";
import { Heading } from "react-aria-components";

export const Dialog = () => {
  return (
    <DialogTrigger>
      <Button>Checkout</Button>
      <DialogModal>
        <DialogContent>
          {({ close }) => (
            <>
              <Check className="h-8 w-8 text-green-500" />
              <Heading className="text-lg font-bold">
                Payment Successfull
              </Heading>
              <p className="text-sm text-fg-3">
                Your order has been placed. Check your email for order details!
              </p>
              <Button intent="secondary" onPress={close}>
                Back to Dashboard
              </Button>
            </>
          )}
        </DialogContent>
      </DialogModal>
    </DialogTrigger>
  );
};
