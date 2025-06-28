"use client";

import type { ComponentType, ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";

import {
	Button as AriaButton,
	Dialog as AriaDialog,
	DialogTrigger as AriaDialogTrigger,
	Modal as AriaModal,
	Autocomplete,
	Input,
	Menu,
	MenuItem,
	type MenuItemProps,
	ModalOverlay,
	type ModalOverlayProps,
	TextField,
	useFilter,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import { Search } from "lucide-react";

const command = tv({
	slots: {
		trigger:
			"flex w-full items-center justify-between rounded-full bg-surface-2 px-4 py-2 font-semibold text-fg outline-none ring-primary ring-offset-2 ring-offset-surface transition-colors hover:bg-surface-3 data-[focus-visible]:ring-2",
		overlay:
			"data-[entering]:fade-in data-[exiting]:fade-out fixed inset-0 z-50 flex min-h-full items-start justify-center bg-zinc-500/25 p-4 text-center data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:duration-300 data-[exiting]:duration-200 sm:items-center",
		modal:
			"data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95 data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:duration-300 data-[exiting]:duration-200",
		dialog: "outline-none",
		content:
			"flex min-h-72 w-[95vw] max-w-full flex-col gap-1 rounded-xl bg-surface p-2 shadow-lg sm:w-[500px]",
		input:
			"rounded-lg border-b-2 border-none bg-transparent px-3 py-2 text-base text-fg leading-5 outline-none placeholder:text-fg-muted",
		menu: "mt-2 max-h-44 overflow-auto p-1",
		item: "group flex min-h-12 w-full cursor-default items-center rounded-md px-3 py-2 text-fg outline-none hover:bg-surface-2 data-[focused]:bg-surface-2 data-[pressed]:bg-surface-3 data-[focused]:text-focus-fg",
		kbd: "ml-auto rounded border border-border bg-surface-2 px-2 py-1 font-semibold text-fg-muted text-xs",
	},
});

const styles = command();

interface CommandItem {
	id: string;
	label: string;
	shortcut?: string;
	icon?: ComponentType<{ className?: string }>;
	onSelect?: () => void;
}

interface CommandProps extends Omit<ModalOverlayProps, "className"> {
	className?: string;
	trigger?: ReactNode;
	commands: CommandItem[];
	placeholder?: string;
	triggerKey?: string;
	onCommandSelect?: (command: CommandItem) => void;
	onSearchChange?: (search: string) => void;
}

const Command = ({
	className,
	trigger,
	commands,
	placeholder = "Search commands…",
	triggerKey = "k",
	onCommandSelect,
	onSearchChange,
	...props
}: CommandProps) => {
	const [isOpen, setOpen] = useState(false);
	const { contains } = useFilter({ sensitivity: "base" });
	const isMac = useMemo(() => /Mac/.test(navigator?.platform || ""), []);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (
				e.key.toLowerCase() === triggerKey.toLowerCase() &&
				(isMac ? e.metaKey : e.ctrlKey)
			) {
				e.preventDefault();
				setOpen((prev) => !prev);
			} else if (e.key === "Escape") {
				e.preventDefault();
				setOpen(false);
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [isMac, triggerKey]);

	const handleCommandSelect = (command: CommandItem) => {
		command.onSelect?.();
		onCommandSelect?.(command);
		setOpen(false);
	};

	return (
		<AriaDialogTrigger isOpen={isOpen} onOpenChange={setOpen}>
			{trigger || (
				<AriaButton className={styles.trigger({ className })}>
					<div className="flex items-center gap-2">
						<Search className="size-4 text-fg-muted" />
						Search
					</div>
					<kbd className="rounded-md bg-surface-3 px-2 py-1 font-semibold text-xs">
						{isMac ? "⌘" : "Ctrl"} {triggerKey.toUpperCase()}
					</kbd>
				</AriaButton>
			)}
			<ModalOverlay {...props} isDismissable className={styles.overlay()}>
				<AriaModal className={styles.modal()}>
					<AriaDialog className={styles.dialog()}>
						<div className={styles.content()}>
							<Autocomplete filter={onSearchChange ? () => true : contains}>
								<TextField
									aria-label="Search commands"
									className="flex flex-col border-border border-b px-3 py-2 outline-none"
									onChange={onSearchChange}
								>
									<Input
										autoFocus
										placeholder={placeholder}
										className={styles.input()}
									/>
								</TextField>
								<Menu
									items={commands}
									className={styles.menu()}
									selectionMode="none"
								>
									{({ label, shortcut, icon: Icon, ...command }) => (
										<CommandMenuItem
											{...command}
											textValue={label}
											onAction={() =>
												handleCommandSelect({
													label,
													shortcut,
													icon: Icon,
													...command,
												})
											}
										>
											<div className="flex min-w-0 items-center gap-3">
												{Icon && (
													<Icon className="size-4 shrink-0 text-fg-muted" />
												)}
												<span className="truncate font-medium text-sm leading-tight">
													{label}
												</span>
											</div>
											{shortcut && (
												<span className={styles.kbd()}>{shortcut}</span>
											)}
										</CommandMenuItem>
									)}
								</Menu>
							</Autocomplete>
						</div>
					</AriaDialog>
				</AriaModal>
			</ModalOverlay>
		</AriaDialogTrigger>
	);
};

interface CommandMenuItemProps extends Omit<MenuItemProps, "className"> {
	className?: string;
	children: ReactNode;
}

const CommandMenuItem = ({
	className,
	children,
	...props
}: CommandMenuItemProps) => (
	<MenuItem {...props} className={styles.item({ className })}>
		{children}
	</MenuItem>
);

const CommandTrigger = AriaDialogTrigger;

export { Command, CommandMenuItem, CommandTrigger };
export type { CommandProps, CommandMenuItemProps, CommandItem };
