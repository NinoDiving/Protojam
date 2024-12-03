import { useState } from "react";
import HyperModal from "react-hyper-modal";
import type { BoxType } from "../../../types/type";
import styles from "./Box.module.css";
export default function Box({ handleClick, content }: BoxType) {
  const [isRotated, setIsRotated] = useState(false);

  const handleBoxClick = () => {
    setIsRotated((prev) => !prev);
    handleClick();
  };

  return (
    <div className={styles.box}>
      <HyperModal
        classes={{
          wrapperClassName: styles.modal,
          dimmerClassName: styles.backModal,
        }}
        renderOpenButton={(requestOpen) => {
          return (
            <button onClick={requestOpen} type="button">
              <img
                className={styles.modalBtn}
                src="./src/assets/images/logoBtn.png"
                alt=""
              />
            </button>
          );
        }}
      >
        <h1>Salut</h1>
      </HyperModal>
      <div
        className={`${styles.boxContainer} ${isRotated ? styles.rotateX : ""}`}
      >
        <button
          type="button"
          className={styles.boxContent}
          onClick={handleBoxClick}
        >
          {content}
        </button>
      </div>
    </div>
  );
}
