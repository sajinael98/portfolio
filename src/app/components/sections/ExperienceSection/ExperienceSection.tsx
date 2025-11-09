"use client";

import React, { useEffect, useRef } from "react";
import Section from "@/app/components/ui/Section";
import { Card, Group, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { IconUserCode } from "@tabler/icons-react";
import { experiences } from "./experience-data";
import styles from "./ExperienceSection.module.css";

const ExperienceSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll(
      `.${styles["experience-card"]}`
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add(styles["show"]);
        });
      },
      { threshold: 0.15 }
    );
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="experience" title="Experience" mt={120}>
      <Stack ref={ref} className={styles["experience-list"]}>
        {experiences.map((exp, i) => (
          <Card
            key={i}
            className={styles["experience-card"]}
            radius="lg"
            p="xl"
          >
            <Group justify="space-between" align="flex-start">
              <Group align="center" wrap="nowrap">
                <ThemeIcon variant="transparent">
                  <IconUserCode
                    className={styles["experience-icon"]}
                  />
                </ThemeIcon>
                <Stack gap={2}>
                  <Title order={4} className={styles["experience-role"]}>
                    {exp.role}
                  </Title>
                  <Text size="sm" className={styles["experience-company"]}>
                    {exp.company}
                  </Text>
                </Stack>
              </Group>

              <Text size="sm" className={styles["experience-period"]}>
                {exp.period}
              </Text>
            </Group>

            <Stack mt="md" gap={6}>
              {exp.bulletPoints.map((line, idx) => (
                <Text key={idx} size="sm" className={styles["experience-line"]}>
                  • {line}
                </Text>
              ))}
            </Stack>
          </Card>
        ))}
      </Stack>
    </Section>
  );
};

export default ExperienceSection;
