import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

import HomePage from "../pages/HomePage";
import CategoryPage from "../pages/CategoryPage";
import ItemDetailPage from "../pages/ItemDetailPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryID" element={<CategoryPage />} />
          <Route path="/item/:itemID" element={<ItemDetailPage />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
