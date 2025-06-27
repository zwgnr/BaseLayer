import { Button } from "../core/button/button";
import { Card, CardContent, CardFooter } from "../core/card/card";
import { Input } from "../core/input/input";
import { Select, SelectItem } from "../core/select/select";

export const CardBase = () => {
	return (
		<Card
			className="w-[350px]"
			title="Create project"
			description="Deploy your new project in one-click."
		>
			<CardContent>
				<form>
					<div className="flex w-full flex-col items-center justify-between gap-4">
						<Input className="w-full" id="name" placeholder="Name of your project" />

						<Select className="w-full" id="framework" placeholder="Select a framework">
							<SelectItem>Next.js</SelectItem>
							<SelectItem>SvelteKit</SelectItem>
							<SelectItem>Astro</SelectItem>
							<SelectItem>Nuxt.js</SelectItem>
						</Select>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button variant="ghost">Cancel</Button>
				<Button>Deploy</Button>
			</CardFooter>
		</Card>
	);
};
