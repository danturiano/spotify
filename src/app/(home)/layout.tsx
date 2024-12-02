import React from "react";
import Navigation from "./_components/navigation";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      {children}
    </div>
  );
}
