import { useState } from "react";
import "./OpenBox.css";

export default function OpenDoorSquare() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDoor = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="box-container">
      <div className={`box ${isOpen ? "open" : ""}`}>
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div onClick={toggleDoor} className="face left">
          Left
        </div>
        {/* <div onClick={toggleDoor} className="face right">
					Right
				</div> */}
        <div className="face back">Back</div>
      </div>
    </div>
  );
}
