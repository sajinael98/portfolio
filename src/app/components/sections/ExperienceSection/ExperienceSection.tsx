"use client";

import { Card, Group, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import Section from "@/app/components/ui/Section";
import { IconUserCode } from "@tabler/icons-react";
import { experiences } from "./experience-data";
import styles from "./ExperienceSection.module.css";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <Section id="experience" title="Experience">
      <Stack className={styles["experience-list"]}>
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: i * 0.12,
              ease: [0.16, 1, 0.3, 1], // smooth & premium
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card radius="lg" p="xl" className="glass">
              <Group justify="space-between" align="flex-start">
                <Group align="center" wrap="nowrap">
                  <ThemeIcon variant="transparent">
                    <IconUserCode className={styles["experience-icon"]} />
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
                  <Text
                    key={idx}
                    size="sm"
                    className={styles["experience-line"]}
                  >
                    • {line}
                  </Text>
                ))}
              </Stack>
            </Card>
          </motion.div>
        ))}
      </Stack>
    </Section>
  );
};

export default ExperienceSection;
