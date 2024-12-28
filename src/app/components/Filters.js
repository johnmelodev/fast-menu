import { useState } from "react";
import styles from "../page.module.css";

const Filters = ({ categories, tags, setFilteredDishes }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  const applyFilters = () => {
    let filtered = [...menu];

    // Filtro de Categorias
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((dish) =>
        selectedCategories.includes(dish.category)
      );
    }

    // Filtro de Tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((dish) =>
        selectedTags.some((tag) => dish.tags.includes(tag))
      );
    }

    // Filtro de Preço
    if (sortOrder === "lowToHigh") {
      filtered = filtered.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
    } else if (sortOrder === "highToLow") {
      filtered = filtered.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
    }

    setFilteredDishes(filtered);
  };

  return (
    <div className={styles.filters}>
      <h3 id="filtro">Filtros</h3>

      <div>
        <button onClick={() => setSortOrder("lowToHigh")}>Menor Preço</button>
        <button onClick={() => setSortOrder("highToLow")}>Maior Preço</button>
      </div>

      <div className={styles.accordion}>
        <h4 id="categorias">Categorias</h4>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() =>
              setSelectedCategories((prev) =>
                prev.includes(category)
                  ? prev.filter((cat) => cat !== category)
                  : [...prev, category]
              )
            }
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.accordion}>
        <h4 id="tags">Tags</h4>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() =>
              setSelectedTags((prev) =>
                prev.includes(tag)
                  ? prev.filter((t) => t !== tag)
                  : [...prev, tag]
              )
            }
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;
