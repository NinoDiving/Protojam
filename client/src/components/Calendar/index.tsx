import { useEffect, useState } from "react";
import { fetchQuoteById } from "../../api/fetchQuotes";
import type { quotesInfo } from "../../api/quotesInfo";
import Box from "./Box";
import styles from "./Calendar.module.css";

export default function Calendar() {
  const [quotes, setQuotes] = useState<
    ((quotesInfo & { id: number }) | null)[]
  >(Array(25).fill(null));
  const [modals, setModals] = useState<boolean[]>(new Array(25).fill(false));

  useEffect(() => {
    const fetchQuotes = async () => {
      const fetchedQuotes = await Promise.all(
        Array.from({ length: 25 }, (_, index) =>
          fetchQuoteById(index + 1)
            .then((quote) => (quote ? { ...quote, id: index + 1 } : null))
            .catch(() => null),
        ),
      );
      setQuotes(fetchedQuotes);
    };
    fetchQuotes();
  }, []);

  const toggleModal = (index: number) => {
    const newModals = [...modals];
    newModals[index] = !newModals[index];
    setModals(newModals);
  };

  return (
    <main className={styles.adventCalendar}>
      {quotes.map((quote, index) => {
        return (
          <Box
            key={quote?.id || `box-${index + 1}`}
            toggleModal={() => toggleModal(index)}
            content={` ${index + 1}`}
            isModalOpen={modals[index]}
            data={{
              citation: quote?.citation || "Pas de citation disponible",
              morale: quote?.morale || "Pas de morale disponible",
            }}
          />
        );
      })}
    </main>
  );
}
