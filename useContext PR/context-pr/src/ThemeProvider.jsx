import React, { useState } from 'react'
import ThemeContext from './Context'

function ThemeProvider({children}) {

    const[theme,setTheme]=useState('light')

    const toggletheme=()=>{
        setTheme(pretheme=>pretheme==="light" ? "dark" : "light")
    }

  return (
   <ThemeContext.Provider value={{theme,toggletheme}}>
    {children}
   </ThemeContext.Provider>
  )
}
       

export default ThemeProvider