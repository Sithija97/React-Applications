import React, { createContext, useEffect, useState } from "react";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";
const UserContext = createContext();

const UserProvider = (props) => {
  const initialStateValues = {
    id: "",
    name: "",
    email: "",
    isLogin: false,
  };
  const [user, setUser] = useState(initialStateValues);
  const history = useHistory();

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
