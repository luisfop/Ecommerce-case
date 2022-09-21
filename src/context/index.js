import React, { createContext, useState } from "react";
import { LoginRequest } from "./util";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  let authenticate = async (email, password) => {
    const response = await LoginRequest(email, password);
    const payload = { token: response.token, email };

    setUser(payload);
  };

  return (
    <AuthContext.Provider value={{ ...user, authenticate }}>
      {children}
    </AuthContext.Provider>
  );
};
