import useCountdown from "../../../services/TimeLeft";
import styles from "./Countdown.module.css";

export default function Countdown() {
  const xmas = new Date("2024-12-25T00:00:00Z");
  const { days, hours, minutes, seconds } = useCountdown({
    endDate: xmas,
  });
  return (
    <time dateTime="ww dd hh mm ss" className={styles.countdownTime}>
      <span className={styles.countdownStyle}>{days}</span>
      <p className={styles.countdownStyle}>Jours</p>
      <p className={styles.countdownStyle}>{":"}</p>
      <span className={styles.countdownStyle}>
        {hours.toString().padStart(2, "0")}
      </span>
      <p className={styles.countdownStyle}>Heures</p>
      <p className={styles.countdownStyle}>{":"}</p>
      <span className={styles.countdownStyle}>
        {minutes.toString().padStart(2, "0")}
      </span>
      <p className={styles.countdownStyle}>Minutes</p>
      <p className={styles.countdownStyle}>{":"}</p>
      <span className={styles.countdownStyle}>
        {seconds.toString().padStart(2, "0")}
      </span>
      <p className={styles.countdownStyle}>Secondes</p>
      <p className={styles.countdownStyle}>avant Noël</p>
    </time>
  );
}
