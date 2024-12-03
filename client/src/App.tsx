import "./App.css";
import OpenDoorRect from "./components/OpenDoorSquare/OpenDoorRect/OpenDoorRect";
import OpenDoorSquare from "./components/OpenDoorSquare/OpenDoorSquare";

function App() {
  return (
    <article className="calendarBox">
      <OpenDoorSquare />
      <OpenDoorRect />
    </article>
  );
}

export default App;
