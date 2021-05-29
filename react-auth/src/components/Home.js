import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { auth } from "../firebase";
import { useAuth } from "../StateProvder";

function Home() {
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    await auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        // An error happened.
        console.log(" An error happened.", error);
      });
    history.push("/");
  }

  useEffect(() => {
     if (!user || user === null) {
       history.push("/");
       return;
    }
    console.log('user: ', user.displayName)
  }, [user, history])
  return (
    <div>
      <h2>Home</h2>
      <h3>Hi</h3>
      <button onClick={handleLogout}>log out</button>
    </div>
  );
};

export default Home;
