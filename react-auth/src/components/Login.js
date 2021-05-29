import React, { useState, useEffect } from 'react'
import '../App.css'
import { auth, providerGoogle, providerFacebook, providerGithub } from '../firebase'
import GoogleButton from "react-google-button";
import Home from './Home';

const Login = () => {
  const initiaStateValues = {
    islogIn: false,
    name: "",
  };

  const [state, setState] = useState(initiaStateValues);
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
        // display user
        //console.log("user", user);
        setState({
          islogIn : true,
          name: user.displayName
        })
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

  const signInWithFacebook = () => {
    auth
      .signInWithPopup(providerFacebook)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // The signed-in user info.
        var user = result.user;
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var accessToken = credential.accessToken;
        // display user
        //console.log("user", user);
        setState({
          islogIn: true,
          name: user.displayName,
        });
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log("errorMessage", errorMessage);
      });
  };

  const signInWithGithub = () => {
    auth
      .signInWithPopup(providerGithub)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // display user
        //console.log("user", user);
        setState({
          islogIn: true,
          name: user.displayName,
        });
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log("errorMessage", errorMessage);
      });
  };

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        console.log("user signed in");
        //console.log("user", user);

        //setting the state
        setState({
          islogIn: true,
          name : auth.currentUser.displayName
        })

        //get the current user
        // var user = firebase.auth().currentUser;
      } else {
        // No user is signed in.
        console.log(" No user is signed in ");
      }
    });
  }, [auth])
    return (
      <div className="App">
        {state.islogIn === false ? (
          <div>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            <button onClick={signInWithFacebook}>Sign in with Facebook</button>
            <button onClick={signInWithGithub}>Sign in with Github</button>
          </div>
        ) : (
            <Home name={ state.name }/>
        )}

        {/* <div>
          <GoogleButton onClick={signInWithGoogle} />
        </div>
        <div
          class="fb-login-button"
          data-width=""
          data-size="large"
          data-button-type="continue_with"
          data-layout="default"
          data-auto-logout-link="false"
          data-use-continue-as="false"
          onClick={signInWithFacebook}
        ></div> */}
      </div>
    );
}

export default Login
