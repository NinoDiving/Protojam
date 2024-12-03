import { useState } from "react";
import styles from "./Calendar.module.css";

export default function Calendar() {
  const [openBoxes, setOpenBoxes] = useState<boolean[]>(
    new Array(25).fill(false),
  );

  const toggleDoor = (index: number) => {
    setOpenBoxes((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen)),
    );
  };

  return (
    <main className={styles.adventCalendar}>
      {[...Array(25)].map((_, index) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          className={`${styles.box} ${openBoxes[index] ? styles.open : ""}`}
        >
          <div className={styles.boxContainer}>
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <div
              onClick={() => toggleDoor(index)}
              className={styles.faceSquare}
            >
              {" "}
              {index + 1}
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
