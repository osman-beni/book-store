import React from "react";
import SearchBar from "./SearchBar";
import { Box, Flex, Text } from "@radix-ui/themes";
import { dmSerifDisplay } from "@/app/ui/fonts";
import { LuAlignJustify } from "react-icons/lu";

function NavBar() {
  return (
    <Flex justify={"between"}>
      <Text as="p" className={dmSerifDisplay.className} size="6">
        BookStore
      </Text>
      <Box mb={"6"} display={{ initial: "none", md: "block" }}>
        <SearchBar />
      </Box>
      <Box>
        <LuAlignJustify size={36} strokeWidth={1.5} />
      </Box>
    </Flex>
  );
}

export default NavBar;
