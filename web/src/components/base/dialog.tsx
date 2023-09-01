import {
  Dialog as AriaDialogContent,
  DialogTrigger as AriaDialogTrigger,
  Modal,
  ModalOverlay,
  type DialogProps,
  type ModalOverlayProps,
} from "react-aria-components";

import { tv } from "tailwind-variants";

const dialog = tv({
  slots: {
    container: "fixed inset-0 z-40 flex items-center justify-center",
    content: "flex flex-col gap-6 text-fg outline-none",
    modal:
      "max-w-3/4 w-3/4 rounded-xl bg-surface p-6 outline-none data-[entering]:animate-zoom md:w-96",
    overlay:
      "fixed left-0 top-0 z-50 flex h-[var(--visual-viewport-height)] w-screen items-center justify-center bg-slate-500/50 data-[entering]:animate-fade data-[exiting]:animate-fadeOut",
  },
});

const { overlay, modal, content } = dialog();

const DialogModal = ({
  children,
  className,
  ...props
}: ModalOverlayProps & { className?: string }) => (
  <ModalOverlay {...props} isDismissable={true} className={overlay()}>
    <Modal className={modal({ className })}>{children}</Modal>
  </ModalOverlay>
);

const DialogContent = ({
  children,
  className,
  ...props
}: DialogProps & { className?: string }) => (
  <AriaDialogContent {...props} className={content({ className })}>
    {children}
  </AriaDialogContent>
);

const DialogTrigger = AriaDialogTrigger;

export { DialogContent, DialogModal, DialogTrigger };
