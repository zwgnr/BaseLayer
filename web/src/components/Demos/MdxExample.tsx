export const MdxExample = ({ children }: any) => {
  return (
    <div className="flex w-full items-center justify-center rounded-xl border border-surface-2 p-6">
      <div className="not-prose flex items-center">{children}</div>
    </div>
  );
};
