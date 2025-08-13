import React from "react";
import { fetchBookNextPage } from "@/app/lib/data";
import {
  Card,
  Flex,
  Grid,
  Text,
  Section,
  Box,
  Inset,
  Button,
} from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import BookNav from "@/app/books/bookNav";

const BooksPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  let prevPage;

  if (page) {
    prevPage = Number(page) - 1;
  }

  const nextPage = Number(page) + 1;

  const data = await fetchBookNextPage(Number(page));
  return (
    <Section>
      <BookNav />
      <Grid columns={{ initial: "2", sm: "3", md: "4" }} gap={"3"}>
        {data.works.map((work) => {
          const image = `https://covers.openlibrary.org/b/id/${work.cover_i}-M.jpg`;

          return (
            <Box key={work.key} maxWidth={{ initial: "285px" }}>
              <Card>
                <Flex direction={{ initial: "column" }} gap={"6"}>
                  <Inset>
                    <Box
                      height={{ initial: "232px", md: "323px" }}
                      position={"relative"}
                    >
                      <Image src={image} alt={work.title} fill={true} />
                    </Box>
                  </Inset>

                  <Text size={"2"} weight={"medium"} wrap={"pretty"}>
                    {work.title}
                  </Text>
                </Flex>
              </Card>
            </Box>
          );
        })}
      </Grid>
      <Flex mt={"5"} justify={"between"}>
        <Button asChild disabled={prevPage === 0}>
          <Link href={`/bookpage?page=${prevPage}`}>Previous</Link>
        </Button>
        <Button asChild>
          <Link href={`/bookpage?page=${nextPage}`}>Next</Link>
        </Button>
      </Flex>
    </Section>
  );
};

export default BooksPage;
