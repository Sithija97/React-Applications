import "./Home.css";
import React, { useContext, useEffect, useState } from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import db, { auth } from "../firebase";
import { UserContext } from "../StateContext";

function Home() {
  const [user, setUser] = useContext(UserContext);
  const [events, setEvents] = useState([]);

  const filterData = () => {
    let count = 0;
    console.log(events);
    events.map(event => {
      if (user.uid != null && event.data.uid === user.uid) {
        // calculating functions
        count += 1;
      }
    })
    console.log('count: ',count)
  };

  useEffect(() => {
    db.collection("events").onSnapshot((snapshot) => {
      console.log("db triggered");
      setEvents(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, [filterData()]);

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
