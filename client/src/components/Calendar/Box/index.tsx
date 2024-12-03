import HyperModal from "react-hyper-modal";
import styles from "./Box.module.css";

import type { BoxType } from "../../../types/type";

type BoxProps = BoxType & {
  isModalOpen: boolean;
  toggleModal: () => void;
  canOpen: boolean;
};

export default function Box({
  handleClick,
  content,
  isModalOpen,
  toggleModal,
  canOpen,
}: BoxProps) {
  const handleBoxClick = () => {
    if (canOpen) {
      handleClick();
      setTimeout(toggleModal, 600);
    } else {
      alert("Vous ne pouvez pas encore ouvrir cette case.");
    }
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
        renderOpenButton={() => (
          <button onClick={toggleModal} type="button">
            <img
              className={styles.modalBtn}
              src="./src/assets/images/logoBtn.png"
              alt="Modal button"
            />
          </button>
        )}
      >
        <h1>Je suis le contenu de la modal pour {content}</h1>
      </HyperModal>
      <div
        className={`${styles.boxContainer} ${
          isModalOpen && canOpen ? styles.rotateX : ""
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
