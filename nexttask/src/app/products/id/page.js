import { products } from '../../../data/products';
import AddToCartButton from '../../../components/AddToCartButton';

export default function ProductDetails({ params }) {
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-xl mb-4">${product.price.toFixed(2)}</p>
      <p className="text-gray-600 mb-6">{product.description}</p>
      <AddToCartButton product={product} />
    </div>
  );
}