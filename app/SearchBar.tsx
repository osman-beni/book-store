import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { TextField } from "@radix-ui/themes";
import React from "react";

function SearchBar() {
  return (
    <TextField.Root placeholder="Search books..." radius={"full"} size={"3"}>
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
    </TextField.Root>
  );
}

export default SearchBar;
