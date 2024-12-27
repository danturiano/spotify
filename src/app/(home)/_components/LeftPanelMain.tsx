import React from "react";
import LeftPanelCard from "./LeftPanelCard";
import { Button } from "@/components/ui/button";

const data = {
  cardData: [
    {
      title: "Create your first playlist",
      description: "It's easy, we'll help you",
      button: "Create playlist",
    },
    {
      title: "Let's find some podcasts to follow",
      description: "We'll keep you updated on new episodes",
      button: "Browse podcasts",
    },
  ],
};

export default function LeftPanelMain() {
  return (
    <div className="space-y-6">
      {data.cardData.map((item) => {
        return (
          <LeftPanelCard
            key={item.title}
            title={item.title}
            description={item.description}
          >
            <Button className="rounded-full h-8 font-bold bg-primary-foreground text-md">
              {item.button}
            </Button>
          </LeftPanelCard>
        );
      })}
    </div>
  );
}
