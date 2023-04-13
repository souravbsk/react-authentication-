import React, { useState } from "react";
import {
    GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleGithubSignIn =() => {
    signInWithPopup(auth,gitHubProvider)
    .then(result =>  {
        const user = result.user;
        setUser(user);
    })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      {user ? (
        <button onClick={handleSignOut}>Sing Out</button>
      ) : (
        <>
        <button onClick={handleGoogleSignIn}>Google</button>
        <button onClick={handleGithubSignIn}>Github</button>
        </>
      )}
      <div>
        <p>display name: {user?.displayName}</p>
        <p>email: {user?.email}</p>
        <img src={user?.photoURL} alt="" />
      </div>
    </div>
  );
};

export default Login;
