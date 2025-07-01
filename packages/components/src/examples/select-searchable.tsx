import { SearchableSelect, SelectItem } from "../core/select/select";

export const SearchableSelectExample = () => {
	return (
		<div className="flex w-full flex-col gap-2">
			<SearchableSelect
				label="Model"
				searchPlaceholder="Search"
				className="w-48"
			>
				<SelectItem textValue="4o">4o</SelectItem>
				<SelectItem textValue="o3">o3</SelectItem>
				<SelectItem textValue="Sonnet 4">Sonnet 4</SelectItem>
				<SelectItem textValue="Gemini 2.0">Gemini 2.0</SelectItem>
			</SearchableSelect>
		</div>
	);
};
