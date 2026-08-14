import { Users, Smile, Wrench, Package, Star } from 'lucide-react';

const STATS = [
  { label: 'Registered Entrepreneurs', value: '10,000+', Icon: Users },
  { label: 'Happy Customers', value: '50,000+', Icon: Smile },
  { label: 'Services Completed', value: '25,000+', Icon: Wrench },
  { label: 'Products Sold', value: '15,000+', Icon: Package },
  { label: 'Average Customer Rating', value: '4.8', Icon: Star },
];

export default function StatsBanner() {
  return (
    <section className="bg-forest">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 grid grid-cols-2 sm:grid-cols-5 gap-6 text-white">
        {STATS.map((s) => (
          <div key={s.label} className="flex items-center gap-3">
            <s.Icon size={22} className="text-cream/70 shrink-0" strokeWidth={1.5} />
            <div>
              <p className="font-display font-semibold text-lg leading-none">{s.value}</p>
              <p className="text-xs text-white/60 mt-1">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}