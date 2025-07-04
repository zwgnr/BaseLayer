import { ComboBox, ComboBoxItem } from "../core/combobox/combobox";

const countries = [
	"United States",
	"United Kingdom",
	"Canada",
	"Australia",
	"Germany",
	"France",
	"Japan",
	"Brazil",
	"India",
	"China",
	"Mexico",
	"Netherlands",
	"Sweden",
	"Norway",
	"Italy",
];

export const ComboboxBase = () => {
	return (
		<div className="flex w-64 items-center justify-center gap-2">
			<ComboBox label="Select Country">
				{countries.map((country) => (
					<ComboBoxItem key={country} textValue={country}>
						{country}
					</ComboBoxItem>
				))}
			</ComboBox>
		</div>
	);
};
