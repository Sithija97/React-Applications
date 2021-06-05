import './Home.css'
import React, { useContext, useEffect } from "react";
import { auth } from "../firebase";
import { UserContext } from "../StateContext";
import { useHistory } from "react-router-dom";
import SectionOne from './sub-components/SectionOne';
import SectionTwo from './sub-components/SectionTwo';
import SectionThree from './sub-components/SectionThree';

function Home () {
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
        // Sign-out successful.
        history.push("/login");
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        // An error happened.
        console.log(" An error happened.", error);
      });
  };
  return (
    <div className='app'>
      {/* <h2>Home</h2> */}
      <SectionOne />
      <SectionTwo />
      <SectionThree/>
      {/* <img src={user === null ? " " : user.photoURL} alt="" />
      <h3>Hi {user === null ? " " : user.displayName} </h3>
      <button onClick={signOut}>log out</button> */}
    </div>
  );
};

export default Home;
