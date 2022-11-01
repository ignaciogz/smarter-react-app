import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

import HomePage from "../pages/HomePage";
import CategoryPage from "../pages/CategoryPage";
import ItemDetailPage from "../pages/ItemDetailPage";
import CartPage from "../pages/CartPage";
import Error404Page from "../pages/Error404Page";

function AppRouter() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<CategoryPage />} path="/category/:categoryID" />
          <Route element={<ItemDetailPage />} path="/item/:itemID" />
          <Route element={<CartPage />} path="/cart" />
          <Route element={<Error404Page />} path="*" />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
