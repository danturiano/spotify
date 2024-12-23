import { ReactNode } from "react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardProps = {
  children: ReactNode;
  title: string;
  description: string;
};

export default function LeftPanelCard({
  children,
  title,
  description,
}: CardProps) {
  return (
    <Card className="bg-accent border-0 m-2 text-primary-foreground space-y-2">
      <CardHeader>
        <CardTitle className="text-md">{title}</CardTitle>
        <CardDescription className="text-primary-foreground text-xs">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="text-xs">{children}</CardFooter>
    </Card>
  );
}
