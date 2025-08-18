import React from "react";
import { searchBooks } from "../lib/data";
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

const SearchBooksPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string; q: string }>;
}) => {
  const { page, q } = await searchParams;

  let prevPage;

  if (page) {
    prevPage = Number(page) - 1;
  }

  const nextPage = Number(page) + 1;

  const data = await searchBooks(q, Number(page));

  return (
    <Section>
      <BookNav />
      <Grid columns={{ initial: "2", sm: "3", md: "4" }} gap={"3"}>
        {data.docs.map((work) => {
          const image = work.cover_i
            ? `https://covers.openlibrary.org/b/id/${work.cover_i}-M.jpg`
            : "/not-found-image.jpg";

          return (
            <Box key={work.key + Math.random()} maxWidth={{ initial: "285px" }}>
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
                  <Link
                    href={`/book?book=${work.key.replace("/works/", "")}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Text size={"2"} weight={"medium"} wrap={"pretty"}>
                      {work.title}
                    </Text>
                  </Link>
                </Flex>
              </Card>
            </Box>
          );
        })}
      </Grid>
      <Flex mt={"5"} justify={"between"}>
        <Button asChild disabled={prevPage === 0 || prevPage === undefined}>
          {prevPage === 0 || prevPage === undefined ? (
            <Text>Previous</Text>
          ) : (
            <Link href={`/search?q=${q}&page=${prevPage}`}>Previous</Link>
          )}
        </Button>

        <Button asChild disabled={data.numFound <= 12}>
          {data.numFound <= 12 ? (
            <Text>Next</Text>
          ) : (
            <Link href={`/search?q=${q}&page=${nextPage}`}>Next</Link>
          )}
        </Button>
      </Flex>
    </Section>
  );
};

export default SearchBooksPage;
