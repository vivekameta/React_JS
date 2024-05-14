
import './App.css';
import React from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './Home';
import Addpost from './Addpost';
import { useState } from 'react';

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

  return (
   
    <Router>
<div className="App">

<Routes>

  
   <Route path='/' element={<Home posts={posts}/>}></Route>
   <Route path='/add' element={<Addpost addnewpost={addnewpost} />}></Route>

  </Routes>      
     
</div>
    </Router>
  );
}

export default App;
