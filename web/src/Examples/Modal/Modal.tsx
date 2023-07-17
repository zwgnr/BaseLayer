import { Button } from "@/components/base/button";
import { Modal, ModalContent, ModalTrigger } from "@/components/base/modal";
import { AlertTriangle } from "lucide-react";
import { Heading } from "react-aria-components";

export const ModalExample = () => {
  return (
    <ModalTrigger>
      <Button className="bg-critical hover:bg-critical/70">
        Delete Project
      </Button>
      <Modal>
        <ModalContent>
          {({ close }) => (
            <>
              <AlertTriangle className="h-8 w-8 text-critical" />
              <Heading className="text-lg font-bold">Warning</Heading>
              <p className="text-sm text-fg-3">
                Your data will be permenantly deleted, proceed?
              </p>
              <div className="flex justify-center gap-4">
                <Button state="outline" intent="secondary" onPress={close}>
                  Cancel
                </Button>
                <Button
                  className="bg-critical hover:bg-critical/70"
                  onPress={close}
                >
                  Delete
                </Button>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </ModalTrigger>
  );
};
