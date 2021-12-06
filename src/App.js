import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Contacts from "./Pages/Contacts";
import Home from "./Pages/Home";
import PriceList from "./Pages/PriceList";
import Catalog from "./Pages/Catalog";
import Item from "./Pages/Item";
import { toast } from "react-toastify";
import Cart from "./Pages/Cart";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function App() {
  return (
    <div className="appWrapper">
      <Header />
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/pricelist" element={<PriceList />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:category" exact element={<Item />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
