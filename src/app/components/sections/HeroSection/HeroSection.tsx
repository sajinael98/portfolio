"use client";

import { Flex, Group, Stack, Text } from "@mantine/core";
import { IconFolder, IconRocket } from "@tabler/icons-react";
import GradientButton from "@/app/components/ui/GradientButton";
import OutlineButton from "../../ui/OutlineButton";

const HeroSection = () => {
  return (
    <Flex
      py={{
        base: "calc(var(--mantine-spacing-xl) * 2.5)",
        md: "calc(var(--mantine-spacing-xl) * 3)",
      }}
    >
      <Stack>
        <Stack gap={0}>
          <Text
            fz={{ base: "xl", md: "calc(var(--mantine-font-size-xl) * 2)" }}
            fw={900}
            c="violet"
          >
            👋 Hi there, I’m-
          </Text>

          <Text
            fz={{
              base: "calc(var(--mantine-font-size-xl) * 2.5)",
              md: "calc(var(--mantine-font-size-xl) * 4.5)",
            }}
            fw={700}
            lh={1.1}
            c="white"
            style={{
              textShadow: "0 4px 18px rgba(131, 29, 194, 0.45)",
            }}
          >
            Saji Nael
          </Text>
        </Stack>

        <Text fz="xl" fw={600} c="violet">
          💼 Software Engineer | 🧩 ERP Systems Specialist | 🚀 Full-Stack
          Developer
        </Text>

        <Text fz="lg" c="gray.4" lh={1.7} maw={600}>
          I’m a Software Engineer with a strong focus on designing and building
          systems that solve real business problems. I translate operational
          workflows and requirements into scalable, maintainable software —
          combining clean architecture, domain clarity, and thoughtful user
          experience.
        </Text>

        <Group gap="md" mt="sm">
          <GradientButton
            leftSection={<IconRocket size={18} />}
            size="lg"
            visibleFrom="md"
            href="#contact"
            component="a"
          >
            Get In Touch
          </GradientButton>

          <GradientButton
            leftSection={<IconRocket size={18} />}
            size="md"
            hiddenFrom="md"
            href="#contact"
            component="a"
          >
            Get In Touch
          </GradientButton>

          <OutlineButton
            leftSection={<IconFolder size={18} />}
            size="md"
            visibleFrom="md"
            href="#projects"
            component="a"
          >
            View Projects
          </OutlineButton>

          <OutlineButton
            leftSection={<IconFolder size={18} />}
            size="sm"
            hiddenFrom="md"
            href="#projects"
            component="a"
          >
            View Projects
          </OutlineButton>
        </Group>
      </Stack>
    </Flex>
  );
};

export default HeroSection;
