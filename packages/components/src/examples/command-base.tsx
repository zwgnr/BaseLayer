"use client";

import {
	Calendar,
	FileBarChart,
	Flag,
	FolderPlus,
	MessageSquare,
	Plus,
	RotateCcw,
	Target,
	UserPlus,
	Users,
} from "lucide-react";

import { Command, type CommandItem } from "../core/command/command";

export const CommandBase = () => {
	const commands = [
		{ id: "create-task", label: "Create new task", icon: Plus },
		{ id: "create-project", label: "Create new project", icon: FolderPlus },
		{ id: "assign-task", label: "Assign task to team member", icon: UserPlus },
		{ id: "set-priority", label: "Set task priority", icon: Flag },
		{ id: "change-status", label: "Change task status", icon: RotateCcw },
		{ id: "add-comment", label: "Add comment to task", icon: MessageSquare },
		{ id: "set-deadline", label: "Set task deadline", icon: Calendar },
		{ id: "create-milestone", label: "Create project milestone", icon: Target },
		{
			id: "generate-report",
			label: "Generate project report",
			icon: FileBarChart,
		},
		{ id: "invite-member", label: "Invite team member", icon: Users },
	] satisfies CommandItem[];

	return (
		<div className="flex w-96 items-center justify-center p-8">
			<Command
				commands={commands}
				triggerKey="x"
				onCommandSelect={(command) => {
					console.log("Executed:", command.label);
				}}
			/>
		</div>
	);
};
