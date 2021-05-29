import React, { useContext } from "react";
import { auth } from "../firebase";
import { UserContext } from "../StateContext";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();
  console.log("user inside home : ", user.displayName);
  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        setUser({
          id: "",
          name: "",
          email: "",
          isLogin: false,
        });
        history.push("/");
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        // An error happened.
        console.log(" An error happened.", error);
      });
  };
  return (
    <div>
      <h2>Home</h2>
      <h3>Hi {user.displayName} </h3>
      <button onClick={signOut}>log out</button>
    </div>
  );
};

export default Home;
