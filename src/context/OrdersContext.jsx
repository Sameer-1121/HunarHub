import { createContext, useContext, useState, useEffect } from 'react';

const OrdersContext = createContext(null);

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState(() => {
    const stored = localStorage.getItem('hunarhub_orders');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('hunarhub_orders', JSON.stringify(orders));
  }, [orders]);

  function placeOrder({ customerEmail, items, totalPrice }) {
    const newOrder = {
      id: Date.now(),
      customerEmail,
      items,
      totalPrice,
      status: 'Placed',
      createdAt: new Date().toISOString(),
    };
    setOrders((prev) => [newOrder, ...prev]);
    return newOrder;
  }

  return (
    <OrdersContext.Provider value={{ orders, placeOrder }}>
      {children}
    </OrdersContext.Provider>
  );
}

export function useOrders() {
  return useContext(OrdersContext);
}