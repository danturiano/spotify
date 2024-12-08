import Link from "next/link";
import React from "react";

const data = {
  links: [
    {
      title: "Legal",
      url: "#",
    },
    {
      title: "Safety & Privacy Center",
      url: "#",
    },
    {
      title: "Privacy Policy",
      url: "#",
    },
    {
      title: "Cookies",
      url: "#",
    },
    {
      title: "About Ads",
      url: "#",
    },
    {
      title: "Accessibility",
      url: "#",
    },
  ],
};

export default function LeftPanelFooter() {
  return (
    <div className="px-4 space-x-3">
      {data.links.map((item) => {
        return (
          <Link
            href={item.url}
            key={item.title}
            className="text-[0.73rem] text-secondary"
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
}
