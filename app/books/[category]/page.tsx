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
  fetchMathsBooks,
  fetchProgrammingBooks,
  fetchSelfHelpBooks,
} from "@/app/lib/data";

const CATEGORY = {
  mathematics: fetchMathsBooks,
  programming: fetchProgrammingBooks,
  "self-help": fetchSelfHelpBooks,
};

type IParams = "mathematics" | "programming" | "self-help";

const page = async ({
  params,
  searchParams,
}: {
  params: Promise<{ category: IParams }>;
  searchParams: Promise<{ page: string }>;
}) => {
  const { category } = await params;
  const { page } = await searchParams;

  let prevPage;

  if (page) {
    prevPage = Number(page) - 1;
  }

  const nextPage = Number(page) + 1;

  const data = await CATEGORY[category](Number(page));

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
                <Link
                  href={`/book?book=${work.key.replace("/works/", "")}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Text size={"2"} weight={"medium"} wrap={"pretty"}>
                    {work.title.slice(0, 30)}
                  </Text>
                </Link>
              </Flex>
            </Card>
          );
        })}
      </Grid>
      <Flex mt={"5"} justify={"between"}>
        <Button asChild disabled={prevPage === 0 || prevPage === undefined}>
          <Link href={`/books/${category}?page=${prevPage}`}>Previous</Link>
        </Button>
        <Button asChild>
          <Link href={`/books/${category}?page=${nextPage}`}>Next</Link>
        </Button>
      </Flex>
    </Section>
  );
};

export default page;
