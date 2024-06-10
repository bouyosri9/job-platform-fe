// src/context/AuthContext.js

import React, { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";

// Create the context
const AuthContext = createContext();

// Create a custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Method to log in the user
  const login = (userData) => {
    // Perform authentication logic (e.g., validate credentials)
    // Set the user state if authentication is successful
    setUser(userData);
  };

  // Method to log out the user
  const logout = () => {
    // Perform logout logic (e.g., clear user session)
    // Clear the user state
    setUser(null);
  };

  // Check if user is authenticated on initial render
  useEffect(() => {
    // Logic to check user authentication status (e.g., from cookies/local storage)
    // For demonstration purposes, assume user is not authenticated initially
    const isAuthenticated = false;

    // Redirect to register page if user is not authenticated
    if (!isAuthenticated) {
      router.push("/register");
    }
  }, []);

  // Add other authentication-related methods as needed

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
