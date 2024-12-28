// app/product/[id].js

import { useRouter } from "next/router";
import menu from "../data/menu.json";

const ProductDetail = () => {
  const { query } = useRouter();
  const { id } = query;

  const product = menu.find((dish) => dish.id === parseInt(id));

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} width={200} height={150} />
      <p>{product.description}</p>
      <p>Preço: R${product.price}</p>
      <p>Categoria: {product.category}</p>
      <p>Avaliação: {product.rating}⭐</p>
    </div>
  );
};

export default ProductDetail;
