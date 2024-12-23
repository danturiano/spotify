import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div>
      <Input
        startIcon={Search}
        type="email"
        placeholder="What do you want to play?"
        className="border-none bg-accent min-w-[30rem] py-6 rounded-3xl"
      />
    </div>
  );
}
