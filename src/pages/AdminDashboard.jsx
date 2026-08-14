import { useAuth } from '../context/AuthContext';
import { useAdmin } from '../context/AdminContext';
import { useRequests } from '../context/RequestsContext';
import { useOrders } from '../context/OrdersContext';
import { useReviews } from '../context/ReviewsContext';
import { ENTREPRENEURS } from '../data/entrepreneurs';
import { Navigate } from 'react-router-dom';

function StatCard({ label, value }) {
  return (
    <div className="border border-black/5 rounded-xl p-5 text-center">
      <p className="font-display font-bold text-2xl mb-1">{value}</p>
      <p className="text-xs text-black/50">{label}</p>
    </div>
  );
}

export default function AdminDashboard() {
  const { user } = useAuth();
  const { getStatus, setStatus } = useAdmin();
  const { requests } = useRequests();
  const { orders } = useOrders();
  const { reviews } = useReviews();

  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  const pendingCount = ENTREPRENEURS.filter((e) => getStatus(e.name) === 'Pending').length;
  const totalOrderValue = orders.reduce((sum, o) => sum + o.totalPrice, 0);

  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-10 py-12">
      <div className="mb-8">
        <h1 className="font-display font-semibold text-3xl mb-1">Admin Dashboard</h1>
        <p className="text-black/50 text-sm">Platform overview and management.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-12">
        <StatCard label="Entrepreneurs" value={ENTREPRENEURS.length} />
        <StatCard label="Pending Approval" value={pendingCount} />
        <StatCard label="Service Requests" value={requests.length} />
        <StatCard label="Product Orders" value={orders.length} />
        <StatCard label="Reviews Submitted" value={reviews.length} />
      </div>

      <div className="mb-12">
        <h2 className="font-display font-semibold text-xl mb-4">Entrepreneur Approvals</h2>
        <div className="space-y-3">
          {ENTREPRENEURS.map((e) => {
            const status = getStatus(e.name);
            return (
              <div key={e.id} className="flex items-center justify-between border border-black/5 rounded-xl p-4">
                <div>
                  <p className="font-medium text-sm">{e.name}</p>
                  <p className="text-xs text-black/50">{e.category} · {e.location}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                    status === 'Approved' ? 'bg-forest/10 text-forest' :
                    status === 'Rejected' ? 'bg-red-100 text-red-700' :
                    'bg-terracotta/10 text-terracotta'
                  }`}>
                    {status}
                  </span>
                  {status === 'Pending' && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => setStatus(e.name, 'Approved')}
                        className="text-xs font-medium px-3 py-1.5 rounded-full bg-forest text-white hover:bg-forest-dark transition"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => setStatus(e.name, 'Rejected')}
                        className="text-xs font-medium px-3 py-1.5 rounded-full border border-black/15 hover:bg-black/5 transition"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="font-display font-semibold text-xl mb-4">Recent Service Requests</h2>
        {requests.length === 0 ? (
          <p className="text-sm text-black/40">No service requests yet.</p>
        ) : (
          <div className="space-y-3">
            {requests.slice(0, 5).map((r) => (
              <div key={r.id} className="flex items-center justify-between border border-black/5 rounded-xl p-4">
                <div>
                  <p className="font-medium text-sm">{r.service}</p>
                  <p className="text-xs text-black/50">{r.customerName} → {r.entrepreneurName}</p>
                </div>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-black/5">{r.status}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <h2 className="font-display font-semibold text-xl mb-4">Platform Revenue</h2>
        <div className="border border-black/5 rounded-xl p-6">
          <p className="font-display font-bold text-2xl mb-1">₹{totalOrderValue.toLocaleString()}</p>
          <p className="text-xs text-black/50">Total value across {orders.length} product orders</p>
        </div>
      </div>
    </section>
  );
}