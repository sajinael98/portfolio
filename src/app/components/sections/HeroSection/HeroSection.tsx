"use client";

import { Flex, Group, Stack, Text } from "@mantine/core";
import { IconFolder, IconRocket } from "@tabler/icons-react";
import GradientButton from "@/app/components/ui/GradientButton";
import OutlineButton from "../../ui/OutlineButton";
import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const HeroSection = () => {
  return (
    <Flex
      py={{
        base: "calc(var(--mantine-spacing-md) * 2.5)",
        md: "calc(var(--mantine-spacing-xl) * 3)",
      }}
    >
      <Stack gap="md">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
        >
          <Text
            fz={{ base: "xl", md: "calc(var(--mantine-font-size-xl) * 2)" }}
            fw={900}
            c="violet"
          >
            👋 Hi there, I’m-
          </Text>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
        >
          <Text
            fz={{
              base: "calc(var(--mantine-font-size-xl) * 2.5)",
              md: "calc(var(--mantine-font-size-xl) * 4.5)",
            }}
            fw={700}
            lh={1.1}
            c="white"
            style={{ textShadow: "0 4px 18px rgba(131, 29, 194, 0.45)" }}
          >
            Saji Nael
          </Text>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
        >
          <Text fz="xl" fw={600} c="violet">
            💼 Software Engineer | 🧩 ERP Systems Specialist | 🚀 Full-Stack
            Developer
          </Text>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
        >
          <Text fz="lg" c="gray.4" lh={1.7} maw={600}>
            I design and build systems that solve real business problems — with
            clean architecture and thoughtful user experience.
          </Text>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
        >
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
        </motion.div>
      </Stack>
    </Flex>
  );
};

export default HeroSection;
