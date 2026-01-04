import { Route, Routes } from "react-router-dom";
import BtmHeader from "./Component/Header/BtmHeader";
import TopHeader from "./Component/Header/TopHeader";
import Home from "./Page/Home/Home";
import Cart from "./Page/Cart/Cart";
import About from "./Page/About/About";
import ProductsDetails from "./Page/ProductsDetails/ProductsDetails";
import ScrollTo from "./Component/ScrollTo/ScrollTo";
import Categorypage from "./Page/CategoryPage/Categorypage";
import SearchResult from "./Page/SearchResult/SearchResult";

function App() {
  return (
    <>
      <header className=" fixed top-0 right-0 left-0 bg-white z-50 ">
        <TopHeader />
        <BtmHeader />
      </header>

      <ScrollTo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Search" element={<SearchResult />} />
        <Route path="/About" element={<About />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="/Category/:Category" element={<Categorypage />} />
      </Routes>
    </>
  );
}

export default App;
