"use client";

import { useState, useContext, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import Sidebar from "./components/Sidebar";
import { CartContext } from "./context/CartContext";
import menu from "./data/menu.json";
import styles from "./page.module.css";
import NavBar from "./components/NavBar";

export default function Home() {
  const [filteredDishes, setFilteredDishes] = useState(menu);
  const { cart, setCart } = useContext(CartContext);

  const categories = ["com carne", "vegetariana", "vegana"];
  const tags = ["saudável", "fast food", "refeição leve"];

  const addToCart = (dish) => {
    setCart((prevCart) => [...prevCart, dish]);
  };

  useEffect(() => {
    setFilteredDishes(menu); // Resetar os filtros ao carregar a página
  }, []);

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Catálogo de Pratos</h1>
          <NavBar
            categories={categories}
            tags={tags}
            setFilteredDishes={setFilteredDishes}
          />
        </header>
        <div className={styles.content}>
          <div className={styles.dishes}>
            {filteredDishes.map((dish) => (
              <ProductCard key={dish.id} dish={dish} addToCart={addToCart} />
            ))}
          </div>
          <div className={styles.sidebar}>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
