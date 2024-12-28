"use client";

import { useState } from "react";
import styles from "../page.module.css";
import menu from "../data/menu.json"; // Importando os dados do menu

const NavBar = ({ categories, tags, setFilteredDishes }) => {
  const [openDropdown, setOpenDropdown] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const handleDropdown = (section) => {
    setOpenDropdown(openDropdown === section ? "" : section);
  };

  const applyFilters = () => {
    let filtered = [...menu];

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((dish) =>
        selectedCategories.some((cat) =>
          dish.category.toLowerCase().includes(cat.toLowerCase())
        )
      );
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter((dish) =>
        selectedTags.some((tag) => dish.tags.includes(tag))
      );
    }

    if (ratingFilter) {
      if (ratingFilter === "highToLow") {
        filtered = filtered.sort((a, b) => b.rating - a.rating);
      } else if (ratingFilter === "lowToHigh") {
        filtered = filtered.sort((a, b) => a.rating - b.rating);
      }
    }

    if (sortOrder === "lowToHigh") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highToLow") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredDishes(filtered);
  };

  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <button onClick={() => handleDropdown("preco")}>Preço</button>
          {openDropdown === "preco" && (
            <ul className={styles.dropdown}>
              <li>
                <button
                  onClick={() => {
                    setSortOrder("lowToHigh");
                    applyFilters();
                  }}
                >
                  Menor Preço
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setSortOrder("highToLow");
                    applyFilters();
                  }}
                >
                  Maior Preço
                </button>
              </li>
            </ul>
          )}
        </li>

        {/* Categorias */}
        <li>
          <button onClick={() => handleDropdown("categorias")}>
            Categorias
          </button>
          {openDropdown === "categorias" && (
            <ul className={styles.dropdown}>
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => {
                      setSelectedCategories([category]);
                      setSelectedTags([]);
                      setSortOrder("");
                      setRatingFilter("");
                      applyFilters();
                    }}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li>
          <button onClick={() => handleDropdown("tags")}>Tags</button>
          {openDropdown === "tags" && (
            <ul className={styles.dropdown}>
              {tags.map((tag) => (
                <li key={tag}>
                  <button
                    onClick={() => {
                      setSelectedTags([tag]);
                      setSelectedCategories([]);
                      setSortOrder("");
                      setRatingFilter("");
                      applyFilters();
                    }}
                  >
                    {tag}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li>
          <button onClick={() => handleDropdown("avaliacao")}>Avaliação</button>
          {openDropdown === "avaliacao" && (
            <ul className={styles.dropdown}>
              <li>
                <button
                  onClick={() => {
                    setRatingFilter("highToLow");
                    applyFilters();
                  }}
                >
                  Mais bem avaliado
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setRatingFilter("lowToHigh");
                    applyFilters();
                  }}
                >
                  Menos bem avaliado
                </button>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
