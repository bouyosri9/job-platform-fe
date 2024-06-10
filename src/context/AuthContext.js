// AuthContext.js

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const router = useRouter();

  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
    setLoading(false); // Update loading state once token is set
  }, []);

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL, // Set your API base URL here
  });

  api.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const login = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/"); // Adjust the path as needed
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, api }}>
      <Navbar token={token} />
      {!loading && children} {/* Render children only when loading is false */}
    </AuthContext.Provider>
  );
};
