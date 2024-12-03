import type { BoxType } from "../../../types/type";
import styles from "./Box.module.css";

export default function Box({ handleClick, content, isOpen }: BoxType) {
  return (
    <button
      type="button"
      className={
        isOpen
          ? `${styles.box} ${styles.openBox} ${styles.boxContent}`
          : `${styles.box}`
      }
      onClick={handleClick}
    >
      {content}
    </button>
  );
}
