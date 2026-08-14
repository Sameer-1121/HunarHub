import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items, removeFromCart, updateQty, totalItems, totalPrice } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p className="text-black/50 mb-4">Your cart is empty.</p>
        <Link to="/products" className="text-forest font-medium hover:underline">Browse Products →</Link>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-6 lg:px-10 py-12">
      <h1 className="font-display font-semibold text-3xl mb-8">Your Cart ({totalItems})</h1>

      <div className="space-y-4 mb-8">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 border border-black/5 rounded-xl p-4">
            <img src={`https://picsum.photos/seed/${item.img}/100/100`} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
            <div className="flex-1">
              <p className="font-medium text-sm">{item.name}</p>
              <p className="text-xs text-black/50">by {item.maker}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQty(item.id, item.qty - 1)}
                className="w-7 h-7 rounded-full border border-black/15 text-sm hover:bg-black/5"
              >−</button>
              <span className="text-sm w-6 text-center">{item.qty}</span>
              <button
                onClick={() => updateQty(item.id, item.qty + 1)}
                className="w-7 h-7 rounded-full border border-black/15 text-sm hover:bg-black/5"
              >+</button>
            </div>
            <p className="text-sm font-semibold w-20 text-right">{item.price}</p>
            <button onClick={() => removeFromCart(item.id)} className="text-xs text-red-500 hover:underline">Remove</button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-black/10 pt-6">
        <p className="font-display font-bold text-xl">Total: ₹{totalPrice.toLocaleString()}</p>
        <button
          onClick={() => navigate('/checkout')}
          className="px-6 py-3 rounded-full bg-forest text-white font-medium hover:bg-forest-dark transition"
        >
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
}