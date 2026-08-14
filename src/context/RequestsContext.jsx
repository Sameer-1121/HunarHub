import { createContext, useContext, useState, useEffect } from 'react';

const RequestsContext = createContext(null);

export function RequestsProvider({ children }) {
  const [requests, setRequests] = useState(() => {
    const stored = localStorage.getItem('hunarhub_requests');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('hunarhub_requests', JSON.stringify(requests));
  }, [requests]);

  function addRequest({ customerName, customerEmail, entrepreneurId, entrepreneurName, service }) {
    const newRequest = {
      id: Date.now(),
      customerName,
      customerEmail,
      entrepreneurId,
      entrepreneurName,
      service,
      status: 'Pending',
      createdAt: new Date().toISOString(),
    };
    setRequests((prev) => [newRequest, ...prev]);
    return newRequest;
  }

  function updateRequestStatus(id, status) {
    setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
  }

  return (
    <RequestsContext.Provider value={{ requests, addRequest, updateRequestStatus }}>
      {children}
    </RequestsContext.Provider>
  );
}

export function useRequests() {
  return useContext(RequestsContext);
}