import React from "react";
import Section from "@/app/components/ui/Section";
import { Box, Stack, Text, Timeline, TimelineItem } from "@mantine/core";
import { IconBriefcase } from "@tabler/icons-react";
import styles from "./ExperienceSection.module.css";
import { experiences } from "./experience-data";

const ExperienceSection = () => {
  return (
    <Section title="Experience" mt={120}>
      <Timeline
        active={experiences.length}
        bulletSize={32}
        lineWidth={4}
        color="violet"
      >
        {experiences.map((exp, i) => (
          <TimelineItem
            key={i}
            bullet={<IconBriefcase size={18} />}
            title={
              <Text className={styles.itemTitle}>
                {exp.role} · {exp.company}
              </Text>
            }
          >
            <div
              className={`${styles.row} ${
                i % 2 === 0 ? styles.right : styles.left
              }`}
            >
              <Box className={styles.card}>
                <Stack gap={6}>
                  <Text c="gray.3" fz="sm">
                    {exp.period}
                  </Text>

                  <Text c="gray.2" fz="sm">
                    {exp.bulletPoints.map((line, idx) => (
                      <div key={idx}>• {line}</div>
                    ))}
                  </Text>
                </Stack>
              </Box>
            </div>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
};

export default ExperienceSection;
