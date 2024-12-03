import { useState } from "react";
import "../OpenBox.css";

export default function OpenDoorRect() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDoor = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="rect-container">
      <div className={`rect ${isOpen ? "open" : ""}`}>
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div onClick={toggleDoor} className="face left rectangle">
          Left
        </div>
        {/* <div onClick={toggleDoor} className="face right">
					Right
				</div> */}
        <div className="face back rectangle">Back</div>
      </div>
    </div>
  );
}
