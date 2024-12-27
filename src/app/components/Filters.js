// app/components/Filters.js
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const Filters = ({ categories, tags, setFilteredDishes }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((cat) => cat !== value)
        : [...prev, value]
    );
  };

  const handleTagChange = (e) => {
    const { value } = e.target;
    setSelectedTags((prev) =>
      prev.includes(value)
        ? prev.filter((tag) => tag !== value)
        : [...prev, value]
    );
  };

  return (
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
              checked={selectedCategories.includes(category)}
            />
            {category}
          </label>
        ))}
      </div>

      <div>
        <h4>Tags</h4>
        {tags.map((tag) => (
          <label key={tag}>
            <input
              type="checkbox"
              value={tag}
              onChange={handleTagChange}
              checked={selectedTags.includes(tag)}
            />
            {tag}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filters;
