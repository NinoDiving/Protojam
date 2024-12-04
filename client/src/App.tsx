import "./App.css";
import Calendar from "./components/Calendar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FallingSnow from "./components/SnowFall/SnowFall";

export default function App() {
  return (
    <>
      <FallingSnow />
      <Header />
      <Calendar />
      <Footer />
    </>
  );
}
