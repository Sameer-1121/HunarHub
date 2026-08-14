import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRequests } from '../context/RequestsContext';
import { useListings } from '../context/ListingsContext';
import { Link, Navigate } from 'react-router-dom';

const MOCK_ENTREPRENEUR_STATS = [
  { label: 'Active Listings', value: 3 },
  { label: 'Completed Orders', value: 18 },
  { label: 'Total Earnings', value: '₹24,500' },
];

const MOCK_CUSTOMER_STATS = [
  { label: 'Orders Placed', value: 5 },
  { label: 'Completed', value: 4 },
];

const CATEGORY_OPTIONS = ['Cobbler', 'Potter (Kumhar)', 'Tailor', 'Artisan', 'Woodcraft', 'Jewelry', 'Home Decor', 'Small Vendor'];

function StatCard({ label, value }) {
  return (
    <div className="border border-black/5 rounded-xl p-5 text-center">
      <p className="font-display font-bold text-2xl mb-1">{value}</p>
      <p className="text-xs text-black/50">{label}</p>
    </div>
  );
}

function statusColor(status) {
  if (status === 'Pending') return 'bg-terracotta/10 text-terracotta';
  if (status === 'Accepted') return 'bg-forest/10 text-forest';
  return 'bg-red-100 text-red-700';
}

function AddListingForm({ user, onDone }) {
  const { addListing } = useListings();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState(user.category || CATEGORY_OPTIONS[0]);

  function handleSubmit(e) {
    e.preventDefault();
    addListing({ entrepreneurName: user.name, entrepreneurEmail: user.email, name, price, category });
    onDone();
  }

  return (
    <form onSubmit={handleSubmit} className="border border-black/10 rounded-xl p-5 mb-6 space-y-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-black/60 mb-1">Service / Product Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Custom Leather Belt"
            className="w-full px-4 py-2.5 text-sm border border-black/10 rounded-lg outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-black/60 mb-1">Price</label>
          <input
            type="text"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="e.g. From ₹250"
            className="w-full px-4 py-2.5 text-sm border border-black/10 rounded-lg outline-none"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-black/60 mb-1">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2.5 text-sm border border-black/10 rounded-lg outline-none"
        >
          {CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
        </select>
      </div>
      <div className="flex gap-3 pt-1">
        <button type="submit" className="px-5 py-2 rounded-full bg-forest text-white text-sm font-medium hover:bg-forest-dark transition">
          Save Listing
        </button>
        <button type="button" onClick={onDone} className="px-5 py-2 rounded-full border border-black/15 text-sm font-medium hover:bg-black/5 transition">
          Cancel
        </button>
      </div>
    </form>
  );
}

function EntrepreneurDashboard({ user }) {
  const { requests, updateRequestStatus } = useRequests();
  const { listings, removeListing } = useListings();
  const [showForm, setShowForm] = useState(false);

  const myRequests = requests.filter((r) => r.entrepreneurName === user.name);
  const myListings = listings.filter((l) => l.entrepreneurEmail === user.email);

  return (
    <>
      <div className="mb-8">
        <h1 className="font-display font-semibold text-3xl mb-1">Welcome back, {user.name}</h1>
        <p className="text-black/50 text-sm">{user.category} · Entrepreneur Dashboard</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-10">
        {MOCK_ENTREPRENEUR_STATS.map((s) => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display font-semibold text-xl">Your Listings {myListings.length > 0 && `(${myListings.length})`}</h2>
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 text-sm rounded-full bg-forest text-white font-medium hover:bg-forest-dark transition"
          >
            + Add New Listing
          </button>
        )}
      </div>

      {showForm && <AddListingForm user={user} onDone={() => setShowForm(false)} />}

      {myListings.length === 0 ? (
        <p className="text-sm text-black/40 py-8 text-center border border-dashed border-black/10 rounded-xl mb-10">
          No listings added yet. Click "Add New Listing" to create your first one.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-3 mb-10">
          {myListings.map((l) => (
            <div key={l.id} className="border border-black/5 rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-sm">{l.name}</p>
                <p className="text-xs text-black/50">{l.category} · {l.price}</p>
              </div>
              <button
                onClick={() => removeListing(l.id)}
                className="text-xs text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <h2 className="font-display font-semibold text-xl mb-4">Service Requests {myRequests.length > 0 && `(${myRequests.length})`}</h2>

      {myRequests.length === 0 ? (
        <p className="text-sm text-black/40 py-8 text-center border border-dashed border-black/10 rounded-xl">
          No requests yet. Customers who request your services will show up here.
        </p>
      ) : (
        <div className="space-y-3">
          {myRequests.map((r) => (
            <div key={r.id} className="flex items-center justify-between border border-black/5 rounded-xl p-4">
              <div>
                <p className="font-medium text-sm">{r.service}</p>
                <p className="text-xs text-black/50">from {r.customerName}</p>
              </div>
              {r.status === 'Pending' ? (
                <div className="flex gap-2">
                  <button
                    onClick={() => updateRequestStatus(r.id, 'Accepted')}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-forest text-white hover:bg-forest-dark transition"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => updateRequestStatus(r.id, 'Rejected')}
                    className="text-xs font-medium px-3 py-1.5 rounded-full border border-black/15 hover:bg-black/5 transition"
                  >
                    Reject
                  </button>
                </div>
              ) : (
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusColor(r.status)}`}>
                  {r.status}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function CustomerDashboard({ user }) {
  const { requests } = useRequests();
  const myRequests = requests.filter((r) => r.customerEmail === user.email);

  return (
    <>
      <div className="mb-8">
        <h1 className="font-display font-semibold text-3xl mb-1">Welcome back, {user.name}</h1>
        <p className="text-black/50 text-sm">Customer Dashboard</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-10">
        {MOCK_CUSTOMER_STATS.map((s) => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display font-semibold text-xl">Your Requests {myRequests.length > 0 && `(${myRequests.length})`}</h2>
        <Link to="/entrepreneurs" className="px-4 py-2 text-sm rounded-full bg-forest text-white font-medium hover:bg-forest-dark transition">
          Explore More
        </Link>
      </div>

      {myRequests.length === 0 ? (
        <p className="text-sm text-black/40 py-8 text-center border border-dashed border-black/10 rounded-xl">
          You haven't requested any services yet. Browse entrepreneurs to get started.
        </p>
      ) : (
        <div className="space-y-3">
          {myRequests.map((r) => (
            <div key={r.id} className="flex items-center justify-between border border-black/5 rounded-xl p-4">
              <div>
                <p className="font-medium text-sm">{r.service}</p>
                <p className="text-xs text-black/50">by {r.entrepreneurName}</p>
              </div>
              <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusColor(r.status)}`}>
                {r.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default function Dashboard() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-10 py-12">
      {user.role === 'entrepreneur' ? <EntrepreneurDashboard user={user} /> : <CustomerDashboard user={user} />}
    </section>
  );
}