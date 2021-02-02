import React, { useEffect, useState } from "react";
import './App.css';
import { Container, Typography } from '@material-ui/core';
import Axios from "axios";

//importing components
import Root from "./components/Body/Root";

function App() {
  return (
    <div className='App'>
      <Container maxWidth='100%'  style={{background:'#03a9f4', height:'100vh'}}>Sithija</Container>
      <Container maxWidth='100%'  style={{background:'white', height:'100vh'}}>Sithija</Container>
      <Container maxWidth='100%'  style={{height:'100vh'}}>Sithija</Container>
    </div>
  );
}

export default App;
