import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, ShoppingCart } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { totalItems } = useCart();

  function handleSearchSubmit(e) {
    e.preventDefault();
    navigate(`/entrepreneurs?search=${encodeURIComponent(search)}`);
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/5">
      <div className="flex items-center gap-6 px-6 lg:px-10 py-3">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="w-9 h-9 rounded-full bg-cream-deep flex items-center justify-center">
            <span className="w-5 h-5 rounded-full bg-terracotta" />
          </span>
          <span>
            <span className="block font-display font-semibold text-lg leading-none text-forest">HunarHub</span>
            <span className="block text-[10px] tracking-wide text-black/50 leading-none mt-0.5">
              Skills. Services. Support Local.
            </span>
          </span>
        </Link>

        <form onSubmit={handleSearchSubmit} className="hidden md:flex flex-1 max-w-xl items-center border border-black/10 rounded-full overflow-hidden">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for skills, products or services..."
            className="flex-1 px-4 py-2 text-sm outline-none"
          />
          <button type="submit" className="w-10 h-10 flex items-center justify-center bg-forest text-white shrink-0">
            <Search size={16} />
          </button>
        </form>

        <Link to="/cart" className="relative text-black/70 hover:text-black shrink-0">
          <ShoppingCart size={20} />
          {totalItems > 0 && (
            <span className="absolute -top-1.5 -right-2 bg-terracotta text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>

        <div className="hidden lg:flex items-center gap-3 ml-auto shrink-0">
          {user ? (
            <>
              <Link to="/dashboard" className="text-sm text-black/70 font-medium hover:text-black">
                Dashboard
              </Link>
              <span className="text-sm text-black/70">
                Hi, {user.name} <span className="text-xs text-black/40">({user.role})</span>
              </span>
              <button onClick={logout} className="px-4 py-2 text-sm rounded-full border border-black/15 font-medium hover:bg-black/5 transition">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signup" className="px-4 py-2 text-sm rounded-full border border-forest text-forest font-medium hover:bg-cream transition">
                Become an Entrepreneur
              </Link>
              <Link to="/login" className="px-3 py-2 text-sm text-black/70 font-medium hover:text-black">Login</Link>
              <Link to="/signup" className="px-4 py-2 text-sm rounded-full bg-forest text-white font-medium hover:bg-forest-dark transition">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8 px-10 py-2.5 bg-forest text-white/90 text-sm">
        <button className="flex items-center gap-1.5 font-medium">
          <Menu size={15} /> Categories
        </button>
        <Link to="/" className="hover:text-white transition">Home</Link>
        <Link to="/entrepreneurs" className="hover:text-white transition">Explore Entrepreneurs</Link>
        <Link to="/entrepreneurs" className="hover:text-white transition">Services</Link>
        <Link to="/products" className="hover:text-white transition">Products</Link>
        <a href="#how-it-works" className="hover:text-white transition">How It Works</a>
        <Link to="/about" className="hover:text-white transition">About Us</Link>
        <Link to="/contact" className="hover:text-white transition">Contact Us</Link>
      </nav>
    </header>
  );
}