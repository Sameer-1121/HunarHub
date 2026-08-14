import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const CATEGORY_OPTIONS = ['Cobbler', 'Potter (Kumhar)', 'Tailor', 'Artisan', 'Woodcraft', 'Jewelry', 'Home Decor', 'Small Vendor'];

export default function Signup() {
  const [role, setRole] = useState('customer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [category, setCategory] = useState(CATEGORY_OPTIONS[0]);
  const { signup } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    signup({ name, email, role, category: role === 'entrepreneur' ? category : null });
    navigate('/dashboard');
  }

  return (
    <section className="max-w-md mx-auto px-6 py-16">
      <h1 className="font-display font-semibold text-2xl mb-1 text-center">Create your account</h1>
      <p className="text-black/50 text-sm mb-8 text-center">Join HunarHub as a customer or an entrepreneur.</p>

      <div className="flex rounded-full border border-black/10 p-1 mb-8">
        <button
          type="button"
          onClick={() => setRole('customer')}
          className={`flex-1 py-2 rounded-full text-sm font-medium transition ${role === 'customer' ? 'bg-forest text-white' : 'text-black/60'}`}
        >
          I'm a Customer
        </button>
        <button
          type="button"
          onClick={() => setRole('entrepreneur')}
          className={`flex-1 py-2 rounded-full text-sm font-medium transition ${role === 'entrepreneur' ? 'bg-forest text-white' : 'text-black/60'}`}
        >
          I'm an Entrepreneur
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-black/60 mb-1">Full Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2.5 text-sm border border-black/10 rounded-lg outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-black/60 mb-1">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 text-sm border border-black/10 rounded-lg outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-black/60 mb-1">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2.5 text-sm border border-black/10 rounded-lg outline-none"
          />
        </div>

        {role === 'entrepreneur' && (
          <div>
            <label className="block text-xs font-medium text-black/60 mb-1">Your Skill / Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2.5 text-sm border border-black/10 rounded-lg outline-none"
            >
              {CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
        )}

        <button type="submit" className="w-full py-3 rounded-full bg-forest text-white font-medium hover:bg-forest-dark transition">
          Sign Up as {role === 'customer' ? 'Customer' : 'Entrepreneur'}
        </button>
      </form>

      <p className="text-center text-sm text-black/50 mt-6">
        Already have an account? <Link to="/login" className="text-forest font-medium hover:underline">Log in</Link>
      </p>
    </section>
  );
}