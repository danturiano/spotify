import Logo from "@/components/logo";
import { Input } from "@/components/ui/input";
import { Home, Search } from "lucide-react";
import Link from "next/link";
import UserProfile from "./UserProfile";

export default function Navigation() {
  return (
    <nav className="flex py-2 px-4 items-center justify-between">
      <Logo />
      <div className="flex items-center gap-2">
        <div className="p-3 bg-accent rounded-full hover:scale-105">
          <Link href={"/"}>
            <Home size={24} />
          </Link>
        </div>
        <div>
          <Input
            startIcon={Search}
            type="email"
            placeholder="What do you want to play?"
            className="border-none bg-accent min-w-[30rem] py-6 rounded-3xl"
          />
        </div>
      </div>
      <UserProfile />
    </nav>
  );
}
