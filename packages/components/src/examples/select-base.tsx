import { Select, SelectItem } from "../core/select/select";

export const SelectExample = () => {
	return (
		<Select aria-label="timeframe" placeholder="Timeframe" className="w-40">
			<SelectItem>Today</SelectItem>
			<SelectItem>This Week</SelectItem>
			<SelectItem>This Month</SelectItem>
			<SelectItem>This Year</SelectItem>
		</Select>
	);
};
