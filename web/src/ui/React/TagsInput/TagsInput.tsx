import { tagsInputPotion } from "@/potions/tagsInputPotion";
import {
  Tag,
  TagDeleteTrigger,
  TagInput,
  TagsInputControl,
  TagsInputField,
  TagsInput as TagsInputRoot,
} from "@ark-ui/react";
import { X } from "lucide-react";
import { Fragment } from "react";

const { root, control, field, tag, tagInput, deleteTrigger } =
  tagsInputPotion();

export const TagsInput = () => {
  return (
    <TagsInputRoot className={root()} defaultValue={["React", "Solid", "Vue"]}>
      {({ value }: { value: string[] }) => (
        <TagsInputControl className={control()}>
          {(value ?? []).map((value, index) => (
            <Fragment key={index}>
              <Tag className={tag()} index={index} value={value}>
                {value}
                <TagDeleteTrigger
                  className={deleteTrigger()}
                  index={index}
                  value={value}
                >
                  <X />
                </TagDeleteTrigger>
              </Tag>
              <TagInput className={tagInput()} index={index} value={value} />
            </Fragment>
          ))}
          <TagsInputField className={field()} placeholder="Add tag" />
        </TagsInputControl>
      )}
    </TagsInputRoot>
  );
};
