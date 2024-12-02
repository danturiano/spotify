import Logo from "@/components/logo";
import HomeButton from "./home-button";
import SearchBar from "./search-bar";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <nav className="flex py-2 px-8 items-center justify-between">
      <Logo />
      <div className="flex items-center gap-2">
        <HomeButton />
        <SearchBar />
      </div>
      <div className="flex items-center gap-2">
        <Button variant={"ghost"} className="text-md">
          Sign up
        </Button>
        <Button className="text-md rounded-3xl py-6 px-8">Log in</Button>
      </div>
    </nav>
  );
}
