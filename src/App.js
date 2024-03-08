import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shopPage/ShopPage";
import ShoppingCartPage from "./pages/shoppingCartPage/ShoppingCartPage";
import History from "./pages/history/HistoryPage";
import Header from "./components/common/header/header";
import Footer from "./components/common/footer/footer";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<ShopPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shopping-cart" element={<ShoppingCartPage />} />
          <Route path="/history" element={<History />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
