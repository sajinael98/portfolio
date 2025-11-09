"use client";

import { AppShellHeader, Group, Button, Anchor } from "@mantine/core";
import Image from "next/image";
import styles from "./Header.module.css";

const links = ["Skills", "Projects", "Contact"] as const;

const Header = () => {
  const navlinks = links.map((l) => (
    <Anchor
      key={l}
      underline="never"
      href={`#${l.toLowerCase()}`}
      className={styles.navLink}
    >
      {l}
    </Anchor>
  ));

  return (
    <AppShellHeader withBorder={false} className={"glass"}>
      <Group justify="space-between" align="center" px="lg" h="100%">
        <Image
          src="/logo.png"
          alt="SajiDev Logo"
          width={60}
          height={60}
          style={{ cursor: "pointer" }}
        />

        <Group gap="lg" visibleFrom="sm">
          {navlinks}
        </Group>

        <Button
          variant="gradient"
          gradient={{ from: "#3A8DFF", to: "#8C52FF", deg: 90 }}
          radius="md"
          size="sm"
        >
          Hire Me
        </Button>
      </Group>
    </AppShellHeader>
  );
};

export default Header;
