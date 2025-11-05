import { AppShell, AppShellMain } from "@mantine/core";
import Header from "@/app/components/layout/Header";
import AnimatedBackground from "@/app/components/AnimatedBackground";
import styles from "./page.module.css";
import HeroSection from "./components/sections/HeroSection";

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
      <Header />
      <AppShellMain>
        <HeroSection />
      </AppShellMain>
    </AppShell>
  );
}
