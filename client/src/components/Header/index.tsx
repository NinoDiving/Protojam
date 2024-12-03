import Countdown from "./Countdown";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src="./src/assets/images/logo.png"
        alt="Logo"
      />
      <Countdown />
    </header>
  );
}
