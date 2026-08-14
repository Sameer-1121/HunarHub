import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [role, setRole] = useState('customer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    login({ email, role });
    navigate('/dashboard');
  }

  function handleDemoLogin(demoRole) {
    if (demoRole === 'entrepreneur') {
      login({ name: 'Ramesh Cobbler', email: 'ramesh@demo.com', role: 'entrepreneur', category: 'Cobbler' });
      navigate('/dashboard');
    } else if (demoRole === 'admin') {
      login({ name: 'Admin', email: 'admin@hunarhub.com', role: 'admin' });
      navigate('/admin');
    } else {
      login({ name: 'Priya Sharma', email: 'priya@demo.com', role: 'customer' });
      navigate('/dashboard');
    }
  }

  return (
    <section className="max-w-md mx-auto px-6 py-16">
      <h1 className="font-display font-semibold text-2xl mb-1 text-center">Welcome back</h1>
      <p className="text-black/50 text-sm mb-8 text-center">Log in to your HunarHub account.</p>

      <div className="border border-dashed border-terracotta/40 bg-cream rounded-xl p-4 mb-8">
        <p className="text-xs font-medium text-terracotta mb-3">Quick Demo — see any dashboard instantly</p>
        <div className="flex gap-2">
          <button
            onClick={() => handleDemoLogin('customer')}
            className="flex-1 py-2 rounded-full bg-white border border-terracotta/40 text-terracotta text-xs font-medium hover:bg-cream-deep transition"
          >
            Customer
          </button>
          <button
            onClick={() => handleDemoLogin('entrepreneur')}
            className="flex-1 py-2 rounded-full bg-white border border-terracotta/40 text-terracotta text-xs font-medium hover:bg-cream-deep transition"
          >
            Entrepreneur
          </button>
          <button
            onClick={() => handleDemoLogin('admin')}
            className="flex-1 py-2 rounded-full bg-white border border-terracotta/40 text-terracotta text-xs font-medium hover:bg-cream-deep transition"
          >
            Admin
          </button>
        </div>
      </div>

      <div className="flex rounded-full border border-black/10 p-1 mb-8">
        <button
          type="button"
          onClick={() => setRole('customer')}
          className={`flex-1 py-2 rounded-full text-sm font-medium transition ${role === 'customer' ? 'bg-forest text-white' : 'text-black/60'}`}
        >
          Customer
        </button>
        <button
          type="button"
          onClick={() => setRole('entrepreneur')}
          className={`flex-1 py-2 rounded-full text-sm font-medium transition ${role === 'entrepreneur' ? 'bg-forest text-white' : 'text-black/60'}`}
        >
          Entrepreneur
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
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

        <button type="submit" className="w-full py-3 rounded-full bg-forest text-white font-medium hover:bg-forest-dark transition">
          Log In as {role === 'customer' ? 'Customer' : 'Entrepreneur'}
        </button>
      </form>

      <p className="text-center text-sm text-black/50 mt-6">
        Don't have an account? <Link to="/signup" className="text-forest font-medium hover:underline">Sign up</Link>
      </p>
    </section>
  );
}