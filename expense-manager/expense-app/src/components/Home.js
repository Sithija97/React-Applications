import "./Home.css";
import React from "react";
import SectionOne from "./sub-components/SectionOne";
import SectionTwo from "./sub-components/SectionTwo";
import SectionThree from "./sub-components/SectionThree";

function Home() {
  return (
    <div className="home">
      <div className="app">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    </div>
  );
}

export default Home;
