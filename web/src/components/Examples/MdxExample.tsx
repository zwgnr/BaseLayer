export const MdxExample = ({ children }) => {
  return (
    <div className="flex w-full items-center justify-center rounded-md bg-surface-2 p-4">
      <div className="not-prose flex items-center">{children}</div>
    </div>
  );
};
