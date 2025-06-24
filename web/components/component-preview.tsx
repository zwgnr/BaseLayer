"use client";

import { useState } from "react";

import { CodeIcon, ComponentIcon } from "lucide-react";

export const ComponentPreview = ({
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
			<div className="overflow-hidden rounded-2xl border border-border">
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
					<div className="relative flex rounded-4xl bg-surface-2 p-1">
						{/* Active indicator background */}
						<div
							className={`absolute top-1 bottom-1 rounded-lg bg-surface-2 transition-all duration-300 ease-out ${
								activeTab === "preview"
									? "left-1 w-[calc(50%-4px)]"
									: "left-[calc(50%+2px)] w-[calc(50%-4px)]"
							}`}
						/>

						<button
							type="button"
							onClick={() => setActiveTab("preview")}
							className={`relative z-10 flex items-center justify-center gap-2 rounded-full p-2 font-semibold text-sm transition-transform duration-300 ease-out ${
								activeTab === "preview"
									? "bg-surface text-surface-fg shadow-xs"
									: " text-fg-muted"
							}`}
						>
							<ComponentIcon className="h-4 w-4" />
						</button>
						<button
							type="button"
							onClick={() => setActiveTab("source")}
							className={`relative z-10 flex items-center justify-center gap-2 rounded-full p-2 font-semibold text-sm transition-transform duration-300 ease-out ${
								activeTab === "source"
									? "bg-surface text-surface-fg shadow-xs"
									: " text-fg-muted"
							}`}
						>
							<CodeIcon className="h-4 w-4" />
						</button>
					</div>
				</div>
			)}
			<div className="overflow-hidden rounded-2xl border border-border">
				{activeTab === "preview" ? (
					<div className="flex min-h-[300px] items-center justify-center p-6">
						{children}
					</div>
				) : (
					<div className="overflow-hidden bg-[#eff1f5] p-6 text-sm dark:bg-[#303446] [&_code]:whitespace-pre-wrap [&_code]:break-words [&_pre]:whitespace-pre-wrap [&_pre]:break-words">
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
