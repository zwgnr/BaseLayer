import { Settings, Share } from "lucide-react";

import { Button } from "../core/button/button";
import { Tooltip, TooltipTrigger } from "../core/tooltip/tooltip";

export const TooltipExample = () => (
	<div className="flex items-center gap-4">
		<TooltipTrigger>
			<Button>Hover me</Button>
			<Tooltip>This is a helpful tooltip message</Tooltip>
		</TooltipTrigger>

		<TooltipTrigger>
			<Button variant="ghost" size="icon">
				<Settings className="size-4" />
			</Button>
			<Tooltip>Settings</Tooltip>
		</TooltipTrigger>

		<TooltipTrigger>
			<Button variant="ghost" size="icon">
				<Share className="size-4" />
			</Button>
			<Tooltip>Share this content with others</Tooltip>
		</TooltipTrigger>
	</div>
);
