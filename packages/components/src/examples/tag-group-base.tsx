import { Tag, TagGroup } from "../core/tag-group/tag-group";

export const TagGroupExample = () => (
  <div className="space-y-6">
    <TagGroup label="Skills" selectionMode="multiple">
      <Tag>React</Tag>
      <Tag>TypeScript</Tag>
      <Tag>Node.js</Tag>
      <Tag>CSS</Tag>
      <Tag>Design Systems</Tag>
      <Tag>GraphQL</Tag>
    </TagGroup>

    <TagGroup label="Categories" selectionMode="single">
      <Tag>Frontend</Tag>
      <Tag>Backend</Tag>
      <Tag>Design</Tag>
      <Tag>DevOps</Tag>
    </TagGroup>
  </div>
); 