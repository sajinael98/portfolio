import { AppShellMain } from "@mantine/core";
import ContactMeSection from "../../sections/ContactMeSection";
import ExperienceSection from "../../sections/ExperienceSection";
import HeroSection from "../../sections/HeroSection";
import ProjectsSection from "../../sections/ProjectsSection";
import SkillsSection from "../../sections/SkillsSection";

const Main = () => {
  return (
    <AppShellMain>
      <HeroSection />

      <ExperienceSection />

      <SkillsSection />

      <ProjectsSection />

      <ContactMeSection />
    </AppShellMain>
  );
};

export default Main;
