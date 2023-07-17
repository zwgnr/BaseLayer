import { Icon } from "@iconify/react";
import { Accessibility, Component, PaintBucket } from "lucide-react";

export const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-8">
      <div className="flex h-56 w-full flex-col  gap-8 rounded-xl border p-8 shadow-xl md:w-1/3">
        <div className="flex justify-between">
          <h1 className="text-lg font-bold"> VSCode Extension</h1>
          <Icon icon="devicon-plain:vscode" className="h-6 w-6" />
        </div>
        <p className="text-md">
          Use the BaseLayer VSCode Extension to execute commands and access code snippets.
        </p>
      </div>
      <div className="flex h-56 w-full flex-col  gap-8 rounded-xl border p-8 shadow-xl md:w-1/3">
        <div className="flex justify-between">
          <h1 className="text-lg font-bold">Composable</h1>
          <Component />
        </div>
        <p className="text-md">
          BaseLayer is not a UI library. You are always in control. From start
          to finish.
        </p>
      </div>
      <div className="flex h-56 w-full flex-col  gap-8 rounded-xl border p-8 shadow-xl md:w-1/3">
        <div className="flex justify-between">
          <h1 className="text-lg font-bold">Accessible</h1>
          <Accessibility />
        </div>
        <p className="text-md">
          Built on top of the battle tested React Aria Components Library, relax
          know all accessibility concerns are handled.
        </p>
      </div>
      <div className="flex h-56 w-full flex-col  gap-8 rounded-xl border p-8 shadow-xl md:w-1/3">
        <div className="flex justify-between">
          <h1 className="text-lg font-bold">Theme</h1>
          <PaintBucket />
        </div>
        <p className="text-md">
          Theme support is a first class citizen, adding dark mode and theme
          support has never been easier.
        </p>
      </div>
    </div>
  );
};
