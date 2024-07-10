import React, { useCallback, useState} from 'react'
import { FaPlus } from "react-icons/fa";
import { GrSubtract } from "react-icons/gr";


import Child from './Child';

function Parent() {
    const[count,setCount]=useState(0)
    const[countTwo,setCountTwo]=useState(0)


    const handleClick=()=>{
        setCount(count+1)
    }
    const handleClick_2=()=>{
        setCount(count-1)
    }
   
    const handleInc=useCallback(()=>{
        setCountTwo(countTwo+1)
    },[countTwo])

    const handleInc_2=useCallback(()=>{
        setCountTwo(countTwo-1)
    },[countTwo])
  return (
    <div>
        <h1>** Counter **</h1>

        <h2>Count : {count} </h2>

       
        <button onClick={handleClick}><FaPlus style={{paddingTop:"5px"}}/></button> &nbsp;
        <button onClick={handleClick_2}><GrSubtract style={{paddingTop:"5px"}} /></button>
        <Child countTwo={countTwo} handleInc={handleInc} handleInc_2={handleInc_2}/>
    </div>
  )
}

export default Parent