import React from "react";
import { Section, Heading, Text, Flex, Button, Box } from "@radix-ui/themes";
import { dmSerifDisplay, libreBaskerville } from "@/app/ui/fonts";
import Link from "next/link";

const Header = () => {
  return (
    <Section>
      <Flex
        direction={"column"}
        gap={"5"}
        align={"center"}
        display={{ md: "none" }}
      >
        <Heading as="h1">
          Welcome to{" "}
          <Text as="span" className={dmSerifDisplay.className}>
            BookStore
          </Text>
        </Heading>
        <Text>Heaven for book lovers</Text>
        <Button asChild>
          <Link href="/books?page=1">See all books</Link>
        </Button>
      </Flex>
      <Box display={{ initial: "none", md: "block" }}>
        <Flex direction={"column"} gap={"5"} align={"center"}>
          <Text size={"5"} className={libreBaskerville.className}>
            “Reading is a discount ticket to everywhere”
          </Text>
          <Text size={"3"}>— Mary Schmich</Text>
        </Flex>
      </Box>
    </Section>
  );
};

export default Header;
