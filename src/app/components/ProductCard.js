import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ dish, addToCart }) => {
  return (
    <div>
      <h4>{dish.name}</h4>
      <Image src={dish.image} alt={dish.name} width={200} height={150} />
      <p>{dish.price}</p>
      <p>{dish.category}</p>
      <p>{dish.tags.join(", ")}</p>
      <button onClick={() => addToCart(dish)}>Adicionar ao Carrinho</button>
      <Link href={`/product/${dish.id}`}>Ver detalhes</Link>
    </div>
  );
};

export default ProductCard;
