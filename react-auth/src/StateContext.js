import React, { createContext, useEffect, useState } from "react";
import { auth } from "./firebase";
const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
