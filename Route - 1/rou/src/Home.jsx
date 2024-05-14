import React from 'react'
import {Link} from 'react-router-dom'
function Home({posts}){
  return (
    <div>
        <h1>WELCOME TO OUR APP</h1>
         
         {
         posts.map((el)=>(
           <>
           <h1>{el.title}</h1>
           <p>{el.content}</p>
           </>
          ))
         }
        
        <Link to="/add">ADD POST</Link>
    </div>
  )
}

export default Home