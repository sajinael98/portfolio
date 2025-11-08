"use client";
import {
  Box,
  Button,
  Card,
  Center,
  Group,
  Pill,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { IconBrandGithub, IconEye, IconPhotoOff } from "@tabler/icons-react";
import Image from "next/image";
import GradientButton from "../../ui/GradientButton";
import Section from "../../ui/Section";
import { Project, projects } from "./projects-data";
import { useInViewport, useIsFirstRender } from "@mantine/hooks";
import styles from "./ProjectsSection.module.css";
import OutlineButton from "../../ui/OutlineButton";

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
  const { ref, inViewport } = useInViewport();

  const isEven = index % 2 === 0;

  return (
    <Card
      ref={ref}
      className={[
        "glass",
        styles["project-card"],
        styles["project-card__animate"],
        isEven ? styles["from-left"] : styles["from-right"],
        inViewport ? styles["show"] : "",
      ].join(" ")}
    >
      <Box className={styles["project-card__image-wrapper"]}>
        {image ? (
          <Image src={image} alt={title} fill objectFit="cover" />
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
  );
};

const ProjectsSection = () => {
  return (
    <Section title="Top Projects">
      <SimpleGrid cols={{ md: 2 }}>
        {projects.map((p, index) => (
          <ProjectCard key={p.title} data={p} index={index} />
        ))}
      </SimpleGrid>
    </Section>
  );
};

export default ProjectsSection;
