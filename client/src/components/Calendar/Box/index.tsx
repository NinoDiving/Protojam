import { useState } from "react";
import HyperModal from "react-hyper-modal";
import styles from "./Box.module.css";

type BoxProps = {
  caseNumber: number;
  handleClick: () => void;
  content: string;
  isModalOpen: boolean;
  toggleModal: () => void;
  data: {
    img?: string;
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
  const [isBlockingModalOpen, setBlockingModalOpen] = useState(false); // Gère la modal bloquante
  const today = new Date().getDate();

  // Calcul des jours restants avant d'ouvrir la boîte
  const daysLeft = caseNumber - today;

  const handleBoxClick = () => {
    if (caseNumber > today) {
      setBlockingModalOpen(true); // Ouvre la modal bloquante
      return;
    }

    handleClick();
    setTimeout(toggleModal, 0);
  };

  const closeBlockingModal = () => {
    setBlockingModalOpen(false); // Ferme la modal bloquante
  };

  return (
    <div className={styles.box}>
      {/* Modal principale */}
      <HyperModal
        isOpen={isModalOpen}
        classes={{
          wrapperClassName: styles.modal,
          dimmerClassName: styles.backModal,
          contentClassName: styles.contentModal,
        }}
        renderOpenButton={() => (
          <button
            className={styles.modalBtn}
            onClick={toggleModal}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="white"
              className="bi bi-gift-fill"
              viewBox="0 0 16 16"
            >
              <title id="btnModalTitle">Bouton Cadeaux</title>
              <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9z" />
            </svg>
          </button>
        )}
      >
        {data.img ? (
          <img src={data.img} alt="" className={styles.surprise} />
        ) : (
          <p>{data.citation}</p>
        )}
        <small>{data.morale}</small>
      </HyperModal>

      {/* Modal bloquante */}
      <HyperModal
        isOpen={isBlockingModalOpen}
        requestClose={closeBlockingModal}
        classes={{
          wrapperClassName: styles.modal,
          dimmerClassName: styles.backModal,
          contentClassName: styles.contentModal,
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          {/* biome-ignore lint/a11y/useIframeTitle: <explanation> */}
          <iframe
            src="https://gifer.com/embed/5cr"
            width="300"
            height="200"
            allowFullScreen
            style={{
              alignSelf: "flex-start",
              borderRadius: "10px",
              border: "0px",
            }}
          >
            Gif Not today
          </iframe>
        </div>
        <p>
          {daysLeft === 1
            ? "Revenez demain pour l'ouvrir."
            : `Revenez dans ${daysLeft} jours pour l'ouvrir.`}
        </p>
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
