type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

type Props = {
  product: Product;
  onAdd: (p: Product) => void;
};

export default function ProductCard({ product, onAdd }: Props) {
  return (
    <div className="bg-white shadow p-4 rounded-md flex flex-col justify-between">
      <h2 className="font-bold">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-green-600 font-semibold">₹{product.price}</p>
      <button
        onClick={() => onAdd(product)}
        className="bg-green-500 text-white mt-2 px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}