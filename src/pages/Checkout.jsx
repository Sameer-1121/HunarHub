import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrdersContext';
import { useAuth } from '../context/AuthContext';

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { items: cartItems, clearCart } = useCart();
  const { placeOrder } = useOrders();
  const { user } = useAuth();
  const [placed, setPlaced] = useState(false);

  const buyNowItem = location.state?.buyNow;
  const items = buyNowItem ? [buyNowItem] : cartItems;
  const totalPrice = items.reduce((sum, i) => sum + Number(i.price.replace(/[₹,]/g, '')) * i.qty, 0);

  if (!user) {
    return (
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <p className="text-black/50 mb-4">Please log in to checkout.</p>
        <Link to="/login" className="text-forest font-medium hover:underline">Log In</Link>
      </section>
    );
  }

  if (items.length === 0 && !placed) {
    return (
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <p className="text-black/50 mb-4">Nothing to checkout.</p>
        <Link to="/products" className="text-forest font-medium hover:underline">Browse Products →</Link>
      </section>
    );
  }

  function handlePlaceOrder() {
    placeOrder({ customerEmail: user.email, items, totalPrice });
    if (!buyNowItem) clearCart();
    setPlaced(true);
  }

  if (placed) {
    return (
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <div className="border border-forest/20 bg-cream rounded-xl p-6">
          <p className="font-semibold text-forest mb-1">Order placed! 🎉</p>
          <p className="text-sm text-black/50 mb-4">Track it anytime from your dashboard.</p>
          <Link to="/dashboard" className="text-forest font-medium hover:underline">Go to Dashboard →</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-2xl mx-auto px-6 lg:px-10 py-12">
      <h1 className="font-display font-semibold text-3xl mb-8">Checkout</h1>

      <div className="space-y-3 mb-8">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between border border-black/5 rounded-xl p-4">
            <div>
              <p className="font-medium text-sm">{item.name}</p>
              <p className="text-xs text-black/50">Qty: {item.qty} · {item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-black/10 pt-6 mb-8">
        <p className="font-display font-bold text-xl">Total: ₹{totalPrice.toLocaleString()}</p>
      </div>

      <button
        onClick={handlePlaceOrder}
        className="w-full py-3 rounded-full bg-forest text-white font-medium hover:bg-forest-dark transition"
      >
        Place Order
      </button>
    </section>
  );
}