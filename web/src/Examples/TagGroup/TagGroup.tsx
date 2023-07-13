import { Tag, TagGroupRoot } from "@/components/base/tagGroup";

export const TagGroupExample = () => {
  return (
    <TagGroupRoot label="Ice cream flavor" selectionMode="single">
      <Tag>Chocolate</Tag>
      <Tag>Mint</Tag>
      <Tag>Strawberry</Tag>
      <Tag>Vanilla</Tag>
    </TagGroupRoot>
  );
};
