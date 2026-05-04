import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Main/Home/Home";
import Header from "./Components/Header/Header";
import LoginForm from "./Components/Header/LoginFarm";
import RegisterFarm from "./Components/Header/RegisterFarm";
import CarePage from "./Components/Care/CarePage";
import FishCarePage from "./Components/Care/FishCare";
import PlantCare from "./Components/Care/PlantCare";
import BirdCare from "./Components/Care/BirdsCare";
import ReptileCare from "./Components/Care/ReptilesCare";
import DogCare from "./Components/Care/DogCare";
import CatCare from "./Components/Care/CatCare";
import ShopPage from "./Components/Marketplace/ShopPage";
import SellPage from "./Components/Marketplace/Sellpage";
import BuyPage from "./Components/Marketplace/product";
import BestItemsPage from "./Components/BestProduct/BestItems";
import TopProduct from "./Components/BestProduct/TopProduct";
import NewProduct from "./Components/BestProduct/NewProduct";
import SaleProduct from "./Components/BestProduct/SaleProduct";
import LabyrinthPage from "./Components/Products/Labyrinth";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterFarm />} />
        <Route path="/care" element={<CarePage />} />
        <Route path="/fishcare" element={<FishCarePage />} />
        <Route path="/plantcare" element={<PlantCare />} />
        <Route path="/birdcare" element={<BirdCare />} />
        <Route path="/reptilescare" element={<ReptileCare />} />
        <Route path="/dogcare" element={<DogCare />} />
        <Route path="/catcare" element={<CatCare/>} />
        <Route path="/shop" element={<ShopPage/>} />
        <Route path="/sell" element={<SellPage/>} />
        <Route path="/buy" element={<BuyPage/>} />
        <Route path="/best" element={<BestItemsPage/>} />
        <Route path="/top" element={<TopProduct/>} />
        <Route path="/new" element={<NewProduct/>} />
        <Route path="/sale" element={<SaleProduct/>} />
        <Route path="/fish/labyrinth" element={<LabyrinthPage/>} />















      </Routes>
    </BrowserRouter>
  );
}

export default App;