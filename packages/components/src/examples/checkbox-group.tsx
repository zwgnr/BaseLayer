import { Checkbox, CheckboxGroup } from "../core/checkbox/checkbox";

export const CheckboxGroupExample = () => {
	return (
		<CheckboxGroup>
			<Checkbox value="option-1">Option 1</Checkbox>
			<Checkbox value="option-2">Option 2</Checkbox>
			<Checkbox value="option-3">Option 3</Checkbox>
		</CheckboxGroup>
	);
};