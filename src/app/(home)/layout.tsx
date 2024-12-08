import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import React from "react";
import LeftPanelHeader from "./_components/left-panel-header";
import LeftPanelMain from "./_components/left-panel-main";
import Navigation from "./_components/navigation";
import LeftPanelFooter from "./_components/left-panel-footer";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col">
      <header>
        <Navigation />
      </header>
      <main className="flex-1 px-2">
        <ResizablePanelGroup direction="horizontal" className="gap-1">
          <ResizablePanel
            defaultSize={22}
            minSize={15}
            className="flex flex-col"
          >
            <div className="flex flex-col h-full justify-between bg-primary rounded-lg">
              <div>
                <LeftPanelHeader />
                <LeftPanelMain />
              </div>
              <div className="mb-10">
                <LeftPanelFooter />
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle className="bg-background" />
          <ResizablePanel defaultSize={78} minSize={78}>
            <div className="flex h-full items-center bg-gradient-to-t from-primary from-70% to-accent rounded-lg justify-center p-6">
              <span className="font-semibold">{children}</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </div>
  );
}
