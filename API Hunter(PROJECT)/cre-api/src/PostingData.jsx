import React, { useState } from 'react'
import axios from 'axios';



function PostingData() {
   
    const [post,Setpost]=useState({
        title:'',
        body :''
    }) 

    const handlechange=(e)=>{
      Setpost({...post , [e.target.name] : e.target.value})
    }

    const handlesubmit=(e)=>{

        e.preventDefault()
        
        axios.post(`http://localhost:8000/data`,post)

        .then((res)=>{
        console.log(res)
        }).catch((err)=>{
        console.log(err)
        })
   

        
    }

  return (

    <div>
        <form action="" onSubmit={handlesubmit}>
            Title : <input type="text" name='title' onChange={handlechange} value={post.title}/> &nbsp;
            Post  : <input type="text" name='body' onChange={handlechange} value={post.body}/> &nbsp;
            <button>Submit</button>
        </form>
    </div>
  )
}

export default PostingData