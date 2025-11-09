import { AppShellFooter, Group, Text } from "@mantine/core";
import React from "react";

const Footer = () => {
  return (
    <AppShellFooter className="glass">
      <Group
        justify="space-between"
        align="center"
        wrap="nowrap"
        w="100%"
        px="lg"
        py="sm"
        h={"100%"}
      >
        <Text fz="sm" fw={500}>
          © {new Date().getFullYear()} Saji Nael
        </Text>

        <Text  fw={400} style={{ whiteSpace: "nowrap" }}>
          Built with ❤️ by Saji
        </Text>
      </Group>
    </AppShellFooter>
  );
};

export default Footer;
