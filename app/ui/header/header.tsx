import React from "react";
import { Section, Heading, Text, Flex, Button } from "@radix-ui/themes";
import { dmSerifDisplay } from "@/app/ui/fonts";
import Link from "next/link";

const Header = () => {
  return (
    <Section>
      <Flex direction={"column"} gap={"5"} align={"center"}>
        <Heading as="h1">
          Welcome to{" "}
          <Text as="span" className={dmSerifDisplay.className}>
            BookStore
          </Text>
        </Heading>
        <Text>Heaven for book lovers</Text>
        <Button asChild>
          <Link href="/">See all books</Link>
        </Button>
      </Flex>
    </Section>
  );
};

export default Header;
