import { Tag, TagGroupRoot } from "@/components/base/tagGroup";

export const TagGroupExample = () => {
  return (
    <TagGroupRoot label="Priority" selectionMode="single">
      <Tag>High</Tag>
      <Tag>Med</Tag>
      <Tag>Low</Tag>
    </TagGroupRoot>
  );
};
