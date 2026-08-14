import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { ENTREPRENEURS } from '../data/entrepreneurs';

const CATEGORY_OPTIONS = ['All Categories', 'Cobbler', 'Potter (Kumhar)', 'Tailor', 'Artisan', 'Woodcraft', 'Home Decor'];
const LOCATION_OPTIONS = ['Any Location', ...new Set(ENTREPRENEURS.map((e) => e.location.split(',')[1]?.trim() || e.location))];

function EntrepreneurCard({ item }) {
  return (
    <div className="rounded-xl overflow-hidden border border-black/5 hover:shadow-md transition bg-white">
      <img src={`https://picsum.photos/seed/${item.img}/300/220`} alt={item.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <p className="font-semibold text-sm mb-0.5">{item.name}</p>
        <p className="text-xs text-black/50 mb-1">{item.category}</p>
        <p className="text-xs text-black/40 mb-3">{item.location}</p>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-xs font-medium text-terracotta">
            <Star size={12} fill="currentColor" /> {item.rating}
          </span>
          <Link to={`/entrepreneurs/${item.id}`} className="text-xs font-semibold text-forest hover:underline">View Profile →</Link>
        </div>
      </div>
    </div>
  );
}

export default function BrowseEntrepreneurs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All Categories';
  const initialSearch = searchParams.get('search') || '';

  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState(initialCategory);
  const [location, setLocation] = useState('Any Location');

  const filtered = useMemo(() => {
    return ENTREPRENEURS.filter((e) => {
      const matchesCategory = category === 'All Categories' || e.category === category;
      const matchesLocation = location === 'Any Location' || e.location.includes(location);
      const matchesSearch =
        search.trim() === '' ||
        e.name.toLowerCase().includes(search.toLowerCase()) ||
        e.category.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesLocation && matchesSearch;
    });
  }, [search, category, location]);

  function handleCategoryChange(e) {
    const value = e.target.value;
    setCategory(value);
    setSearchParams(value === 'All Categories' ? { search } : { category: value, search });
  }

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
      <div className="mb-8">
        <h1 className="font-display font-semibold text-3xl mb-2">Explore Local Entrepreneurs</h1>
        <p className="text-black/50 text-sm">Discover skilled cobblers, potters, tailors, and artisans near you.</p>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search by skill or name..."
          className="flex-1 min-w-[200px] px-4 py-2.5 text-sm border border-black/10 rounded-full outline-none"
        />
        <select
          value={category}
          onChange={handleCategoryChange}
          className="px-4 py-2.5 text-sm border border-black/10 rounded-full outline-none"
        >
          {CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
        </select>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-4 py-2.5 text-sm border border-black/10 rounded-full outline-none"
        >
          {LOCATION_OPTIONS.map((l) => <option key={l}>{l}</option>)}
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="text-black/40 text-sm text-center py-16">No entrepreneurs found matching your search.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((e) => <EntrepreneurCard key={e.id} item={e} />)}
        </div>
      )}
    </section>
  );
}