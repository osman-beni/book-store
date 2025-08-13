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
            <TabNav.Link asChild active={pathname === "mathematics"}>
              <Link href={"/books/mathematics?page=1"}>Mathematics</Link>
            </TabNav.Link>
            <TabNav.Link asChild active={pathname === "programming"}>
              <Link href={"/books/programming?page=1"}>Programming</Link>
            </TabNav.Link>
            <TabNav.Link asChild active={pathname === "self-help"}>
              <Link href={"/books/self-help?page=1"}>Self Help</Link>
            </TabNav.Link>
          </TabNav.Root>
        </ScrollArea>
      </Flex>
    </Box>
  );
};

export default BookNav;
