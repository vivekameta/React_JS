import React from 'react'
import { useState } from 'react'

function Event() {

    const[islogin,setlogin]=useState(false)

    function handleout()
    {
        setlogin(false)
    }
    
    function handlein()
    {
        setlogin(true)
    }

  return (
    <div className='lo'>{

 islogin ?(
 <>
    <h1>Welcome to my Website.....</h1>
   <button onClick={handleout}>Log out</button>
   
    </>
    ) : 

    (
        <>
       <h1>Please , Login...!</h1>
       <button onClick={handlein}>Log In </button>
        </>
    )






        
        
        }
        </div>
  )
}

export default Event