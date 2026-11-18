import { useState } from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Products from "./Components/Products";
import AddProduct from "./Components/AddProducts";
import phonesData from "./Components/PhonesData";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  const [phones, setPhones] = useState(phonesData);

  function addPhone(newPhone) {
    setPhones([...phones, newPhone]);
  }
    function deletePhone(id) {
    setPhones(phones.filter((phone) => phone.id !== id))
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products"
           element={<Products phones={phones} deletePhone={deletePhone} />} />
          <Route
            path="/add-product"
            element={<AddProduct addPhone={addPhone} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
