import React from 'react'
import { useHistory } from "react-router-dom";

function Login() {
    const history = useHistory();
    const gotoHome = () => {
        history.push('/home')
    }
    return (
      <div>
        <br />
        <br />
        <br />
        <h3>Login</h3>
        <button onClick={gotoHome}>next</button>
      </div>
    );
}

export default Login
