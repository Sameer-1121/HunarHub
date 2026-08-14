import { useNavigate } from 'react-router-dom';
import { Footprints, Amphora, Scissors, Flower2, Hammer, Gem, Lamp, Store } from 'lucide-react';

const CATEGORIES = [
  { name: 'Cobbler', Icon: Footprints },
  { name: 'Potter (Kumhar)', Icon: Amphora },
  { name: 'Tailor', Icon: Scissors },
  { name: 'Artisan', Icon: Flower2 },
  { name: 'Woodcraft', Icon: Hammer },
  { name: 'Jewelry', Icon: Gem },
  { name: 'Home Decor', Icon: Lamp },
  { name: 'Small Vendors', Icon: Store },
];

export default function Categories() {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
      <div className="text-center mb-10">
        <p className="text-xs tracking-wide text-terracotta font-medium mb-2">⟿ Explore by Categories ⟿</p>
        <h2 className="font-display font-semibold text-3xl">Explore by Categories</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.name}
            onClick={() => navigate(`/entrepreneurs?category=${encodeURIComponent(cat.name)}`)}
            className="flex flex-col items-center gap-3 bg-cream/60 hover:bg-cream rounded-xl py-6 px-3 transition"
          >
            <cat.Icon size={24} className="text-forest" strokeWidth={1.5} />
            <span className="text-sm font-medium text-center">{cat.name}</span>
          </button>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={() => navigate('/entrepreneurs')}
          className="px-6 py-2.5 rounded-full bg-forest text-white text-sm font-medium hover:bg-forest-dark transition"
        >
          View All Categories
        </button>
      </div>
    </section>
  );
}