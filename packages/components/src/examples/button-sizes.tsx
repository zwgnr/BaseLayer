import { PlusIcon } from "lucide-react";

import { Button } from "../core/button/button";

export const ButtonSizes = () => {
	return (
		<div className="flex items-center gap-4">
			<Button size="sm">Small</Button>
			<Button size="md">Medium</Button>
			<Button size="lg">Large</Button>
			<Button aria-label="Add Item" size="icon">
				<PlusIcon className="size-4" />
			</Button>
		</div>
	);
};
