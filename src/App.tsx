import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import ProductDetails from "./components/Products/ProductDetails"; // Import du composant ProductDetails
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <BrowserRouter>
      <Navbar handleOrderPopup={handleOrderPopup} />

      <Routes>
        {/* Affichage des produits à la racine ("/") */}
        <Route path="/" element={<Products />} />

        {/* Route pour afficher les détails d'un produit spécifique */}
        <Route path="/products/:id" element={<ProductDetails />} />

        <Route path="/products" element={<Products />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
