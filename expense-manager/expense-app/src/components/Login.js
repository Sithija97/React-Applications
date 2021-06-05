import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { auth, providerGoogle } from "../firebase";
import { UserContext } from "../StateContext";
import './Login.css'

function Login() {
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();
  
  const signInWithGoogle = () => {
    auth
      .signInWithPopup(providerGoogle)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log('user: ',user);
        // display user
          setUser(user);
          history.push("/home");
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
      });
  };
  return (
    <div className="login_container">
      <img
        className="login_img"
        src="https://image.freepik.com/free-vector/family-budget-planning-abstract-concept-vector-illustration-best-economic-decisions-personal-budget-strategy-family-income-expenses-management-financial-household-plan-abstract-metaphor_335657-4162.jpg"
        alt=""
      />
      <div className="login">
        <div className="login__divider"></div>
        <div className="login__loginwith">
          <span>login with facebook</span>
          <img
            src="https://image.flaticon.com/icons/png/512/145/145802.png"
            alt="facebook_icon"
          />
        </div>
        <div className="login__loginwith" onClick={signInWithGoogle}>
          <span>login with google</span>
          <img
            src="https://image.flaticon.com/icons/png/512/281/281764.png"
            alt="google_icon"
          />
        </div>
        <div className="login__loginwith">
          <span>login with github</span>
          <img
            src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-512.png"
            alt="github_icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
