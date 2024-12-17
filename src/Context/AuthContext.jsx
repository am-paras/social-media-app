import React from 'react';
import { useEffect, useState } from "react";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || false
  );

  const login = () => {
    const user = {
      id: 1,
      name: "Paras Arora",
      profilePic:
        "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    };
    setCurrentUser(user);

    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setCurrentUser(false);
    localStorage.removeItem("user");
  }

  useEffect (() => {
    console.log(currentUser);
  },[currentUser])


  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
};
