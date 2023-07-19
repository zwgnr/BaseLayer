import { X } from "lucide-react";

import type { SearchFieldProps as AriaSearchFieldProps } from "react-aria-components";
import {
  SearchField as AriaSearchField,
  Button,
  Input,
  Label,
  Text,
} from "react-aria-components";

import { VariantProps, tv } from "tailwind-variants";

const searchField = tv({
  slots: {
    input:
      "font-sm m-0 appearance-none rounded-md border border-border bg-surface p-2 focus:border-primary focus:shadow-xl focus:outline-none",
    root: "flex flex-col gap-2",
    button: "absolute right-2 mt-3 [&[data-empty]]:hidden",
  },
});

type SearchFieldVariantProps = VariantProps<typeof searchField>;

const { root, input, button } = searchField();

interface SearchFieldProps
  extends AriaSearchFieldProps,
    SearchFieldVariantProps {
  label?: string;
  description?: string;
  errorMessage?: string;
}

export const SearchField = ({
  label,
  description,
  errorMessage,
  ...props
}: SearchFieldProps) => (
  <AriaSearchField className={root()} {...props}>
    {({ value }) => (
      <>
        <Label>{label}</Label>
        <div className="relative items-center">
          <Input className={input()} />
          {value !== "" && (
            <Button className={button()}>
              <X />
            </Button>
          )}
        </div>
        {description && <Text slot="description">{description}</Text>}
        {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
      </>
    )}
  </AriaSearchField>
);
