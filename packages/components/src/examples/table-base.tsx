"use client";

import {
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "../core/table/table";

interface User {
	id: number;
	name: string;
	email: string;
	role: string;
	status: "Active" | "Inactive" | "Pending";
}

const users: User[] = [
	{
		id: 1,
		name: "Alice Johnson",
		email: "alice@example.com",
		role: "Admin",
		status: "Active",
	},
	{
		id: 2,
		name: "Bob Smith",
		email: "bob@example.com",
		role: "Developer",
		status: "Active",
	},
	{
		id: 3,
		name: "Carol Davis",
		email: "carol@example.com",
		role: "Designer",
		status: "Pending",
	},
	{
		id: 4,
		name: "David Wilson",
		email: "david@example.com",
		role: "Developer",
		status: "Inactive",
	},
	{
		id: 5,
		name: "Eva Brown",
		email: "eva@example.com",
		role: "Manager",
		status: "Active",
	},
];

export const TableExample = () => (
	<div className="ml-56 md:ml-0">
	<Table aria-label="User management table" className="shrink-0">
		<TableHeader>
			<TableColumn isRowHeader>Name</TableColumn>
			<TableColumn>Email</TableColumn>
			<TableColumn>Role</TableColumn>
			<TableColumn>Status</TableColumn>
		</TableHeader>
		<TableBody items={users}>
			{(user) => (
				<TableRow key={user.id}>
					<TableCell>{user.name}</TableCell>
					<TableCell>{user.email}</TableCell>
					<TableCell>{user.role}</TableCell>
					<TableCell>
						<span
							className={`inline-flex rounded-full px-2 py-1 font-semibold text-xs ${
								user.status === "Active"
									? "bg-green-100 text-green-800"
									: user.status === "Pending"
										? "bg-yellow-100 text-yellow-800"
										: "bg-red-100 text-red-800"
							}`}
						>
							{user.status}
						</span>
					</TableCell>
				</TableRow>
			)}
		</TableBody>
	</Table>
	</div>
);
