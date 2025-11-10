"use client";

import { Anchor, AppShellHeader, Group } from "@mantine/core";
import Image from "next/image";
import GradientButton from "../../ui/GradientButton";
import styles from "./Header.module.css";

const links = ["Skills", "Experience", "Projects", "Contact"] as const;

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
          src="/portfolio/logo.png"
          alt="SajiDev Logo"
          width={60}
          height={60}
          style={{ cursor: "pointer" }}
        />

        <Group gap="lg" visibleFrom="sm">
          {navlinks}
        </Group>

        <GradientButton href="#contact" component="a">
          Hire Me
        </GradientButton>
      </Group>
    </AppShellHeader>
  );
};

export default Header;
