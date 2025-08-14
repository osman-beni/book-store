import React from "react";
import Image from "next/image";
import { Flex, Text, Card, Inset, ScrollArea, Box } from "@radix-ui/themes";
import { fetchTrendingDaily } from "@/app/lib/data";
import Link from "next/link";

const FeaturedBooks = async () => {
  const data = await fetchTrendingDaily();

  return (
    <ScrollArea type="always" scrollbars="horizontal" size={"2"}>
      <Flex gap={"4"} pb={"4"}>
        {data.works.map((work) => {
          console.log(work);
          const image = `https://covers.openlibrary.org/b/id/${work.cover_i}-L.jpg`;

          return (
            <Card key={work.key}>
              <Flex direction={{ initial: "column" }} gap={"6"}>
                <Inset>
                  <Box
                    width={{ initial: "232px" }}
                    height={{ initial: "232px", md: "323px" }}
                    position={"relative"}
                  >
                    <Image src={image} alt={work.title} fill />
                  </Box>
                </Inset>
                <Link
                  href={`/book?book=${work.key.replace("/works/", "")}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Text size={"2"} weight={"medium"} wrap={"pretty"}>
                    {work.title.length > 25
                      ? `${work.title.slice(0, 25)}...`
                      : work.title}
                  </Text>
                </Link>
              </Flex>
            </Card>
          );
        })}
      </Flex>
    </ScrollArea>
  );
};

export default FeaturedBooks;
