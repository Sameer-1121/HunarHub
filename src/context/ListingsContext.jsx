import { createContext, useContext, useState, useEffect } from 'react';

const ListingsContext = createContext(null);

export function ListingsProvider({ children }) {
  const [listings, setListings] = useState(() => {
    const stored = localStorage.getItem('hunarhub_listings');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('hunarhub_listings', JSON.stringify(listings));
  }, [listings]);

  function addListing({ entrepreneurName, entrepreneurEmail, name, price, category }) {
    const newListing = {
      id: Date.now(),
      entrepreneurName,
      entrepreneurEmail,
      name,
      price,
      category,
      createdAt: new Date().toISOString(),
    };
    setListings((prev) => [newListing, ...prev]);
    return newListing;
  }

  function removeListing(id) {
    setListings((prev) => prev.filter((l) => l.id !== id));
  }

  return (
    <ListingsContext.Provider value={{ listings, addListing, removeListing }}>
      {children}
    </ListingsContext.Provider>
  );
}

export function useListings() {
  return useContext(ListingsContext);
}