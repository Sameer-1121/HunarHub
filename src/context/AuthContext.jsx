import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('hunarhub_user');
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('hunarhub_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('hunarhub_user');
    }
  }, [user]);

  function signup({ name, email, role, category }) {
    const newUser = { name, email, role, category: category || null };
    setUser(newUser);
    return newUser;
  }

  function login({ email, role }) {
    // Mock login — in a real app this would verify credentials against a backend
    const existing = { name: email.split('@')[0], email, role };
    setUser(existing);
    return existing;
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}