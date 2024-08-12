import React, { createContext, useEffect, useState } from "react";
import usePublic from "../hooks/axiosPublic";
import useSequer from "../hooks/axiosSequer";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const axiosPublic = usePublic();
  const axiosSequer=useSequer();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(user);

  const createUser = (name, email, phone) => {
    setUser(name);
    return 0;
  };
  // usering local storage for hold the user or unsubscribe
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        // console.log(parsedUser);
        setUser(parsedUser.name); // Adjust as per your user structure
        axiosSequer
          .post("/jwt", parsedUser)
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => console.error("JWT verification failed", error));
      } catch (error) {
        console.error("Failed to parse user from localStorage", error);
      }
    }
    setLoading(false);
  }, []);

  const authInfo = { user, setUser, createUser, loading, setLoading };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
