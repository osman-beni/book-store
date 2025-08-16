import React from "react";
import { DropdownMenu, Button } from "@radix-ui/themes";
import Link from "next/link";

const MobileNavButton = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft">
          Menu
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item asChild>
          <Link href={"/books?page=1"}>Book List</Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item asChild>
          <Link href={"/about"}>About us</Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item asChild>
          <Link href={"/contact"}>Contact us</Link>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default MobileNavButton;
