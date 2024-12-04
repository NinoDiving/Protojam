import HyperModal from "react-hyper-modal";
import styles from "./Box.module.css";

type BoxProps = {
  caseNumber: number;
  handleClick: () => void;
  content: string;
  isModalOpen: boolean;
  toggleModal: () => void;
  data: {
    citation: string;
    morale: string;
  };
};

export default function Box({
  caseNumber,
  handleClick,
  content,
  isModalOpen,
  toggleModal,
  data,
}: BoxProps) {
  const handleBoxClick = () => {
    const today = new Date().getDate();

    if (caseNumber > today) {
      alert("Vous ne pouvez pas encore ouvrir cette case");
      return;
    }

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
        <p>{data.citation}</p>
        <small>{data.morale}</small>
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
