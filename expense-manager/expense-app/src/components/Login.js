import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { auth, providerGoogle } from "../firebase";
import { UserContext } from "../StateContext";

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
    <div>
      <button onClick={signInWithGoogle}>
        <p>
          <b>Sign in with Google</b>
        </p>
      </button>
    </div>
  );
}

export default Login;
