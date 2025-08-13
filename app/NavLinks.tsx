"use client";

import React from "react";
import { TabNav } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <TabNav.Root>
      <TabNav.Link asChild active={pathname.includes("/books")}>
        <Link href={"/books"}>Book List</Link>
      </TabNav.Link>
      <TabNav.Link asChild active={pathname.includes("/about")}>
        <Link href={"/about"}>About us</Link>
      </TabNav.Link>
      <TabNav.Link asChild active={pathname.includes("/contact")}>
        <Link href={"/contact"}>Contact us</Link>
      </TabNav.Link>
    </TabNav.Root>
  );
};

export default NavLinks;
