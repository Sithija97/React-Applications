import './Home.css'
import React, { useContext, useEffect } from "react";
import { auth } from "../firebase";
import SectionOne from './sub-components/SectionOne';
import SectionTwo from './sub-components/SectionTwo';
import SectionThree from './sub-components/SectionThree';

function Home () {
  // const signOut = () => {
  //   auth
  //     .signOut()
  //     .then(() => {
  //       setUser(null);
  //       // Sign-out successful.
  //       history.push("/login");
  //       console.log("Sign-out successful.");
  //     })
  //     .catch((error) => {
  //       // An error happened.
  //       console.log(" An error happened.", error);
  //     });
  // };
  return (
    <div className="App">
      {/* <button>-</button> */}
      <div className="app">
        {/* <h2>Home</h2> */}
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    </div>
  );
};

export default Home;
