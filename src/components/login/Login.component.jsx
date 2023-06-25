import React from "react";
import './Login.style.css';
import { auth, provider } from "../state/firestore";
import { signInWithPopup } from "firebase/auth";
import { useStateValue } from "../state/StateProvider";
import { FacebookAuthProvider } from "firebase/auth";

const Login = () => {
  const [{user},dispatch] = useStateValue();
  const signIn =()=>{
    signInWithPopup(auth,provider).then((result)=>{
      // const credential = result.user;
      const credentials = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credentials.accessToken;
      const photoURL = `${result.user.photoURL}?access_token=${accessToken}`;
      console.log(photoURL, user)
      dispatch({
        type:"SET_USER",
        user:{
          displayName:result.user.displayName,
          photoURL:photoURL,
        }
      })
  }).catch((error)=>alert(error.message));
  };

  return (
    <div className="login__wrapper">
      <div className="login">
        <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="fb" />
        <h2>Sign in with Facebook</h2>
        <button onClick={signIn} >Login with facebook</button>
      </div>
    </div>
  );
};

export default Login;
