"use client";

import {
	Meter as AriaMeter,
	type MeterProps as AriaMeterProps,
	Label,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const bar = tv({
	base: "h-4 overflow-hidden rounded-2xl bg-surface-2",
});

interface MeterProps extends Omit<AriaMeterProps, "className"> {
	label?: string;
	className?: string;
}

const Meter = ({ label, className, ...props }: MeterProps) => (
	<AriaMeter className="flex w-56 flex-col gap-2" {...props}>
		{({ percentage, valueText }) => (
			<>
				<div className="flex justify-between">
					{label && <Label className="text-primary text-sm">{label}</Label>}
					<span className="value text-primary text-sm">{valueText}</span>
				</div>
				<div className={bar({ className })}>
					<div
						className="h-full bg-primary"
						style={{ width: `${percentage}%` }}
					/>
				</div>
			</>
		)}
	</AriaMeter>
);

export { Meter };
export type { MeterProps };
