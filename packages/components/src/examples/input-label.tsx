import { Input } from "../core/input/input";

export const InputLabel = () => {
	return (
		<div className="flex w-56 flex-col gap-2">
			<Input label="Email" placeholder="example@email.com" />
		</div>
	);
};