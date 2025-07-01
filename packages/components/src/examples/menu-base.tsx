import {
	HelpCircle,
	LogOut,
	Plus,
	Settings,
} from "lucide-react";

import { Button } from "../core/button/button";
import {
	MenuContent,
	MenuHeader,
	MenuItem,
	MenuSection,
	MenuSeperator,
	MenuTrigger,
} from "../core/menu/menu";

export const Menu = () => {
	return (
		<MenuTrigger>
			<Button size="icon" className="size-12 rounded-full p-0">
				Z
			</Button>
			<MenuContent className="w-72">
				<MenuSection>
					<MenuHeader>me@hello.com</MenuHeader>
				</MenuSection>
				<MenuSeperator />
				<MenuItem>
					Account Settings
					<Settings />
				</MenuItem>
				<MenuItem>
					Add Account
					<Plus />
				</MenuItem>
				<MenuSeperator />
				<MenuItem>
					Support
					<HelpCircle />
				</MenuItem>
				<MenuItem>
					Logout
					<LogOut />
				</MenuItem>
			</MenuContent>
		</MenuTrigger>
	);
};
