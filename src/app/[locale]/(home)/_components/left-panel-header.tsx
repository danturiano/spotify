import { Button } from "@/components/ui/button";
import { LibraryBig, Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

export default function LeftPanelHeader() {
  const t = useTranslations("HomePage");
  return (
    <div className="p-4 flex justify-between items-center">
      <Button
        className="hover:scale-100 p-0 h-0"
        variant={"ghost"}
        iconSize={"sm"}
      >
        <LibraryBig />
        <p className="text-base font-bold">{t("library")}</p>
      </Button>
      <Button
        size={"icon"}
        className="rounded-full h-8 w-8 bg-primary text-secondary hover:bg-accent"
        iconSize={"sm"}
      >
        <Plus />
      </Button>
    </div>
  );
}
