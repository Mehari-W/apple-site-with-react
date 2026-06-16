import { Alert } from "bootstrap";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Alert_Section from "./Components/Alert_Section/Alert_Section";
import First_Sec from "./Components/First_Sec/First_Sec";
import Second_Sec from "./Components/Second_Sec/Second_Sec";
import Thrid_Sec from "./Components/Third_Sec/Thrid_Sec";
import Fourth_Sec from "./Components/Fourth_Sec/Fourth_Sec";
import Fifth_Sec from "./Components/Fifth_Sec/Fifth_Sec";
import Six_Sec from "./Components/Six_Sec/Six_Sec";

function App() {
  return (
    <>
      <Header />
      <Alert_Section />
      <First_Sec />
      <Second_Sec />
      <Thrid_Sec />
      <Fourth_Sec />
      <Fifth_Sec />
      <Six_Sec />
      <Footer />
    </>
  );
}

export default App;
