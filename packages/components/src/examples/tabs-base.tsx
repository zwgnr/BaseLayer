import { ArrowDown, Heart, Plus } from "lucide-react";

import { Tab, TabList, TabPanel, TabsRoot } from "../core/tabs/tabs";

export const TabsExample = () => {
	return (
		<TabsRoot className="h-[450px]">
			<TabList className="px-10">
				<Tab id="for-you">For You</Tab>
				<Tab id="browse">Browse</Tab>
				<Tab id="library">Library</Tab>
			</TabList>
			<TabPanel className="px-10" id="for-you">
				<div className="space-y-4">
					<div>
						<h3 className="mb-3 font-semibold">Made for You</h3>
						<div className="space-y-3">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-3">
									<div className="size-12 rounded-lg bg-gradient-to-br from-purple-400 to-pink-400"></div>
									<div>
										<p className="font-semibold">Electric Dreams</p>
										<p className="text-fg-muted text-sm">
											Synthwave Collective
										</p>
									</div>
								</div>
								<p className="text-fg-muted text-sm">3:42</p>
							</div>
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-3">
									<div className="size-12 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400"></div>
									<div>
										<p className="font-semibold">Ocean Breeze</p>
										<p className="text-fg-muted text-sm">Coastal Sounds</p>
									</div>
								</div>
								<p className="text-fg-muted text-sm">4:15</p>
							</div>
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-3">
									<div className="size-12 rounded-lg bg-gradient-to-br from-green-400 to-blue-400"></div>
									<div>
										<p className="font-semibold">Forest Whispers</p>
										<p className="text-fg-muted text-sm">Nature's Symphony</p>
									</div>
								</div>
								<p className="text-fg-muted text-sm">5:28</p>
							</div>
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-3">
									<div className="size-12 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-400"></div>
									<div>
										<p className="font-semibold">Golden Sunrise</p>
										<p className="text-fg-muted text-sm">Morning Acoustic</p>
									</div>
								</div>
								<p className="text-fg-muted text-sm">3:21</p>
							</div>
						</div>
					</div>
				</div>
			</TabPanel>
			<TabPanel className="px-10" id="browse">
				<div className="space-y-4">
					<div>
						<h3 className="mb-3 font-semibold">New Releases</h3>
						<div className="grid grid-cols-3 gap-3">
							<div className="text-center">
								<div className="mb-2 aspect-square rounded-lg bg-gradient-to-br from-pink-400 to-orange-400"></div>
								<p className="font-semibold text-sm">Neon Dreams</p>
								<p className="text-fg-muted text-xs">Electric Pulse</p>
							</div>
							<div className="text-center">
								<div className="mb-2 aspect-square rounded-lg bg-gradient-to-br from-blue-400 to-purple-400"></div>
								<p className="font-semibold text-sm">Ocean Waves</p>
								<p className="text-fg-muted text-xs">Ambient Sound</p>
							</div>
							<div className="text-center">
								<div className="mb-2 aspect-square rounded-lg bg-gradient-to-br from-green-400 to-blue-400"></div>
								<p className="font-semibold text-sm">Forest Walk</p>
								<p className="text-fg-muted text-xs">Nature Sounds</p>
							</div>
							<div className="text-center">
								<div className="mb-2 aspect-square rounded-lg bg-gradient-to-br from-yellow-400 to-red-400"></div>
								<p className="font-semibold text-sm">Golden Hour</p>
								<p className="text-fg-muted text-xs">Indie Folk</p>
							</div>
							<div className="text-center">
								<div className="mb-2 aspect-square rounded-lg bg-gradient-to-br from-purple-400 to-pink-400"></div>
								<p className="font-semibold text-sm">Cosmic Dance</p>
								<p className="text-fg-muted text-xs">Electronic</p>
							</div>
							<div className="text-center">
								<div className="mb-2 aspect-square rounded-lg bg-gradient-to-br from-indigo-400 to-cyan-400"></div>
								<p className="font-semibold text-sm">Midnight Jazz</p>
								<p className="text-fg-muted text-xs">Jazz Collection</p>
							</div>
						</div>
					</div>
				</div>
			</TabPanel>
			<TabPanel className="px-10" id="library">
				<div className="space-y-4">
					<div>
						<h3 className="mb-3 font-semibold">Your Music</h3>
						<div className="space-y-3">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-3">
									<div className="size-10 rounded-full bg-gradient-to-br from-green-400 to-blue-400"></div>
									<div>
										<p className="font-semibold">Liked Songs</p>
										<p className="text-fg-muted text-sm">47 songs</p>
									</div>
								</div>
								<Heart className="size-4 text-fg-muted" />
							</div>
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-3">
									<div className="size-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400"></div>
									<div>
										<p className="font-semibold">Downloaded</p>
										<p className="text-fg-muted text-sm">23 songs</p>
									</div>
								</div>
								<ArrowDown className="size-4 text-fg-muted" />
							</div>
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-3">
									<div className="size-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400"></div>
									<div>
										<p className="font-semibold">Recently Added</p>
										<p className="text-fg-muted text-sm">12 songs</p>
									</div>
								</div>
								<Plus className="size-4 text-fg-muted" />
							</div>
						</div>
					</div>
				</div>
			</TabPanel>
		</TabsRoot>
	);
};
