
import './App.css';
import React from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './Home';
import Addpost from './Addpost';
import { useState } from 'react';
import Edit from './Edit';

function App() {

  const[posts,setPostes]=useState([])


  function addnewpost(title,content)
  {
     let newpost={
      id: new Date().getTime(),
      title:title,
      content:content

     }
     setPostes([...posts,newpost])

  }

   function delpost(id)
   {
    setPostes(posts.filter((el)=>(
       el.id!==id
    )))

   }

   function editblog(id)
   {
      // let newvalue= posts.find(ed.id===id)



   }

  return (
   
    <Router>
<div className="App">

<Routes>

  
   <Route path='/' element={<Home posts={posts} delpost={delpost}/>}></Route>
   <Route path='/add' element={<Addpost addnewpost={addnewpost} />}></Route>
   <Route path='/edit/:id' element={<Edit editblog={editblog}/>}></Route>

  </Routes>      
     
</div>
    </Router>
  );
}

export default App;


