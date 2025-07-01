"use client";

import { useState } from "react";

import { CodeIcon, ComponentIcon, type LucideIcon } from "lucide-react";

interface TabButtonProps {
	tab: "preview" | "source";
	activeTab: "preview" | "source";
	onClick: () => void;
	icon: LucideIcon;
}

const TabButton = ({ tab, activeTab, onClick, icon: Icon }: TabButtonProps) => {
	const isActive = activeTab === tab;

	return (
		<button
			aria-label={`Switch to ${tab} tab`}
			type="button"
			onClick={onClick}
			className={`relative z-10 flex items-center justify-center gap-2 rounded-full p-2 font-semibold text-sm transition-transform duration-300 ease-out ${
				isActive ? "bg-surface text-surface-fg shadow-xs" : " text-fg-muted"
			}`}
		>
			<Icon className="h-4 w-4" />
		</button>
	);
};

export const Preview = ({
	children,
	sourceCodeElement,
}: {
	children?: React.ReactNode;
	sourceCodeElement?: React.ReactElement;
}) => {
	const [activeTab, setActiveTab] = useState<"preview" | "source">("preview");

	// If no children and only sourceCodeElement, render just the source code
	if (!children && sourceCodeElement) {
		return (
			<div className="h-96 overflow-hidden overflow-y-auto rounded-2xl border border-border/50">
				<div className="overflow-hidden bg-[#eff1f5] p-6 text-sm dark:bg-[#303446] [&_code]:whitespace-pre-wrap [&_code]:break-words [&_pre]:whitespace-pre-wrap [&_pre]:break-words">
					{sourceCodeElement}
				</div>
			</div>
		);
	}

	return (
		<div>
			{sourceCodeElement && (
				<div className="flex items-center justify-between py-3">
					<div className="relative flex rounded-4xl bg-secondary p-1">
						{/* Active indicator background */}
						<div
							className={`absolute top-1 bottom-1 rounded-lg bg-secondary transition-all duration-300 ease-out ${
								activeTab === "preview"
									? "left-1 w-[calc(50%-4px)]"
									: "left-[calc(50%+2px)] w-[calc(50%-4px)]"
							}`}
						/>

						<TabButton
							tab="preview"
							activeTab={activeTab}
							onClick={() => setActiveTab("preview")}
							icon={ComponentIcon}
						/>
						<TabButton
							tab="source"
							activeTab={activeTab}
							onClick={() => setActiveTab("source")}
							icon={CodeIcon}
						/>
					</div>
				</div>
			)}
			<div className="flex min-h-96 flex-col items-center justify-center overflow-hidden rounded-2xl border border-border/50">
				{activeTab === "preview" ? (
					<div className="flex h-full items-center justify-center p-6">
						{children}
					</div>
				) : (
					<div className="h-96 w-full overflow-hidden overflow-y-auto bg-[#eff1f5] p-6 text-sm dark:bg-[#303446] [&_code]:whitespace-pre-wrap [&_code]:break-words [&_pre]:whitespace-pre-wrap [&_pre]:break-words">
						{sourceCodeElement || (
							<pre className="whitespace-pre-wrap break-words">
								<code>{"// Source code not available"}</code>
							</pre>
						)}
					</div>
				)}
			</div>
		</div>
	);
};
