
import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { MdOutlineDeleteOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
function Fetchingdata() {
    const [data,setData]=useState([])

    useEffect(()=>{

         const fetch=async()=>{
           

            try{
              let res= await axios.get('http://localhost:8000/data')
              setData(res.data)
              console.log(res)

             
            }
            catch(err){
               console.log(err)
            }

         }
         fetch()

    },[])


    const handledelete=async(id)=>{
      try{

       await axios.delete(`http://localhost:8000/data/${id}`)

       setData(data.filter(el => el.id !== id))

  

      }catch(err){
        console.log(err)
      }

    }
  return (
    <div className='main'>
        <h3 style={{paddingTop:"20px"}}>*** Show Data ***</h3>
        <br />
       <table className="table">
        
  <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
       data.map((el)=>(
        <tr key={el.id}>
        <th scope="row">{el.id}</th>
        <td>{el.title}</td>
        <td>{el.body}</td>
        <td><RiDeleteBin6Line onClick={()=>handledelete(el.id)}/></td>
        
      </tr>
       ))
    }
   
   
  </tbody>
</table>
        </div>
  )
}

export default Fetchingdata