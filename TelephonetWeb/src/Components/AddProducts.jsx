import { useState } from "react";
import { useNavigate } from "react-router";

function AddProduct({ addPhone }) {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [ram, setRam] = useState("");
  const [storage, setStorage] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const newPhone = {
      id: Date.now(),
      name: name,
      brand: brand,
      price: Number(price),
      rating: Number(rating),
      ram: Number(ram),
      storage: Number(storage),
    };

    addPhone(newPhone);
 navigate("/products");
  }

  return (
    <section>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
        />
        <input
          type="number"
          min="0"
          placeholder="Price (D)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="number"
        min="0"
        max="5"
          placeholder="Rating (0-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
        <input
          type="number"
          min="0"
          placeholder="RAM (G)"
          value={ram}
          onChange={(e) => setRam(e.target.value)}
          required
        />
        <input
          type="number"
          min="0"
          placeholder="Storage (G)"
          value={storage}
          onChange={(e) => setStorage(e.target.value)}
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </section>
  );
}

export default AddProduct;