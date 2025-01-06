import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable';
import React from 'react';
import LeftPanelHeader from './_components/left-panel/LeftPanelHeader';
import Playlist from './_components/left-panel/Playlist';
import Navigation from './_components/Navigation';

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="h-screen flex flex-col relative">
			<header>
				<Navigation />
			</header>
			<main className="flex-1 px-2 h-full">
				<ResizablePanelGroup direction="horizontal" className="gap-1">
					<ResizablePanel
						defaultSize={22}
						minSize={15}
						className="flex flex-col"
					>
						<div className="flex flex-col justify-between bg-primary rounded-lg">
							<LeftPanelHeader />
							<Playlist />
						</div>
					</ResizablePanel>
					<ResizableHandle className="bg-background" />
					<ResizablePanel defaultSize={78} minSize={78}>
						<div className="flex h-full bg-gradient-to-t from-primary from-70% to-accent rounded-lg">
							{children}
						</div>
					</ResizablePanel>
				</ResizablePanelGroup>
			</main>
		</div>
	);
}
