import React, { useEffect } from "react";
import { auth } from "../firebase";

function Home({ name }) {
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
      <h3>Hi { name }</h3>
      <button onClick={signOut}>log out</button>
    </div>
  );
};

export default Home;
