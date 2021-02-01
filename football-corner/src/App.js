import React, { useEffect } from "react";
import './App.css';
import Axios from "axios";
import { useState } from 'react';

function App() {
  useEffect(() => {
    getInfo()
  })

  const [leagues, setLeagues] = useState([])
  const getInfo = async ()=>{
    const response = await Axios.get(`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`);
    await console.log(response)
  }

  return (
    <div>
      <h2>Leagues</h2>
    </div>
  );
}

export default App;
