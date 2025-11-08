import AnimatedBackground from "@/app/components/AnimatedBackground";
import Header from "@/app/components/layout/Header";
import { AppShell, AppShellMain } from "@mantine/core";
import ExperienceSection from "./components/sections/ExperienceSection";
import HeroSection from "./components/sections/HeroSection";
import styles from "./page.module.css";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";

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

        <ExperienceSection />

        <SkillsSection />

        <ProjectsSection />
      </AppShellMain>
    </AppShell>
  );
}
