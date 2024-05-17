
import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom'
import Employee from './Employee';
import Add_emp from './Add_emp';
import Update from './Update';


function App() {
    
  const[posts,setPosts]=useState([])


  function addpost(name,emp_id,phone,emp_add,dep)
  {
      let newpost={
        id:new Date().getTime(),
        name:name,
        emp_id:emp_id,
        phone:phone,
        emp_add:emp_add,
        dep:dep
      }
      setPosts([...posts,newpost])
  }

  // console.log(posts)

  function delpost(id)
  {
    setPosts(posts.filter((el)=>(
     el.id !==id
    )))
  }

  function editpost(id,name,emp_id,phone,emp_add,dep)
  {
    let updatepost=posts.map((post)=>(
      post.id===id ? {...post,name:name,emp_id:emp_id,phone:phone,emp_add:emp_add,dep:dep}    : post

    ))
    setPosts(updatepost)
  }
 
  return (

    <Router>
     <div className="App">

      <Routes>

        <Route path='/' element={<Employee posts={posts} delpost={delpost}/>}></Route>
        <Route path='/add' element={<Add_emp addpost={addpost}/>}></Route>
        <Route path='/edit/:id' element={<Update editpost={editpost} posts={posts}/>}></Route>
        
      </Routes>
     
     </div>
    </Router>
   
  );
}

export default App;
