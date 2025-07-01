"use client";

import { useEffect, useMemo, useState } from "react";

import { useRouter } from "next/navigation";

import { Command, type CommandItem } from "@baselayer/components";
import { useDocsSearch } from "fumadocs-core/search/client";
import { BookOpenIcon, FileTextIcon } from "lucide-react";

export function SearchDialog() {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");
	const { setSearch, query } = useDocsSearch({
		type: "fetch",
	});

	// Update search when searchTerm changes
	useEffect(() => {
		setSearch(searchTerm);
	}, [searchTerm, setSearch]);

	const results = Array.isArray(query.data) ? query.data : [];

	// Convert search results to CommandItem format
	const commands: CommandItem[] = useMemo(() => {
		// Show default popular pages when no search term
		if (searchTerm.length === 0) {
			return [
				{
					id: "intro",
					label: "Introduction",
					icon: BookOpenIcon,
					onSelect: () => router.push("/docs/intro"),
				},
			];
		}

		return results.slice(0, 10).map((result, index) => ({
			id: result.id || `result-${index}`,
			label: result.content || "Untitled",
			icon: FileTextIcon,
			onSelect: () => {
				router.push(result.url);
			},
		}));
	}, [results, router, searchTerm]);

	return (
		<Command
			commands={commands}
			placeholder="Search documentation..."
			onSearchChange={setSearchTerm}
			className="w-full"
		/>
	);
}
