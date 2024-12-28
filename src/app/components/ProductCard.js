// components/ProductCard.js

import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ dish, addToCart }) => {
  return (
    <div className="product-card">
      <h4>{dish.name}</h4>
      <Image src={dish.image} alt={dish.name} width={200} height={150} />
      <p>R${dish.price}</p>
      <p>{dish.category}</p>
      <p>{dish.tags.join(", ")}</p>
      <p>⭐ {dish.rating}</p>
      <button onClick={() => addToCart(dish)}>Adicionar ao Carrinho</button>
      <Link href={`/product/${dish.id}`} passHref>
        Ver detalhes
      </Link>
    </div>
  );
};

export default ProductCard;
