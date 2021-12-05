import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Contacts from "./Pages/Contacts";
import Home from "./Pages/Home";
import PriceList from "./Pages/PriceList";

function App() {
  return (
    <div className="appWrapper">
      <Header />
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/pricelist" element={<PriceList />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
