import React from 'react'
import { useState } from 'react'

function Counter_2() {

    const[count,setCount]=useState(0)

    function inc()
    {
      setCount(count+1)
    }
    function dec()
    {
       if(count==0)
       {
          setCount(0)
       }
       else{
        setCount(count-1)
       }
    }
    function rec()
    {
      setCount(0)
    }
  return (
    <div className='b'>

        <h1>Counter: {count}</h1>

        <button onClick={inc}>Increment</button>&nbsp;&nbsp;
        <button onClick={dec}>Decrement</button>&nbsp;&nbsp;
        <button onClick={rec}>Recate</button>&nbsp;&nbsp;

    </div>
  )
}

export default Counter_2