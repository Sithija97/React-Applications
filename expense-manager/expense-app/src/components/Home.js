import "./Home.css";
import React, { useContext, useEffect, useState } from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

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
