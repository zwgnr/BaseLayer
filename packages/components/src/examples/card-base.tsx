import { GithubIcon } from "lucide-react";

import { Button } from "../core/button/button";
import { Card, CardContent, CardFooter } from "../core/card/card";
import { Input } from "../core/input/input";

export const CardBase = () => {
	return (
		<Card
			className="w-72 md:w-96"
			title="Sign in"
			description="Sign in to your account."
		>
			<CardContent>
				<form>
					<div className="flex w-full flex-col items-center justify-between gap-4">
						<Input
							className="w-full"
							label="Email"
							placeholder="Email"
						/>
						<Input
							className="w-full"
							label="Password"
							placeholder="Password"
						/>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex w-full flex-col justify-between gap-3">
				<Button className="w-full">Sign in</Button>
				<Button className="w-full gap-4" variant="secondary">
					<GithubIcon className="size-4" />
					Continue with GitHub
				</Button>
			</CardFooter>
		</Card>
	);
};
