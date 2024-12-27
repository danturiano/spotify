import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import React from "react";
import CallToAction from "./_components/CallToAction";
import LeftPanelFooter from "./_components/LeftPanelFooter";
import LeftPanelHeader from "./_components/LeftPanelHeader";
import LeftPanelMain from "./_components/LeftPanelMain";
import Navigation from "./_components/Navigation";

export default function HomeLayout({
  children,  
}: {
  children: React.ReactNode
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
            <div className="flex h-full bg-gradient-to-t from-primary from-70% to-accent rounded-lg">
              {children}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
      <footer></footer>
      <div className="p-2">
        <CallToAction />
      </div>
    </div>
  );
}
