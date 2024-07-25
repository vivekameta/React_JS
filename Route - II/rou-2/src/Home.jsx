import React from 'react'
import {Link} from 'react-router-dom'
function Home({posts,delpost,editblog}){

    function dele(id)
    {
        delpost(id)
    }
   
    function edit()
    {
        
    }
  return (
    <div>
        <h1>WELCOME TO OUR APP</h1>
         
         {
         posts.map((el)=>(
           <>
           <h1>{el.title}</h1>
           <p>{el.content}</p>
           <button onClick={()=>dele(el.id)}>Delete</button>
           <Link to={`/edit/:${el.id}`}><button onClick={()=>edit(el.id)}>Edit Blog</button></Link>
           </>
          ))
         }
         <br /><br /><br />
        
        <Link to="/add">ADD POST</Link>
    </div>
  )
}

export default Home