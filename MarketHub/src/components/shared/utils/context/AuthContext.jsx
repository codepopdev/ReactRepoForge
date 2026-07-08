import React, { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvidter = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (name) => {
    setUser(name);
  };
  const logout = (name) => {
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      login,
      logout,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvidter;

export const useAuth = () => useContext(AuthContext);
