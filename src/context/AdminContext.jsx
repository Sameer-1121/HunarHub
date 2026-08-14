import { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext(null);

export function AdminProvider({ children }) {
  const [approvals, setApprovals] = useState(() => {
    const stored = localStorage.getItem('hunarhub_approvals');
    return stored ? JSON.parse(stored) : {};
  });

  useEffect(() => {
    localStorage.setItem('hunarhub_approvals', JSON.stringify(approvals));
  }, [approvals]);

  function getStatus(entrepreneurName) {
    return approvals[entrepreneurName] || 'Pending';
  }

  function setStatus(entrepreneurName, status) {
    setApprovals((prev) => ({ ...prev, [entrepreneurName]: status }));
  }

  return (
    <AdminContext.Provider value={{ approvals, getStatus, setStatus }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  return useContext(AdminContext);
}