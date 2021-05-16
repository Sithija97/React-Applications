import React from 'react'
import { auth, provider } from './firebase'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth
          .signInWithPopup(provider)
            .then((result) => {
            var credential = result.credential;
            var accessToken = credential.accessToken;
            console.log(result);
              dispatch({
              type: actionTypes.SET_USER,
              user: result.user,
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

            // ...
          });
    }
    return (
        <div>
            <h2>Login</h2>
            <button type='submit' onClick={signIn}>Sign In</button>
        </div>
    )
}

export default Login
