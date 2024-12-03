import HyperModal from "react-hyper-modal";
import styles from "./Box.module.css";

import type { BoxType } from "../../../types/type";

type BoxProps = BoxType & {
  isModalOpen: boolean;
  toggleModal: () => void;
};

export default function Box({
  handleClick,
  content,
  isModalOpen,
  toggleModal,
}: BoxProps) {
  const handleBoxClick = () => {
    handleClick();
    setTimeout(toggleModal, 600);
  };

  return (
    <div className={styles.box}>
      <HyperModal
        isOpen={isModalOpen}
        classes={{
          wrapperClassName: styles.modal,
          dimmerClassName: styles.backModal,
          contentClassName: styles.contentModal,
        }}
        renderOpenButton={() => {
          return (
            <button onClick={toggleModal} type="button">
              <img
                className={styles.modalBtn}
                src="./src/assets/images/logoBtn.png"
                alt="Modal button"
              />
            </button>
          );
        }}
      >
        <h1>Je suis le contenu de la modal pour {content}</h1>
      </HyperModal>
      <div
        className={`${styles.boxContainer} ${
          isModalOpen ? styles.rotateX : ""
        }`}
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
