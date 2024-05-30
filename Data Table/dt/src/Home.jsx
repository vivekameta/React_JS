import React from 'react'
import { Link } from 'react-router-dom'

function Home({posts , delpost}) {

    
  function del(id)
  {
    delpost(id)
  }

  return (
    <div>

      

<header>

<Link to="/">BACK TO HOME</Link> &nbsp;&nbsp;&nbsp;&nbsp;
<Link to="/add">ADD TO POST</Link>&nbsp;&nbsp;&nbsp;&nbsp;
<Link to="/edit/:id">EDIT POST</Link>

      </header>
<center>
  <br /> <br />
<h2 style={{fontFamily:"-moz-initial",fontWeight:"bold",color:'chocolate'}}>*** WELCOME TO OUR APP ***</h2>
<br /><br />

            {
                posts.map((el)=>(
                  
                   <div className='main'>

   <br />
                    <div className='m'>
                       <div className='m_1'>
                       <img src={URL.createObjectURL(el.images)} alt="post" />
                       </div>
                       <div className='m_2' style={{color:"blue"}}>
                         <h5>{`Product name  :    ${el.name}`}</h5> <br />
                         <h5>{`Product size  :    ${el.size}`}</h5> <br />
                         <h5>{`Product cost  :    ${el.cost}`}</h5> <br />
                         <h5>{`Descripation  :    ${el.desc}`}</h5> <br />

                         <button style={{width:"80px",padding:"3px",background:"red",color:"white",border:"none"} } onClick={()=>del(el.id)}>Delete</button>&nbsp;&nbsp;
                        <Link to={`/edit/${el.id}`}> <button style={{width:"80px",padding:"3px",background:"green",color:"white",border:"none"}} >Edit</button></Link>

                       </div>
                       
                       

                    </div>

                   </div>
                ))
            }
        </center>
    </div>
    
  )
}

export default Home