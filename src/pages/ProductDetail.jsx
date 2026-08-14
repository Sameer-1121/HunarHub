import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import ReviewSection from '../components/ReviewSection';

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === Number(id));
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p className="text-black/50 mb-4">Product not found.</p>
        <Link to="/products" className="text-forest font-medium hover:underline">← Back to Products</Link>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-10 py-12">
      <Link to="/products" className="text-sm text-forest font-medium hover:underline mb-6 inline-block">
        ← Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-10 mb-12">
        <img
          src={`https://picsum.photos/seed/${product.img}/600/600`}
          alt={product.name}
          className="w-full h-80 md:h-full object-cover rounded-2xl"
        />
        <div>
          <p className="text-xs font-medium text-terracotta mb-1">{product.category}</p>
          <h1 className="font-display font-semibold text-3xl mb-2">{product.name}</h1>
          <p className="text-sm text-black/50 mb-3">by {product.maker}</p>
          <p className="flex items-center gap-1 text-sm font-medium text-terracotta mb-5">
            <Star size={14} fill="currentColor" /> {product.rating} rating
          </p>
          <p className="text-black/70 text-sm leading-relaxed mb-6">{product.desc}</p>
          <p className="font-display font-bold text-2xl mb-6">{product.price}</p>
          <div className="flex gap-3 items-center">
            <button
              onClick={() => navigate('/checkout', { state: { buyNow: { ...product, qty: 1 } } })}
              className="px-6 py-3 rounded-full bg-forest text-white font-medium hover:bg-forest-dark transition"
            >
              Buy Now
            </button>
            <button
              onClick={() => { addToCart(product); setAdded(true); }}
              className="px-6 py-3 rounded-full border border-black/15 font-medium hover:bg-black/5 transition"
            >
              {added ? 'Added ✓' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>

      <ReviewSection targetType="product" targetId={product.id} baseRating={product.rating} />
    </section>
  );
}