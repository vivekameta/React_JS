import React from 'react'
import { useState } from 'react'

function Todo() {

    const[inputValue,setInputValue]=useState('')
    const[todos,setTodos]=useState([])
    const[editId,setEditId]=useState(null)  
   

    localStorage.setItem("ttoo",JSON.stringify(todos))


     function addTask()
     {   
         if(editId!==null)
        {
          
        setTodos(todos.map(todo=>{

            if(todo.id===editId)
                {
                    return {...todo,text:inputValue}
                }
                return todo
        }))
        setEditId(null)
        setInputValue('')

        }
        else
        {
            let newTodos=
            {
               id: new Date().getTime(), 
              text:inputValue
            }
    
            setTodos([...todos,newTodos])
     
            setInputValue('')

        }
       
        


     }

    function deltodo(id)
    {
      setTodos(todos.filter((to)=>(
            
        to.id!==id

    )))

    }
   
    function edittodo(id)
    {
        const todolist=todos.find(todo=>todo.id===id)
        
        setInputValue(todolist.text)


        setEditId(id)
     
    } 
   

  return (
    <div>

        <h1 style={{color:'blue'}}>*** TODO LIST ***</h1>

        <br /> <br />

        <input type="text" placeholder='Enter your Task' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        
        <button onClick={addTask}>Add</button>

 <br /> <br />  <br /> <br />
        <table class="table" style={{width:"300px",marginLeft:"620px"}}>
  <thead style={{textAlign:"center"}}>
    <tr >
      <th scope="col">#</th>

      
      <th scope="col">Name</th>
      <th scope="col">Action</th>


    
    </tr>
  </thead>
  <br />

<tbody style={{textAlign:"center"}}>
                    {
                    
                    todos.map((el, i) => (
                        <tr key={i}>
                            <td scope="row">{i + 1}</td>
                            <td>{el.text}</td>
                            <td><button style={{background:"red",color:"white",height:"30px",border:"none"}} onClick={()=>deltodo(el.id)}>Delete</button> <button style={{background:"green",color:"white",height:"30px",border:"none",width:"50px"}} onClick={()=>edittodo(el.id)}>Edit</button></td>
                            
                        </tr>


                    ))
                    
                    }
                </tbody>
       
                </table>
    </div>
  )
}

export default Todo