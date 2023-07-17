import type { TextFieldProps as AriaTextFieldProps } from "react-aria-components";
import {
  TextField as AriaTextField,
  Input,
  Label,
  Text,
} from "react-aria-components";
import { tv } from "tailwind-variants";

export const textField = tv({
  slots: {
    input:
      "font-sm m-0 appearance-none rounded-md bg-input border p-2 focus:border-primary focus:shadow-xl focus:outline-none",
    root: "flex flex-col gap-2",
    button: "absolute right-2 mt-3 [&[data-empty]]:hidden",
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
