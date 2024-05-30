import React from 'react'
import { useState,useMemo } from 'react' 

function Example() {
    const[isdarkmode,setIsdarkmode]=useState('black')

    const theme=useMemo(()=>({
        background:isdarkmode === false ? 'black' :'white',
        color:isdarkmode === false ? 'white' : 'black'
      }),[isdarkmode])


  return (
    <div style={theme} value={isdarkmode}>
        <button onClick={()=>setIsdarkmode(!isdarkmode)}>change</button>
      <h1> Vivek </h1>
    </div>
  )
}

export default Example