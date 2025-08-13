import React from "react";
import SearchBar from "./SearchBar";
import { Box, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { dmSerifDisplay } from "@/app/ui/fonts";
import NavLinks from "./NavLinks";
import MobileNavButton from "./MobileNavButton";

function NavBar() {
  return (
    <Flex gap={{ md: "5" }} justify={{ initial: "between" }}>
      <Text asChild className={dmSerifDisplay.className} size="6">
        <Link
          style={{ textDecoration: "none", color: "currentColor" }}
          href={"/"}
        >
          BookStore
        </Link>
      </Text>
      <Box flexGrow={"1"} display={{ initial: "none", md: "block" }}>
        <SearchBar />
      </Box>
      <Box display={{ md: "none" }}>
        <MobileNavButton />
      </Box>
      <Box display={{ initial: "none", md: "block" }}>
        <NavLinks />
      </Box>
    </Flex>
  );
}

export default NavBar;
