"use client";

import { useState, useEffect, useContext } from "react";
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

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setFilteredDishes(
      menu.filter((dish) => dish.category === value || value === "")
    );
  };

  const handleTagChange = (e) => {
    const { value } = e.target;
    setFilteredDishes(
      menu.filter((dish) => dish.tags.includes(value) || value === "")
    );
  };

  return (
    <div>
      <h1>Catálogo de Pratos</h1>
      <div>
        <div>
          <h3>Filtros</h3>
          <div>
            <h4>Categorias</h4>
            {categories.map((category) => (
              <label key={category}>
                <input
                  type="checkbox"
                  value={category}
                  onChange={handleCategoryChange}
                />
                {category}
              </label>
            ))}
          </div>

          <div>
            <h4>Tags</h4>
            {tags.map((tag) => (
              <label key={tag}>
                <input type="checkbox" value={tag} onChange={handleTagChange} />
                {tag}
              </label>
            ))}
          </div>
        </div>

        <div>
          {filteredDishes.map((dish) => (
            <div key={dish.id}>
              <img src={dish.image} alt={dish.name} width={200} height={150} />
              <h4>{dish.name}</h4>
              <p>{dish.price}</p>
              <p>{dish.category}</p>
              <p>{dish.tags.join(", ")}</p>
              <button onClick={() => addToCart(dish)}>
                Adicionar ao Carrinho
              </button>
              <a href={`/product/${dish.id}`}>Ver detalhes</a>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Resumo do Carrinho</h2>
        <div>
          <h2>
            Total Price: $
            {cart.reduce((sum, dish) => sum + (dish.price || 0), 0).toFixed(2)}
          </h2>
        </div>
      </div>
    </div>
  );
}
