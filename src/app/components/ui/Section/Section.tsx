import { Box, BoxProps, Stack, Text } from "@mantine/core";
import styles from "./Section.module.css";

interface SectionProps extends BoxProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children, ...props }: SectionProps) => {
  return (
    <Box {...props} component="section">
      <Stack gap="sm">
        <Text fz={{ base: "xl", md: "2rem" }} className={styles.title}>
          {title}
        </Text>

        <Box className={styles.underline} mb="xl" />

        {children}
      </Stack>
    </Box>
  );
};

export default Section;
