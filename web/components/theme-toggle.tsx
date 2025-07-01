"use client";

import { useEffect, useState } from "react";

import { Button } from "@baselayer/components";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Ensure component is mounted on client before rendering theme-dependent content
	useEffect(() => {
		setMounted(true);
	}, []);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	const isDark = theme === "dark";

	if (!mounted) {
		return <span className="size-9" />;
	}

	return (
		<Button
			variant="ghost"
			size="icon"
			className="text-fg-muted data-[hovered]:bg-transparent data-[pressed]:bg-transparent"
			onPress={toggleTheme}
			aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
		>
			{isDark ? <Sun /> : <Moon />}
		</Button>
	);
};

export default ThemeToggle;
