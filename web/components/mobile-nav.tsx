"use client";

import { useState } from "react";

import Image from "next/image";

import {
	Button,
	Dialog,
	Modal,
	ModalOverlay,
} from "react-aria-components";

import { MenuIcon } from "lucide-react";

import { SidebarLink } from "./sidebar-link";

interface Page {
	url: string;
	data: {
		title: string;
	};
}

interface MobileNavProps {
	introDocs: Page[];
	componentDocs: Page[];
}

export function MobileNav({ introDocs, componentDocs }: MobileNavProps) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Button
				onPress={() => setIsOpen(true)}
				className="ml-3 rounded-md p-1 transition-colors hover:bg-surface-variant md:hidden"
				aria-label="Open navigation menu"
			>
				<MenuIcon />
			</Button>
			<ModalOverlay
				isDismissable
				isOpen={isOpen}
				onOpenChange={setIsOpen}
				className="fixed inset-0 z-60 bg-zinc-900/75 md:hidden"
			>
				<Modal className="fixed top-0 left-0 z-50 h-full w-80 border-border border-r bg-surface outline-none">
					<Dialog className="h-full w-full outline-none">
						<div className="flex items-center justify-between border-border border-b p-4.5">
							<div className="flex items-center">
								<Image
									src="/bl.svg"
									alt="BaseLayer"
									width={32}
									height={32}
									className="dark:invert"
								/>
								<span className="ml-2 font-bold text-lg uppercase tracking-tight">
									BaseLayer
								</span>
							</div>
						</div>
						<nav
							className="h-[calc(100vh-73px)] overflow-y-auto"
							aria-label="Main navigation"
						>
							<div className="space-y-6 p-6">
								{/* Getting Started */}
								<div>
									<h3 className="mb-3 font-semibold text-fg-muted text-xs uppercase tracking-wide">
										Getting Started
									</h3>
									<ul className="space-y-1">
										{introDocs.map((page) => (
											<li key={page.url}>
												<SidebarLink
													href={page.url}
													onClick={() => setIsOpen(false)}
												>
													{page.data.title}
												</SidebarLink>
											</li>
										))}
									</ul>
								</div>

								{/* Components */}
								{componentDocs.length > 0 && (
									<div>
										<h3 className="mb-3 font-semibold text-fg-muted text-xs uppercase tracking-wide">
											Components
										</h3>
										<ul className="space-y-1">
											{componentDocs.map((page) => (
												<li key={page.url}>
													<SidebarLink
														href={page.url}
														onClick={() => setIsOpen(false)}
													>
														{page.data.title}
													</SidebarLink>
												</li>
											))}
										</ul>
									</div>
								)}
							</div>
						</nav>
					</Dialog>
				</Modal>
			</ModalOverlay>
		</>
	);
}
