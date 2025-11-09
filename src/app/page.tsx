import Header from "@/app/components/layout/Header";
import { AppShell } from "@mantine/core";
import Main from "./components/layout/Main";
import styles from "./page.module.css";
import Footer from "./components/layout/Footer";

export default function HomePage() {
  return (
    <AppShell
      header={{ height: 60 }}
      footer={{
        height: 60,
      }}
      className={styles["responsive-shell"]}
      styles={{
        header: {
          position: "static",
        },
        footer: {
          position: "static",
        },
      }}
    >
      <Header />

      <Main />

      <Footer />
    </AppShell>
  );
}
