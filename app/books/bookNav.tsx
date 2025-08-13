"use client";

import React from "react";
import { Box, Flex, TabNav, Text, ScrollArea } from "@radix-ui/themes";
import Link from "next/link";

const BookNav = ({ category }: { category?: string }) => {
  const pathname = category;
  return (
    <Box py={"3"}>
      <Flex gap={"8"}>
        <Text size={"5"}>Books</Text>
        <ScrollArea>
          <TabNav.Root>
            <TabNav.Link asChild active={pathname === "maths"}>
              <Link href={"/books/maths"}>Mathematics</Link>
            </TabNav.Link>
            <TabNav.Link asChild active={pathname === "programming"}>
              <Link href={"/books/programming"}>Programming</Link>
            </TabNav.Link>
            <TabNav.Link asChild active={pathname === "selfhelp"}>
              <Link href={"/books/selfhelp"}>Self Help</Link>
            </TabNav.Link>
          </TabNav.Root>
        </ScrollArea>
      </Flex>
    </Box>
  );
};

export default BookNav;
