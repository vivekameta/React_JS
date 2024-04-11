import React from 'react'
import { useState, useEffect } from 'react';

export const Api = () => {

    const[data,setdata]=useState(null)

 

    useEffect(()=>{

        const FecthApi=async()=>{

            let res=await fetch('https://fake-coffee-api.vercel.app/api')
            let jsonData=await res.json()
    
            console.log(jsonData)
    
            setdata(jsonData)
        }
        FecthApi()

    },[])


  return (
    <div className='dd'>
        {

        data && data.map((el)=>(

            <div className='a1'>

                <img src={el.image_url} alt="" />
                <br />
                <h2 style={{color:'gray'}}>{el.category}</h2>
                <h3>{el.name}</h3>
               
                <h4 style={{color:'red'}}>{el.price}</h4>


                </div>
            
        ))

        }

    </div>
  )
}


