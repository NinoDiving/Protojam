import Countdown from "./Countdown";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Wild X'mas</h1>
      <Countdown />
    </header>
  );
}
