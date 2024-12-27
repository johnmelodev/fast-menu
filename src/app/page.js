"use client";

// app/pages/index.js
import { useState, useEffect, useContext } from "react";
import Filters from "./components/Filters";
import ProductCard from "./components/ProductCard";
import Sidebar from "./components/Sidebar";
import { CartContext } from "./context/CartContext";
import menu from "./data/menu.json";

export default function Home() {
  const [filteredDishes, setFilteredDishes] = useState(menu);
  const { cart, setCart } = useContext(CartContext);

  const categories = ["com carne", "vegetariano", "vegano"];
  const tags = ["saudável", "fast food", "refeição leve"];

  const addToCart = (dish) => {
    setCart((prevCart) => [...prevCart, dish]);
  };

  return (
    <div>
      <h1>Catálogo de Pratos</h1>
      <div>
        <Filters
          categories={categories}
          tags={tags}
          setFilteredDishes={setFilteredDishes}
        />
        <div>
          {filteredDishes.map((dish) => (
            <ProductCard key={dish.id} dish={dish} addToCart={addToCart} />
          ))}
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
