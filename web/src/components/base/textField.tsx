import type { TextFieldProps as AriaTextFieldProps } from "react-aria-components";
import {
  TextField as AriaTextField,
  Input,
  Label,
  Text,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const textField = tv({
  slots: {
    input:
      "font-sm m-0 appearance-none rounded-md border border-border bg-surface p-2 outline-none ring-fg focus:border-transparent focus:ring-2",
    root: "flex flex-col gap-2",
    button: "absolute right-2 mt-3 data-[empty]:hidden",
  },
});

const { root, input } = textField();

interface TextFieldProps extends AriaTextFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string;
}

export const TextField = ({
  label,
  description,
  errorMessage,
  ...props
}: TextFieldProps) => (
  <AriaTextField className={root()} {...props}>
    <Label>{label}</Label>
    <Input className={input()} />
    {description && <Text slot="description">{description}</Text>}
    {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
  </AriaTextField>
);
