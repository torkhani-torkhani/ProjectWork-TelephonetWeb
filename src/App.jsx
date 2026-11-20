import { useState } from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import AddProduct from "./Components/AddProducts";
import PhoneCard from "./Components/PhoneCard";
import UppdateProduct from "./Components/UppdateProduct";
import { Routes, Route } from "react-router";
import Cart from "./Components/Cart";
import Contact from "./Components/Contact";
import ConstellationBg from "./Components/ConstellationBg";
import "./App.css";

function App() {
  var [cart, setToCart] = useState([]);
  var addToCart = (product) => {
    setToCart([...cart, product]);
  };

  return (
    <>
      <ConstellationBg />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/product/:id" element={<PhoneCard />} />
        <Route path="/update/:id" element={<UppdateProduct />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
