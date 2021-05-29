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

  useEffect(() => {
    console.log("in context user: ", user);
    auth.onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        console.log("onAuthStateChanged: signed in");
        //console.log("user", user);

        //set current user as user
        setUser(auth.currentUser);
      } else {
        // No user is signed in.
        console.log("onAuthStateChanged: No user ");
      }
    });
  },[auth,user]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
