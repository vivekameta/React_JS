import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

function ThemeComponent() {

    const{theme}=useContext(ThemeContext)

  return (
    <div className='main' style={{backgroundColor : theme==="light" ? "white" : "black"}}>
       <h1 style={{color : theme==="light" ? "black" : "white"}}>You are in {theme} mode</h1> 
    </div>
  )
}

export default ThemeComponent