import React from "react";
import {
  Section,
  Grid,
  Card,
  Flex,
  Text,
  Inset,
  Box,
  Button,
} from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import BookNav from "@/app/books/bookNav";
import {
  fetchNextMathsBooks,
  fetchNextProgrammingBooks,
  fetchNextSelfHelpBooks,
} from "@/app/lib/data";

const CATEGORY = {
  maths: fetchNextMathsBooks,
  programming: fetchNextProgrammingBooks,
  selfhelp: fetchNextSelfHelpBooks,
};

type IParams = "maths" | "programming" | "selfhelp";

const page = async ({
  params,
}: {
  params: Promise<{ category: IParams; pageId: string }>;
}) => {
  const { category, pageId } = await params;

  let prevPage;

  if (pageId) {
    prevPage = Number(pageId) - 1;
  }

  const nextPage = Number(pageId) + 1;

  console.log({ prevPage, nextPage, category: CATEGORY[category] });

  const data = await CATEGORY[category](Number(pageId));

  return (
    <Section>
      <BookNav category={category} />
      <Grid columns={{ initial: "2", sm: "3", md: "4" }} gap={"3"}>
        {data.works.map((work) => {
          const image = `https://covers.openlibrary.org/b/id/${work.cover_id}-M.jpg`;

          return (
            <Card key={work.key}>
              <Flex direction={{ initial: "column" }} gap={"6"}>
                <Inset>
                  <Box
                    height={{ initial: "232px", md: "323px" }}
                    position={"relative"}
                  >
                    <Image src={image} alt={work.title} fill />
                  </Box>
                </Inset>

                <Text size={"2"} weight={"medium"} wrap={"pretty"}>
                  {work.title.slice(0, 30)}
                </Text>
              </Flex>
            </Card>
          );
        })}
      </Grid>
      <Flex mt={"5"} justify={"between"}>
        <Button asChild disabled={prevPage === 0}>
          <Link href={`/books/${category}/${prevPage}`}>Previous</Link>
        </Button>
        <Button asChild>
          <Link href={`/books/${category}/${nextPage}`}>Next</Link>
        </Button>
      </Flex>
    </Section>
  );
};

export default page;
