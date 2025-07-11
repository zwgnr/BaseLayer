import { LayoutGrid, List, SquareStack } from "lucide-react";

import { Toggle, ToggleGroup } from "../core/toggle/toggle";

export const ToggleGroupExample = () => (
	<ToggleGroup defaultSelectedKeys={['list']}>
		<Toggle aria-label="Grid" id="grid">
			<LayoutGrid className="size-4" />
		</Toggle>
		<Toggle aria-label="List" id="list">
			<List className="size-4" />
		</Toggle>
		<Toggle aria-label="Card" id="card">
			<SquareStack className="size-4" />
		</Toggle>
	</ToggleGroup>
); 