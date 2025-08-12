import React from "react";
import { Badge, Flex } from "@radix-ui/themes";
import FeaturedBooks from "./featuredBooks";

function FeatureSection() {
  return (
    <Flex direction={"column"} align={"start"} gap={"6"}>
      <Badge color="green">Featured Books</Badge>
      <FeaturedBooks />
    </Flex>
  );
}

export default FeatureSection;
