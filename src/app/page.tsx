import Header from "@/app/components/layout/Header";
import { AppShell } from "@mantine/core";
import Main from "./components/layout/Main";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <AppShell header={{ height: 60 }} className={styles["responsive-shell"]}>
      <Header />

      <Main />
    </AppShell>
  );
}
