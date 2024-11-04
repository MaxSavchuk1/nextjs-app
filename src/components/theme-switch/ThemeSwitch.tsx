import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import styles from "./ThemeSwitch.module.scss";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      {theme === "light" ? (
        <Moon size={20} onClick={() => setTheme("dark")} className={styles.moon} />
      ) : (
        <Sun size={20} onClick={() => setTheme("light")} className={styles.sun} />
      )}
    </div>
  );
}
