"use client";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { TextField } from "@radix-ui/themes";
import React from "react";
import { useRouter } from "next/navigation";

function SearchBar() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setSearchTerm("");
    }

    if (e.key === "Enter") {
      e.preventDefault();

      if (!searchTerm) {
        return;
      }

      router.push(`/search?q=${searchTerm.split(" ").join("+")}&page=1`);
    }
  };

  return (
    <TextField.Root
      placeholder="Search books..."
      radius={"full"}
      size={"3"}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyDown={handleKeyDown}
    >
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
    </TextField.Root>
  );
}

export default SearchBar;
