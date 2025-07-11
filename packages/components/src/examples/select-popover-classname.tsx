import { Select, SelectItem } from "../core/select/select";

export const SelectPopoverClassname = () => {
	return (
		<Select
			aria-label="timeframe"
			placeholder="Timeframe"
			className="w-36"
			popoverClassName="min-w-48"
		>
			<SelectItem>Today</SelectItem>
			<SelectItem>This Week</SelectItem>
			<SelectItem>This Month</SelectItem>
			<SelectItem>This Year</SelectItem>
		</Select>
	);
};
