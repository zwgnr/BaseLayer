import { Badge } from "../core/badge/badge";

export const BadgeVariants = () => {
	return (
		<div className="flex items-center justify-center gap-2">
			<Badge variant="attention">Attention</Badge>
			<Badge variant="neutral">Neutral</Badge>
			<Badge variant="danger">Danger</Badge>
		</div>
	);
};
