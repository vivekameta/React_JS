import React from 'react'
import ThemeContext from './ThemeContext'
import { useContext } from 'react'

function ToogleTheme() {
    const{theme,toogletheme}= useContext(ThemeContext)
  return (
    
    <button onClick={toogletheme} style={{color : theme === 'light' ? 'white' : 'black', backgroundColor : theme === 'light' ? 'black' : 'white' }}>
         {theme==="light" ? "dark" : "light"}
         {
            theme === 'light' ?
             <i class="fa-solid fa-sun"></i> :
             <i class="fa-solid fa-moon"></i>

         }
    </button>
  )
}

export default ToogleTheme