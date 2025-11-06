"use client";

import { AppShellHeader, Group, Button, Anchor, Text } from "@mantine/core";
import styles from "./Header.module.css";

const links = ["Home", "Projects", "Skills", "About", "Contact"] as const;

const Header = () => {
  const navlinks = links.map((l) => (
    <Anchor key={l} underline="never" href={l} className={styles.navLink}>
      {l}
    </Anchor>
  ));

  return (
    <AppShellHeader withBorder={false} className={"glass"}>
      <Group justify="space-between" align="center" px="lg" h="100%">
        <Text
          fw={700}
          fz="xl"
          variant="gradient"
          gradient={{ from: "#3A8DFF", to: "#8C52FF", deg: 90 }}
          style={{ fontFamily: "monospace" }}
        >
          &lt;SajiDev /&gt;
        </Text>

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
