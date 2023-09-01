import {
  Dialog as AriaDialogContent,
  DialogTrigger as AriaDialogTrigger,
  Modal as AriaModal,
  ModalOverlay,
  type DialogProps,
  type ModalOverlayProps,
} from "react-aria-components";

import { tv } from "tailwind-variants";

export const modal = tv({
  slots: {
    container: "fixed inset-0 z-40 flex items-center justify-center",
    content: "flex flex-col gap-6 outline-none",
    modalStyles:
      "max-w-3/4 w:3/4 rounded-xl bg-surface p-6 text-fg outline-none data-[entering]:animate-zoom md:w-96",
    overlay:
      "fixed left-0 top-0 z-50 flex h-[var(--visual-viewport-height)] w-screen items-center justify-center bg-slate-500/50 data-[entering]:animate-fade data-[exiting]:animate-fadeOut",
  },
});

const { overlay, modalStyles, content } = modal();

interface ModalProps extends Omit<ModalOverlayProps, "className"> {
  className?: string;
}

const Modal = ({ children, className, ...props }: ModalProps) => (
  <ModalOverlay className={overlay()}>
    <AriaModal {...props} className={modalStyles({ className })}>
      {children}
    </AriaModal>
  </ModalOverlay>
);

const ModalContent = ({ children, className, ...props }: DialogProps) => (
  <AriaDialogContent {...props} className={content({ className })}>
    {children}
  </AriaDialogContent>
);

const ModalTrigger = AriaDialogTrigger;

export { Modal, ModalContent, ModalTrigger };
