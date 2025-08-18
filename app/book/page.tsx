import React from "react";
import { fetchBook } from "@/app/lib/data";
import { Heading, Section, Text, Flex, Badge } from "@radix-ui/themes";
import Image from "next/image";

const BookPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ book: string }>;
}) => {
  const { book } = await searchParams;
  const data = await fetchBook(book);

  let image;

  if (typeof data.covers === "object") {
    image = `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`;
  } else {
    image = "/not-found-image.jpg";
  }

  let description;

  if (typeof data.description === "string") description = data.description;
  if (typeof data.description === "object")
    description = data.description.value;

  return (
    <Section>
      <Flex gap={"3"} maxWidth={"500px"} wrap={"wrap"}>
        {data.subjects &&
          data.subjects
            .slice(0, 3)
            .map((subject) => <Badge key={subject}>{subject}</Badge>)}
      </Flex>
      <Flex
        justify={"between"}
        gap={"8"}
        align={"center"}
        direction={{ initial: "column-reverse", md: "row" }}
        mt={{ initial: "5" }}
      >
        <Flex direction={"column"} gap={"3"} maxWidth={"700px"}>
          <Heading as="h1">{data.title}</Heading>
          <Text>{description}</Text>
        </Flex>
        <Image src={image} alt={data.title} width={300} height={400} />
      </Flex>
    </Section>
  );
};

export default BookPage;
