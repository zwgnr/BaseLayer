export const MdxExample = ({ children }: any) => {
  return (
    <div className="flex w-full items-center justify-center rounded-xl border border-surface-2 p-2 lg:p-6">
      <div className="not-prose flex items-center overflow-x-auto p-8">
        {children}
      </div>
    </div>
  );
};
