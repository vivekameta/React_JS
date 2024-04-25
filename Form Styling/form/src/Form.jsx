import React from 'react'
import { useState } from 'react'
function Form() {

    const [formdata,setformdata]=useState({

        username:'',
        email : '',
        password : ''
    })
  
    function handleinput(e)
    {
      const{name,value}=e.target
      setformdata({
        ...formdata,
        [name]:value

      })

    }
   function handlesubmit (e)
   { 
     e.preventDefault()
     
     console.log(formdata)
   }
  return (
    <div>
          <form action="" onSubmit={handlesubmit}>
            <label>Enter the Username : </label>
            <input type="text" name='username' value={formdata.username} onChange={handleinput}/>
            <br />
            <label htmlFor="">Enter your Email</label>
            <input type="text" name='email' value={formdata.email} onChange={handleinput}/>
            <br />
            <label htmlFor="">Enter your password</label>
            <input type="text" name='password' value={formdata.password} onChange={handleinput}/>
            <br />
            <button type='submit'>Submit</button>
        </form>

    </div>
  )
}

export default Form


