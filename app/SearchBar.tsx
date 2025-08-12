import { Box, TextField } from "@radix-ui/themes";
import React from "react";

function SearchBar() {
  return (
    <Box>
      <TextField.Root size="3" placeholder="Search for book…" />
    </Box>
  );
}

export default SearchBar;
