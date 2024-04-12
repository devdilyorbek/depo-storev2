"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { searchData } from "@/lib/getQuery";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  return (
    <div className="flex w-full max-w-[1440px] mx-auto px-7 my-7 items-center space-x-2">
      <Input
        type="email"
        placeholder="Type a product..."
        onChange={(event) => setQuery(event.target.value)}
        required
       
      />
      <Button
        type="submit"
        onClick={() => {
          if (query !== "") {
            router.push("/search/" + query);
          }
        }}
      >
        <Search />
      </Button>
    </div>
  );
}
