import { useState } from "react";
import Box from "./Box";
import styles from "./Calendar.module.css";

export default function Calendar() {
  const [openCases, setOpenCases] = useState<boolean[]>(
    new Array(25).fill(false),
  );

  const now = new Date();
  const today = now.getDate();

  const toggleBox = (caseNumber: number) => {
    console.info(`Case cliquée : ${caseNumber + 1}`);
    if (caseNumber + 1 > today) {
      alert("Vous ne pouvez pas encore ouvrir cette case");
    } else {
      const newOpenCases = [...openCases];
      newOpenCases[caseNumber] = !newOpenCases[caseNumber];
      setOpenCases(newOpenCases);
    }
  };

  return (
    <main className={styles.adventCalendar}>
      {openCases.map((isOpen, index) => {
        console.info(isOpen);
        return (
          <Box
            key={`box-${index + 1}`}
            handleClick={() => toggleBox(index)}
            content={`${index + 1}`}
          />
        );
      })}
    </main>
  );
}
