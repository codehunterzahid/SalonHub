import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Helper to generate initials from full name
  const getInitials = (fullName) => {
    if (!fullName) return "";
    return fullName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  // On mount, check localStorage for user and token
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      const parsedUser = JSON.parse(storedUser);
      if (!parsedUser.initials && parsedUser.name) {
        parsedUser.initials = getInitials(parsedUser.name);
      }

      setUser(parsedUser);
      setToken(storedToken);
    }

    setLoading(false);
  }, []);

  // LOGIN function
  const login = (userData, authToken) => {
    const loggedInUser = {
      name: userData.fullName || userData.name,
      email: userData.email,
      role: userData.role,
      initials: getInitials(userData.fullName || userData.name),
    };

    localStorage.setItem("user", JSON.stringify(loggedInUser));
    localStorage.setItem("token", authToken);

    setUser(loggedInUser);
    setToken(authToken);

    // Redirect based on role
    if (userData.role === "customer") navigate("/user");
    else if (userData.role === "salonOwner") navigate("/salon");
    else if (userData.role === "admin") navigate("/admin");
  };

  // LOGOUT function
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    setUser(null);
    setToken(null);

    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!token,
        login,
        logout,
        loading,
      }}
    >
      {/* Only render children after loading is complete */}
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
