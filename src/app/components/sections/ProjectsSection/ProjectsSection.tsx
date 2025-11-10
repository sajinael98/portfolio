"use client";
import {
  Box,
  Card,
  Center,
  Group,
  Pill,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { IconBrandGithub, IconEye, IconPhotoOff } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import GradientButton from "../../ui/GradientButton";
import OutlineButton from "../../ui/OutlineButton";
import Section from "../../ui/Section";
import { Project, projects } from "./projects-data";
import styles from "./ProjectsSection.module.css";

interface ProjectCardProps {
  data: Project;
  index: number;
}

const NoImage = () => (
  <Center w="100%" style={{ borderRadius: 8 }} className="glass" h={"100%"}>
    <Box ta="center">
      <IconPhotoOff size={24} color="white" />
      <Text size="xs" opacity={0.6} c="white">
        No image
      </Text>
    </Box>
  </Center>
);

const ProjectCard = ({ data, index }: ProjectCardProps) => {
  const { demo, description, tags, title, github, image } = data;

  const fromX = index % 2 === 0 ? -60 : 60;

  return (
    <motion.div
      initial={{ opacity: 0, x: fromX, y: 30 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true, margin: "-120px" }}
    >
      <Card padding="lg" radius="md" className="glass project-card">
        <Box className={styles["project-card__image-wrapper"]}>
          {image ? (
            <Image
              src={"/portfolio" + image}
              alt={title}
              fill
              objectFit="cover"
            />
          ) : (
            <NoImage />
          )}
        </Box>

        <Text className={styles["project-card__title"]}>{title}</Text>

        <Text className={styles["project-card__description"]} lineClamp={4}>
          {description}
        </Text>

        <Group mt="sm" gap={6} wrap="wrap">
          {tags.map((t) => (
            <Pill key={t} className={styles["project-card__tag"]}>
              {t}
            </Pill>
          ))}
        </Group>

        <Group mt="lg" grow>
          <GradientButton
            leftSection={<IconEye size={16} />}
            component="a"
            href={demo}
            target="_blank"
            disabled={!demo}
          >
            Live Demo
          </GradientButton>

          <OutlineButton
            leftSection={<IconBrandGithub size={16} />}
            component="a"
            href={github}
            target="_blank"
            disabled={!github}
          >
            View Code
          </OutlineButton>
        </Group>
      </Card>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <Section id="projects" title="Top Projects">
      <SimpleGrid cols={{ md: 2 }}>
        {projects.map((p, index) => (
          <ProjectCard key={p.title} data={p} index={index} />
        ))}
      </SimpleGrid>
    </Section>
  );
};

export default ProjectsSection;
