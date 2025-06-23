"use client";

import { useState } from "react";
import { CodeIcon, ComponentIcon } from "lucide-react";

export const ComponentPreview = ({
  children,
  sourceCodeElement,
}: {
  children: React.ReactNode;
  sourceCodeElement?: React.ReactElement;
}) => {
  const [activeTab, setActiveTab] = useState<"preview" | "source">("preview");

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      {sourceCodeElement && (
        <div className="flex items-center justify-between px-6 py-3">
          <div className="relative flex rounded-4xl p-1 bg-surface-2">
            {/* Active indicator background */}
            <div
              className={`absolute top-1 bottom-1 bg-surface-2 rounded-lg transition-all duration-300 ease-out ${
                activeTab === "preview"
                  ? "left-1 w-[calc(50%-4px)]"
                  : "left-[calc(50%+2px)] w-[calc(50%-4px)]"
              }`}
            />

            <button
              onClick={() => setActiveTab("preview")}
              className={`relative font-semibold z-10 flex items-center gap-2 p-2 text-sm rounded-full transition-transform duration-300 ease-out justify-center ${
                activeTab === "preview"
                  ? "text-surface-fg bg-surface shadow-xs"
                  : " text-fg-muted"
              }`}
            >
              <ComponentIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab("source")}
              className={`relative font-semibold z-10 flex items-center gap-2 p-2 text-sm rounded-full transition-transform duration-300 ease-out justify-center ${
                activeTab === "source"
                  ? "text-surface-fg bg-surface shadow-xs"
                  : " text-fg-muted"
              }`}
            >
              <CodeIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
      {activeTab === "preview" ? (
        <div className="p-6 flex items-center justify-center min-h-[300px]">
          {children}
        </div>
      ) : (
        <div className="bg-[#eff1f5] dark:bg-[#303446] text-sm p-6">
          {sourceCodeElement || (
            <pre>
              <code>{"// Source code not available"}</code>
            </pre>
          )}
        </div>
      )}
    </div>
  );
};
