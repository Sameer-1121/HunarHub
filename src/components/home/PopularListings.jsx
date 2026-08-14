import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const SERVICES = [
  { id: 1, name: 'Shoe Repair', provider: 'Ramesh Cobbler', location: 'Jaipur, Rajasthan', rating: 4.8, price: 'From ₹100', img: 'shoe-repair' },
  { id: 2, name: 'Custom Tailoring', provider: 'Arjun Tailors', location: 'Ahmedabad, Gujarat', rating: 4.7, price: 'From ₹299', img: 'tailoring' },
  { id: 3, name: 'Pottery Making', provider: 'Savitri Kumhar', location: 'Udaipur, Rajasthan', rating: 4.9, price: 'From ₹199', img: 'pottery' },
];

const PRODUCTS = [
  { id: 1, name: 'Terracotta Vase', maker: 'Meena Artisans', price: '₹799', rating: 4.8, img: 'vase' },
  { id: 2, name: 'Handmade Tote Bag', maker: 'Crafty Hands', price: '₹1,299', rating: 4.7, img: 'tote' },
  { id: 3, name: 'Wooden Wall Art', maker: 'Rustic Crafts', price: '₹899', rating: 4.9, img: 'wallart' },
];

function ServiceCard({ item }) {
  return (
    <div className="rounded-xl overflow-hidden border border-black/5 hover:shadow-md transition bg-white">
      <img src={`https://picsum.photos/seed/${item.img}/300/220`} alt={item.name} className="w-full h-36 object-cover" />
      <div className="p-3">
        <p className="font-semibold text-sm mb-0.5">{item.name}</p>
        <p className="text-xs text-black/50">by {item.provider}</p>
        <p className="text-xs text-black/40 mb-2">{item.location}</p>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-xs font-medium text-terracotta">
            <Star size={12} fill="currentColor" /> {item.rating}
          </span>
          <span className="text-xs text-black/60">{item.price}</span>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ item }) {
  return (
    <div className="rounded-xl overflow-hidden border border-black/5 hover:shadow-md transition bg-white">
      <img src={`https://picsum.photos/seed/${item.img}/300/220`} alt={item.name} className="w-full h-36 object-cover" />
      <div className="p-3">
        <p className="font-semibold text-sm mb-0.5">{item.name}</p>
        <p className="text-xs text-black/50 mb-2">by {item.maker}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold">{item.price}</span>
          <span className="flex items-center gap-1 text-xs font-medium text-terracotta">
            <Star size={12} fill="currentColor" /> {item.rating}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function PopularListings() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid lg:grid-cols-2 gap-10">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-semibold text-xl">Popular Services</h3>
          <Link to="/entrepreneurs" className="text-xs font-medium text-forest">View All →</Link>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {SERVICES.map((s) => <ServiceCard key={s.id} item={s} />)}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-semibold text-xl">Handmade Products</h3>
          <Link to="/products" className="text-xs font-medium text-forest">View All →</Link>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {PRODUCTS.map((p) => <ProductCard key={p.id} item={p} />)}
        </div>
      </div>
    </section>
  );
}