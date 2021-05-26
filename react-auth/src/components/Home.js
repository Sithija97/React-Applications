import React, { useEffect } from "react";
import { auth } from "../firebase";

function Home() {
  var user;
  useEffect(() => {
    user = auth.currentUser;
    console.log(user)
  }, [auth])
  const signOut = () => {
    auth
      .signOut()
        .then(() => {
        // Sign-out successful.
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
      <h3>Hi</h3>
      <button onClick={signOut}>log out</button>
    </div>
  );
};

export default Home;
