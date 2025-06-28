import { Input } from "../core/input/input";

export const InputBase = () => {
	return (
		<div className="flex w-56 flex-col gap-2">
				<Input aria-label="email" placeholder="Enter your email" />
		</div>
	);
};