import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../../FireBaseConfig.js';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);


  return (
    <AuthContext.Provider value={{ user: currentUser, setUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};