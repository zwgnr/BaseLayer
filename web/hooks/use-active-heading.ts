"use client";

import { useEffect, useRef, useState } from "react";

export function useActiveHeading() {
	const containerRef = useRef<HTMLDivElement>(null);
	const [activeId, setActiveId] = useState<string>("");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const intersectingEntries = entries.filter(
					(entry) => entry.isIntersecting,
				);

				if (intersectingEntries.length > 0) {
					const sorted = intersectingEntries.sort((a, b) => {
						const aRect = a.boundingClientRect;
						const bRect = b.boundingClientRect;
						const viewportCenter = window.innerHeight / 2;

						const aDistance = Math.abs(aRect.top - viewportCenter);
						const bDistance = Math.abs(bRect.top - viewportCenter);

						return aDistance - bDistance;
					});

					setActiveId(sorted[0].target.id);
				}
			},
			{
				rootMargin: "-10% 0% -60% 0%",
				threshold: 0,
			},
		);

		const headings = containerRef.current?.querySelectorAll(
			"h1, h2, h3, h4, h5, h6",
		);

		if (headings) {
			headings.forEach((heading) => {
				if (heading.id) {
					observer.observe(heading);
				}
			});
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	return { containerRef, activeId };
}
