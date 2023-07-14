import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import {
  Dialog as AriaDialogContent,
  DialogTrigger as AriaDialogTrigger,
  Modal as AriaModal,
  ModalOverlay,
} from "react-aria-components";
import { tv } from "tailwind-variants";

export const modal = tv({
  slots: {
    container: "fixed inset-0 z-40 flex items-center justify-center",
    content: "flex flex-col gap-6 outline-none",
    modalStyles:
      "max-w-1/2 w-96 rounded-2xl bg-surface p-6 outline-none [&[data-entering]]:animate-zoom",
    overlay:
      "fixed left-0 top-0 z-50 flex h-[var(--visual-viewport-height)] w-screen items-center justify-center bg-slate-500/50 [&[data-entering]]:animate-fade [&[data-exiting]]:animate-fadeOut",
  },
});

const { overlay, modalStyles, content } = modal();

export const Modal = forwardRef<
  ElementRef<typeof AriaModal>,
  Omit<ComponentPropsWithoutRef<typeof AriaModal>, "className"> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <ModalOverlay className={overlay()}>
    <AriaModal ref={ref} {...props} className={modalStyles({ className })}>
      {children}
    </AriaModal>
  </ModalOverlay>
));

export const DialogContent = forwardRef<
  ElementRef<typeof AriaDialogContent>,
  ComponentPropsWithoutRef<typeof AriaDialogContent>
>(({ className, children, ...props }, ref) => (
  <AriaDialogContent ref={ref} {...props} className={content({ className })}>
    {children}
  </AriaDialogContent>
));

export const DialogTrigger = AriaDialogTrigger;
