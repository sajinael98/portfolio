import AnimatedBackground from "@/app/components/AnimatedBackground";
import { AppShell } from "@mantine/core";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <AppShell
      header={{ height: 60 }}
      styles={{
        header: { position: "static", backgroundColor: "transparent" },
        main: { background: "transparent" },
      }}
      className={styles.responsiveShell}
    >
      <AnimatedBackground />
      
    </AppShell>
  );
}
