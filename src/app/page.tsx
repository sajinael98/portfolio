import AnimatedBackground from "@/app/components/AnimatedBackground";
import Header from "@/app/components/layout/Header";
import { AppShell, AppShellMain } from "@mantine/core";
import ExperienceSection from "./components/sections/ExperienceSection";
import HeroSection from "./components/sections/HeroSection";
import styles from "./page.module.css";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactMeSection from "./components/sections/ContactMeSection";
import Main from "./components/layout/Main";

export default function HomePage() {
  return (
    <AppShell
      header={{ height: 60 }}
      styles={{
        header: { position: "static" },
      }}
      className={styles.responsiveShell}
    >
      <AnimatedBackground />
      <Header />

      <Main />
    </AppShell>
  );
}
