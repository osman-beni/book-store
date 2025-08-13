import { Flex, Text, Section } from "@radix-ui/themes";
import React from "react";
import { dmSerifDisplay } from "@/app/ui/fonts";
import { LuGithub, LuTwitter, LuInstagram } from "react-icons/lu";

const Footer = () => {
  return (
    <Section className={dmSerifDisplay.className} pb={"0"}>
      <Flex justify={"between"}>
        <Flex direction={"column"} gap={"3"}>
          <Text size={"6"}>BookStore</Text>
          <Text size={"2"}>2025 - Copyright</Text>
        </Flex>
        <Flex direction={"column"} gap={"3"}>
          <Text>Find us on</Text>
          <Flex>
            <LuGithub size={36} />
            <LuTwitter size={36} />
            <LuInstagram size={36} />
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
};

export default Footer;
