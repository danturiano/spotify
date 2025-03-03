import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import React from "react";
import LeftPanelHeader from "./_components/left-panel/LeftPanelHeader";
import Playlist from "./_components/left-panel/UserPlaylist";
import Navigation from "./_components/navigation";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col">
      <Navigation />
      <main className="px-4">
        <ResizablePanelGroup direction="horizontal" className="gap-1">
          <ResizablePanel defaultSize={22} minSize={15}>
            <div className="flex flex-col justify-between bg-primary rounded-lg">
              <LeftPanelHeader />
              <Playlist />
            </div>
          </ResizablePanel>
          <ResizableHandle className="bg-background" />
          <ResizablePanel defaultSize={78} minSize={78}>
            {children}
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </div>
  );
}
