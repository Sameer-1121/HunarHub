import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';

const PRICE_RANGES = [
  { label: 'Any Price', min: 0, max: Infinity },
  { label: 'Under ₹500', min: 0, max: 500 },
  { label: '₹500 – ₹1,000', min: 500, max: 1000 },
  { label: '₹1,000 – ₹1,500', min: 1000, max: 1500 },
  { label: 'Above ₹1,500', min: 1500, max: Infinity },
];

function priceValue(priceStr) {
  return Number(priceStr.replace(/[₹,]/g, ''));
}

export default function ProductMarketplace() {
  const { addToCart } = useCart();
  const [priceRange, setPriceRange] = useState(PRICE_RANGES[0].label);

  const filtered = useMemo(() => {
    const range = PRICE_RANGES.find((r) => r.label === priceRange);
    return PRODUCTS.filter((p) => {
      const val = priceValue(p.price);
      return val >= range.min && val <= range.max;
    });
  }, [priceRange]);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
      <div className="mb-8">
        <h1 className="font-display font-semibold text-3xl mb-2">Handmade Products</h1>
        <p className="text-black/50 text-sm">Shop authentic handmade products from local artisans.</p>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="px-4 py-2.5 text-sm border border-black/10 rounded-full outline-none"
        >
          {PRICE_RANGES.map((r) => <option key={r.label}>{r.label}</option>)}
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="text-black/40 text-sm text-center py-16">No products found in this price range.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((p) => (
            <div key={p.id} className="rounded-xl overflow-hidden border border-black/5 hover:shadow-md transition bg-white">
              <Link to={`/products/${p.id}`}>
                <img src={`https://picsum.photos/seed/${p.img}/300/220`} alt={p.name} className="w-full h-36 object-cover" />
              </Link>
              <div className="p-3">
                <Link to={`/products/${p.id}`}>
                  <p className="font-semibold text-sm mb-0.5">{p.name}</p>
                  <p className="text-xs text-black/50 mb-2">by {p.maker}</p>
                </Link>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold">{p.price}</span>
                  <span className="flex items-center gap-1 text-xs font-medium text-terracotta">
                    <Star size={12} fill="currentColor" /> {p.rating}
                  </span>
                </div>
                <button
                  onClick={() => addToCart(p)}
                  className="w-full py-1.5 rounded-full border border-forest text-forest text-xs font-medium hover:bg-cream transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}