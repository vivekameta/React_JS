// import React from 'react'
// import { useState } from 'react'

// function Form() {
//     const [formdata , setformdata] = useState({
//         username : '',
//         email : '',
//         password : ''
//     })  

//     const [errors , setErrors]=useState({})
//     function handleinput(e){
//         const {name , value} = e.target
//         setformdata({
//             ...formdata,
//             [name] : value
//         }) 
//     }

//     function handlesubmit(e){
// e.preventDefault()
// console.log(formdata)

// let errors = validate(formdata)
// setErrors(errors)
// if(Object.keys(errors).length === 0){
// alert("Submitted")
// }
// else{
//     setErrors(errors)
// }
// }
//     function validate(values){
//   let errors = {}
//   let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//   if(!values.username){
//     errors.username = "Username is required"
//   }
//   if(!regex.test(values.email)){
//     errors.email = "Email is not valid"
//   }
//   if(!values.password){
//     errors.password = "Password is required"

//   }
//   else if(values.password.length<8){
//     errors.password = "Password must be more than 8 characters"
//   }
//   return errors
//   }
    
//   return (
//     <>
//     <form onSubmit={handlesubmit}>
//         <label>Enter your username : </label>
//         <input type="text" name='username' value={formdata.username} onChange={handleinput}/>
//         <p>{errors.username}</p>
//         <br/>
//         <label htmlFor="">Enter your Email : </label>
//         <input type="text" name='email' value={formdata.email} onChange={handleinput} />
//         <p>{errors.email}</p>
//         <br/>
//         <label htmlFor="">Enter your Password : </label>
//         <input type="text" name='password' value={formdata.password} onChange={handleinput}/>
//         <p>{errors.password}</p>
//         <br/>
//         <button type='Submit'>Submit</button>
//     </form>
        
//     </>
//   )
// }
// export default Form


import React from 'react'
import { useState } from 'react'


function Validation_form() {

  const [formdata,setformdata]=useState({
    username:'',
    email:'',
    password:''

  })

  function handleinput(e)
  {
    const {name,value}=e.target
    
    setformdata({
      ...formdata,
      [name]:value
    })

  }

  const[errors,setErrors]=useState({})



  function handlesubmit(e)
  {
   e.preventDefault()
   console.log(formdata)
    let err=validate(formdata)
    setErrors(err)
    if(Object.keys(err).length===0)
    {
      alert("Submmited")
    }
    else
    {
       setErrors(err)
    }
  }

  function validate(value){

    let err={}
    let regx=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if(!value.username){
       err.username="Username is Requried";
    }
    if(!regx.test(value.email))
    {
      err.email="Email  is not vaild";
    }
    if(!value.password)
    {
       err.password="Password is Requried"
    }
    else if(value.password.length<8)
    {
      err.password="Password must be more than 8 characters"
    }

    return err

  }

  return (
    <div>
      <form action="" onSubmit={handlesubmit}>
        <label htmlFor="">Enter the Name : </label>
        <input type="text" name='username' value={formdata.username} onChange={handleinput}/>
        <br />
        <p>{errors.username}</p>
        <br/>
        <label htmlFor="">Enter the Email : </label>
        <input type="text" name='email' value={formdata.email} onChange={handleinput}/>
        <br />
        <p>{errors.email}</p>
        <br/>
        <label htmlFor="">Enter the number : </label>
        <input type="text" name='password' value={formdata.password} onChange={handleinput} />
        <br />
        <p>{errors.password}</p>
        <br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Validation_form