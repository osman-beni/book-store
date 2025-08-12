import React from "react";
import Image from "next/image";
import { Box, Flex, Text, Card, Inset, ScrollArea } from "@radix-ui/themes";
import { fetchTrendingDaily } from "@/app/lib/data";

const FeaturedBooks = async () => {
  const data = await fetchTrendingDaily();

  return (
    <ScrollArea type="always" scrollbars="horizontal">
      <Flex gap={"4"}>
        {data.works.map((work) => {
          const image = `https://covers.openlibrary.org/b/id/${work.cover_i}-L.jpg`;

          return (
            <Card key={work.key}>
              <Flex direction={{ initial: "column" }} gap={"6"}>
                <Inset>
                  <Image
                    src={image}
                    alt={work.title}
                    width={226}
                    height={323}
                  />
                </Inset>

                <Text size={"2"} weight={"medium"} wrap={"pretty"}>
                  {work.title.slice(0, 30)}
                </Text>
              </Flex>
            </Card>
          );
        })}
      </Flex>
    </ScrollArea>
  );
};

export default FeaturedBooks;
