import {
  Meter as AriaMeter,
  Label,
  type MeterProps as AriaMeterProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";

export const meter = tv({
  slots: {
    root: "flex w-56 flex-col gap-2",
    bar: "h-4 overflow-hidden shadow-xl rounded-xl border",
    fill: "h-full bg-primary",
    label: "text-fg-3",
  },
});

const { root, bar, fill } = meter();

interface MeterProps extends AriaMeterProps {
  label?: string;
}

export function Meter({ label, ...props }: MeterProps) {
  return (
    <AriaMeter className={root()} {...props}>
      {({ percentage, valueText }) => (
        <>
          <div className="flex justify-between">
            <Label >{label}</Label>
            <span className="value">{valueText}</span>
          </div>
          <div className={bar()}>
            <div className={fill()} style={{ width: percentage + "%" }} />
          </div>
        </>
      )}
    </AriaMeter>
  );
}
