import { useState } from "react";
import Box from "./Box";
import styles from "./Calendar.module.css";

export default function Calendar() {
  const [openCases, setOpenCases] = useState<boolean[]>(
    new Array(25).fill(false),
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean[]>(
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

  const toggleModal = (caseNumber: number) => {
    const newModalStates = [...isModalOpen];
    newModalStates[caseNumber] = !newModalStates[caseNumber];
    setIsModalOpen(newModalStates);
  };

  return (
    <main className={styles.adventCalendar}>
      {openCases.map((isOpen, index) => {
        console.info(isOpen);
        const canOpen = index + 1 <= today; // Autoriser si la date est atteinte
        return (
          <Box
            key={`box-${index + 1}`}
            handleClick={() => toggleBox(index)}
            toggleModal={() => toggleModal(index)}
            isModalOpen={isModalOpen[index]}
            content={`${index + 1}`}
            canOpen={canOpen}
          />
        );
      })}
    </main>
  );
}
