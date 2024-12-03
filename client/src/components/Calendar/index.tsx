import Box from "./Box";
import styles from "./Calendar.module.css";
import { fetchQuoteById } from "../../api/fetchQuotes";
import type { quotesInfo } from "../../api/quotesInfo";
import { useEffect, useState } from "react";

export default function Calendar() {
  const [quotes, setQuotes] = useState<(quotesInfo | null)[]>(Array(25).fill(null));
  const [openCases, setOpenCases] = useState<boolean[]>(new Array(25).fill(false));

  useEffect(() => {
    const fetchQuotes = async () => {
      const fetchedQuotes = await Promise.all(
        Array.from({ length: 25 }, (_, index) => 
          fetchQuoteById(index + 1).catch(() => null)
        )
      );
      console.log("Citations récupérées :", fetchedQuotes);
      setQuotes(fetchedQuotes);
    };
    fetchQuotes();
  }, []);

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
        const quote = quotes[index];
        return (
          <Box
            key={`box-${index + 1}`}
            handleClick={() => toggleBox(index)}
            content={isOpen && quote ? `${quote.citation}\n${quote.morale}` : `${index + 1}`}
            isOpen={isOpen}
          />
        );
      })}
    </main>
  );
}