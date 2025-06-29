"use client";

import {
	Dialog as AriaDialog,
	DialogTrigger as AriaDialogTrigger,
	Modal as AriaModal,
	type DialogProps,
	ModalOverlay,
	type ModalOverlayProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";

export const modal = tv({
	slots: {
		dialog: "flex w-full flex-col gap-6 outline-none",
		modalStyles:
			"fade-in w-full rounded-2xl bg-surface p-6 text-fg outline-none data-[entering]:animate-in md:w-md",
	},
});

const styles = modal();

interface ModalProps extends Omit<ModalOverlayProps, "className"> {
	className?: string;
}

const Modal = ({ children, className, ...props }: ModalProps) => (
	<ModalOverlay
		{...props}
		className="fade-in fade-out fixed top-0 left-0 z-50 flex h-[var(--visual-viewport-height)] w-screen items-center justify-center bg-zinc-500/50 data-[entering]:animate-in data-[exiting]:animate-out"
	>
		<AriaModal className={styles.modalStyles({ className })}>
			{children}
		</AriaModal>
	</ModalOverlay>
);

const Dialog = ({ children, className, ...props }: DialogProps) => (
	<AriaDialog {...props} className={styles.dialog({ className })}>
		{children}
	</AriaDialog>
);

const ModalTrigger = AriaDialogTrigger;

export { Modal, Dialog, ModalTrigger };
export type { ModalProps, DialogProps };