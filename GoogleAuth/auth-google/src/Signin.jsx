import React, { useEffect, useState } from 'react';
import {auth,provider} from './Config';
import {signInWithPopup} from "firebase/auth";
import Home from './Home';


function Signin() {
     
    const[value,setValue]=useState("")
   
    const handleClick=()=>{

        signInWithPopup(auth,provider)
        .then((data)=>{
            setValue(data.user.email)
            console.log(data)

            localStorage.setItem("email",data.user.email)

        }).catch((error)=>{
          
            console.log(error)
        })

    }

    useEffect(()=>{
        let useemail=localStorage.getItem("email")

        if(useemail){
            setValue(useemail)
        }
    },[])
  return (
    <div>
        {
        value ? <Home/> : 
        <button onClick={handleClick}>Sign in with Google</button>

        }
    </div>
  )
}

export default Signin