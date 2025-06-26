"use client";

import { Heading } from "react-aria-components";

import { Button } from "../core/button/button";
import { Input } from "../core/input/input";
import { Dialog, Modal, ModalTrigger } from "../core/modal/modal";

export const ModalExample = () => {
	return (
		<ModalTrigger>
			<Button>Edit</Button>
			<Modal>
				<Dialog>
					<Heading slot="title" className="font-bold text-lg">Edit Name</Heading>
					<div className="flex flex-col justify-center gap-6">
						<Input label="Name" defaultValue="John Doe" />
						<div className="flex flex-col gap-2">
							<Button slot="close">
							Update
						</Button>
						<Button variant="secondary" slot="close">
								Cancel
							</Button>
						</div>
					</div>
				</Dialog	>
			</Modal>
		</ModalTrigger>
	);
};
