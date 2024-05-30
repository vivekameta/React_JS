import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
function Addproduct({addnewpost}) {

  const[name,setName]=useState('')
  const[size,setSize]=useState('')
  const[cost,setCost]=useState('')
  const[desc,setDesc]=useState('')
  const[images,setImages]=useState(null)

  let navigate=useNavigate()

  function handlesubmit(e)
  {
    e.preventDefault()
  
    let newpost={name,size,cost,desc,images}
    addnewpost(newpost)
    
    navigate('/')
    
    


  }

  function handlechange(e)
  {
    setImages(e.target.files[0])
  }
  return (
   

    <div>

      <header>

<Link to="/">BACK TO HOME</Link> &nbsp;&nbsp;&nbsp;&nbsp;
<Link to="/add">ADD TO POST</Link>&nbsp;&nbsp;&nbsp;&nbsp;
<Link to="/edit/:id">EDIT POST</Link>

      </header>
      
      <div className='m1'>

      <center>
        <br /> <br />
    <h3 style={{fontFamily:"initial",color:"blue"}}>  *** CREACT PRODUCTS  *** </h3>
    <br /> <br />
<form class="row g-3" onSubmit={handlesubmit}>

        
<div class="col-12">
  <label for="inputEmail4" class="form-label" >* Product Name</label>
  <input type="text" class="form-control" id="inputEmail4" placeholder="Enter Product Name ...." value={name} onChange={(e)=>setName(e.target.value)}/>
</div>
<div class="col-md-6">
  <label for="inputState" class="form-label">* Size</label>
  <select id="inputState" class="form-select" style={{textAlign:"center"}} value={size} onChange={(e)=>setSize(e.target.value)}>
    <option selected >Choose the Product size...</option>
    <option value='s'> S </option>
    <option value='m'> M </option>
    <option value='l'> L </option>
    <option value='xl'> XL </option>
    <option value='xxl'> XXL </option>
    <option value='xxxl'> XXXL </option>  




  </select>
</div>
<div class="col-md-6">
  <label for="inputState" class="form-label"> * Item Cost</label>
  <input type="number" class="form-control" id="inputEmail4" value={cost} onChange={(e)=>setCost(e.target.value)}/>
  
</div>

<div class="col-12">
  <label for="inputAddress" class="form-label"> * Description</label> <br />

  {/* <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/> */}
  <textarea name="" class="form-control" id="inputAddress" value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea>
</div>

<div class="col-md-8">
  <label for="inputCity" class="form-label">Choose the Product images...</label>
  <input type="file" class="form-control" id="inputCity"  onChange={handlechange} />
</div>


<div class="col-12">
 <br />

  <button type="submit" class="btn btn-primary">Add Post</button>
</div>
</form>

</center>
     

      </div>
  
    </div>
  )
}

export default Addproduct