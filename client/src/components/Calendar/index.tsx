import styles from "./Calendar.module.css";
import { fetchQuoteById } from "../../api/fetchQuotes";
import type { quotesInfo } from "../../api/quotesInfo";
import { useEffect, useState } from "react";

export default function Calendar() {
  const [quotes, setQuotes] = useState<(quotesInfo | null)[]>(Array(25).fill(null));

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

  const handleBoxClick = (index: number) => {
    const updatedQuotes = [...quotes];
    if (updatedQuotes[index]) {
      updatedQuotes[index] = { ...updatedQuotes[index], isOpened: true };
      setQuotes(updatedQuotes);
    }
  };

  return (
    <main className={styles.adventCalendar}>
      {quotes.map((quote, index) => (
        <div
          key={index}
          className={styles.box}
          onClick={() => handleBoxClick(index)}
        >
          {quote?.isOpened ? (
            <>
              <p>{quote.citation}</p>
              <small>{quote.morale}</small>
            </>
          ) : (
            index + 1
          )}
        </div>
      ))}
    </main>
  );
}