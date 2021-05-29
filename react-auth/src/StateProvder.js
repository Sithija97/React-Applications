import React, { createContext, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom"

import { auth } from "./firebase";

export const StateContext = createContext();

export function useAuth() {
  return useContext(StateContext);
}

export const StateProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      history.push("/home");
    });
  }, [user, history]);

  const value = { user };
  return (
    <StateContext.Provider value={value}>
      {!loading && children}
    </StateContext.Provider>
  );
};


