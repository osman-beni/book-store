import React from "react";
import { Heading, Section, Text, Box } from "@radix-ui/themes";
import { libreBaskerville } from "../ui/fonts";

const AboutPage = () => {
  return (
    <Section>
      <Box mb={"5"}>
        <Heading as="h2" mb={"3"} className={libreBaskerville.className}>
          Our Story
        </Heading>
        <Text>
          Our journey began with a simple idea: to make reading and books
          accessible to everyone. We noticed that sometimes it&apos;s hard to
          find the right book, or even know where to start looking. We wanted to
          create a space where finding a good read is easy and enjoyable for
          all. As a team, we have poured our hearts into building this site to
          be a welcoming place for every kind of reader.
        </Text>
      </Box>
      <Box mb={"5"}>
        <Heading as="h2" mb={"3"} className={libreBaskerville.className}>
          Meet the Team
        </Heading>
        <Text>
          This project was brought to life by a dedicated group of final year
          students. Our group leaders, David Brown Tandoh Chapman and Gifty Adzo
          Doe, guided our vision, while Osman Yakub Beni and the rest of the
          team worked together to make this site a reality.
        </Text>
      </Box>
      <Box mb={"5"}>
        <Heading as="h2" mb={"3"} className={libreBaskerville.className}>
          Our Mission
        </Heading>
        <Text>
          Our goal is to create a digital library that is simple and easy to
          use. We believe that everyone, regardless of their background or
          ability, should have a smooth and stress-free experience when
          searching for their next book. From the start, we&apos;ve been focused
          on accessibility, making sure our site works well for people with
          different needs.
        </Text>
      </Box>
      <Box>
        <Heading as="h2" my={"6"} className={libreBaskerville.className}>
          Our Timeline of Progress
        </Heading>
        <Box mb={"4"}>
          <Heading
            as="h3"
            size={"5"}
            mb={"2"}
            className={libreBaskerville.className}
          >
            The First Steps
          </Heading>
          <Text>
            We started by identifying the main challenges people face when
            looking for books online. We spent a lot of time talking and
            sketching out ideas, focusing on a clean design. Our main goal was
            to make the website&apos;s layout clear and easy to navigate from
            the very beginning.
          </Text>
        </Box>
        <Box mb={"4"}>
          <Heading
            as="h3"
            mb={"2"}
            size={"5"}
            className={libreBaskerville.className}
          >
            Building the Foundation
          </Heading>
          <Text>
            Next, we moved from ideas to action. We built the core of the
            website, making sure the code was strong and well-organized. During
            this phase, we prioritized features like a simple search bar and
            easy-to-read book listings. We also focused on making the site work
            well on different devices, from big computers to small phones.
          </Text>
        </Box>
        <Box mb={"4"}>
          <Heading
            as="h3"
            size={"5"}
            mb={"2"}
            className={libreBaskerville.className}
          >
            Adding Accessibility Features
          </Heading>
          <Text>
            As we continued to build, we made sure to add specific features to
            help everyone. We worked on things like clear text and good contrast
            so the site is easy on the eyes. We also made sure the site can be
            used with assistive technologies, which are tools that help people
            who might have trouble seeing or using a mouse. We&apos;re committed
            to making our site a place where no one is left behind.
          </Text>
        </Box>
        <Box mb={"4"}>
          <Heading
            as="h3"
            mb={"2"}
            size={"5"}
            className={libreBaskerville.className}
          >
            Looking Ahead
          </Heading>
          <Text>
            Our work isn&apos;t finished. We&apos;re always looking for ways to
            improve the site. We plan to continue listening to user feedback to
            make our website even more accessible and user-friendly. Our dream
            is for this site to grow into a vibrant community where everyone
            feels at home and can easily discover the joy of reading.
          </Text>
        </Box>
      </Box>
    </Section>
  );
};

export default AboutPage;
