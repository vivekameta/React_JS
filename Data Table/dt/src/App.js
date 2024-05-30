
import './App.css';
import {BrowserRouter as Router  , Routes , Route} from 'react-router-dom'
import Addproduct from './Addproduct';
import Edit from './Edit';
import Home from './Home';
import { useState } from 'react';


function App() {

  const[posts,SetPosts]=useState([])

function addnewpost({name,size,cost,desc,images})
{
    let newpost={
      id:new Date().getTime(),
      name:name,
      size:size,
      cost:cost,
      desc:desc,
      images:images

    }
    SetPosts([...posts,newpost])

}
function delpost(id)
{
  SetPosts(posts.filter((el)=>(
    el.id!==id
  )))
}

function editpost(id,name,size,cost,desc,images)
{
   let updpost=posts.map((post)=>(
     post.id===id ? {...posts , name:name, size:size,
      cost:cost,
      desc:desc,
      images:images} : post
   ))
   
   SetPosts(updpost)

}

  return (
    <Router>
 <div className="App">
      <Routes>
        <Route path='/' element={<Home posts={posts} delpost={delpost}/>}></Route>
        <Route path='/add' element={<Addproduct addnewpost={addnewpost}/>}></Route>
        <Route path='/edit/:id' element={<Edit editpost={editpost} posts={posts}/>}></Route>


      </Routes>
    </div>
    </Router>

   
  );
}

export default App;
