import React from "react";
import Section from "../../ui/Section";
import { ActionIcon, Box, Group, Text, Title, Stack } from "@mantine/core";
import { contacts } from "./contacts-me-data";

const ContactMeSection = () => {
  return (
    <Section id="contact" title="Contact Me">
      <Box>
        <Stack align="flex-start" gap="md" maw={600}>
          <Title order={2} ff="inherit" fw={800}>
            Let’s Create Something Great
          </Title>

          <Text size="lg" opacity={0.85}>
            🌟 Have an idea, a business plan, or a project in progress? I’ve got
            you.
          </Text>

          <Text size="lg" opacity={0.7}>
            From <strong>design</strong> → <strong>development</strong> →{" "}
            <strong>deployment</strong>.
          </Text>

          <Text size="lg" opacity={0.85}>
            We’ll work together step-by-step to turn your concept into a
            polished, high-quality product that stands out.
          </Text>

          <Text size="lg" mt="sm">
            Reach out and let’s start building 👇
          </Text>
        </Stack>

        <Group gap="xl" mt={40}>
          {contacts.map(({ href, icon: Icon }, i) => (
            <ActionIcon
              key={i}
              size="xl"
              radius="xl"
              variant="gradient"
              gradient={{ from: "#3A8DFF", to: "#8C52FF" }}
              component="a"
              href={href}
              target="_blank"
            >
              <Icon size={24} />
            </ActionIcon>
          ))}
        </Group>
      </Box>
    </Section>
  );
};

export default ContactMeSection;
