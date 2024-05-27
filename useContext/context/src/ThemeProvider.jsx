import React, { useState } from 'react'
import ThemeContext from './ThemeContext'

function ThemeProvider({children}) {
    
    const[theme,setTheme]=useState('light')
    
     const toogletheme=()=>{
        setTheme(prevtheme=>(prevtheme==="light" ? "dark" : "light"))
     }

  return (
    <ThemeContext.Provider value={{theme,toogletheme}}>
     {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider