
import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import './Home.css';


function Home({ onSignOut }) {
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
        localStorage.removeItem("email");
      
        onSignOut();
        
       

      })
      .catch((error) => {
        console.error(error);
      });

  };

  

  return (
    <div className='body'>
    <div className="home-container">
      <h1>Welcome Back!</h1>
      <p>You are signed in.</p>
      <button onClick={handleSignOut} className="sign-out-button">Sign out</button>
    </div>
    </div>
  );
}

export default Home;
