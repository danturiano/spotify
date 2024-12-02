import { Home } from "lucide-react";
import Link from "next/link";

export default function HomeButton() {
  return (
    <div className="p-3 bg-accent rounded-full hover:scale-105">
      <Link href={"/"}>
        <Home size={24} />
      </Link>
    </div>
  );
}
