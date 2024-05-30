import React, { useContext } from 'react'
import ThemeContext from './Context'

function ThemeComponant() {
    const{theme,toggletheme}=useContext(ThemeContext)
  return (


   <>
           

<nav class="navbar navbar-expand-lg bg-light">
<div class="container-fluid" style={{
backgroundColor:theme==="light"?"white":"black",
color:theme==="light"?"black":"white"
}}>
<a class="navbar-brand" href="" style={{color:theme==="light"?"black":"white"}}>** Portfolio **</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse " id="navbarNav">
<ul class="navbar-nav mx-auto" style={{color:theme==="light"?"black":"white"}}>
<li class="nav-item">
  <a class="nav-link" aria-current="page" href="" style={{color:theme==="light"?"black":"white"}}>Home</a>
</li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<li class="nav-item">
  <a class="nav-link" href="" style={{color:theme==="light"?"black":"white"}}>About</a>
</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<li class="nav-item">
  <a class="nav-link" href="" style={{color:theme==="light"?"black":"white"}}>Pricing</a>
</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<li class="nav-item">
  <a class="nav-link disabled" style={{color:theme==="light"?"black":"white"}}>Contact</a>
</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

</ul>

            <i class="ri-sun-line" onClick={toggletheme} style={{
    background:theme==="light"?"black":"white",
    color:theme==="light"?"white":"black"

}}></i>
       
</div>
</div>
</nav>


<div className='main1'>
<div class="mi1" style={{backgroundColor:theme==="light"?"white":"black",
  color:theme==="light"?"black":"white",
  border:"5px solid white"
}}>
    <h6 class="text-center">ABOUT MYSELF</h6> <br/>
    <h2 class="text-center"> I’m a Creative director based on New <br/>York, who loves clean, simple &  <br/> unique design. I also enjoy crafting..

    </h2><br/>
    <button class="text-center">DOWNLOAD RESUME</button> <br/> <br/>
    <hr/>
    <div class="child2 p-3">

      <h5 class="pt-4">USER REACHERS</h5>
      <div class="progress ">
        <div class="progress-bar" role="progressbar" aria-label="Basic example" style={{width: "50%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <h5 class="pt-4">UI DESIGN</h5>
      <div class="progress">
        <div class="progress-bar" role="progressbar" aria-label="Basic example" style={{width: "80%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    
    </div>

    <div class="child2 p-3">
      <h5 class="pt-4">
       
        
        WEB DESIGN</h5>
      <div class="progress ">
        <div class="progress-bar" role="progressbar" aria-label="Basic example" style={{width: "60%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <h5 class="pt-4">ILLUSTRATION</h5>
      <div class="progress">
        <div class="progress-bar" role="progressbar" aria-label="Basic example" style={{width: "90%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    
    </div>
    <br/> <br/>
    <p class="text-center pt-4">Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius <br/>a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.</p>
   

  </div>



</div>

<div className='main2' style={{backgroundColor:theme==="light"?"white":"black",
  color:theme==="light"?"black":"white",
  border:"5px solid white"
}}>

<h2 class="pt-5 pb-5">My Expertise</h2>
    <div class="mi2">
      <div class="child3">
        <h1>User Experience Design</h1> <br/>
        <h1 id="hh">User Interface Design</h1> <br/>
        <h1 id="hhh">Web Design</h1> <br/>
      </div>
      <div class="child3a">
        <p class="pt-5  ps-2">
          Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. <br/>
           Fusce eget urna ante. Donec massa velit, varius a accumsan ac, <br/>
            tempor iaculis massa. Sed placerat justo sed libero varius vulputate. <br/>
              <br/>
            Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. <br/>
            Fusce eget urna ante. Donec massa velit, varius a accumsan ac, <br/>
             tempor iaculis massa. Sed placerat justo sed libero varius vulputate. <br/>
              
        </p> 

      
      </div>



    </div>

</div>
<div className='main7'style={{backgroundColor:theme==="light"?"white":"black",
  color:theme==="light"?"black":"white",
  border:"5px solid white",
  
}} >

  <h2 class="text-center ">
    I’m a designer, based in San Francisco. Currently <br/>
    a freelancer. You can see my hobbies on @Jack-Co <br/>
    and some photos on me too.
  </h2> <br/>
  <hr style={{color:theme==="light"?"black":"white"}}/>



</div>

<div className='main8' style={{backgroundColor:theme==="light"?"white":"black",

  border:"5px solid white",
  
}}>
<div class="mi8 d-flex justify-content-between" style={{background:"#01FF56",padding:"50px"}}>
    <div class="child8a">
      <h4>DROP A LINE</h4> <br/>
      <label for="">Your Name</label><br/>
      <input type="text"/> <br/>
      <label for="">Email</label><br/>
      <input type="text"/> <br/>
      <label for="">Subject</label><br/>
      <input type="text"/> <br/>
      <label for="">Message</label><br/>
      <input type="text" id="mg"/> <br/> <br/>
      <button type="button">Send Message</button>

    </div>
    <div className="child8b">
      <h4>CONTACT ME</h4><br/>
      <p>
        4657 Franklin Avenue, ARCH CAPE <br/>
        +361-883-3218 <br/>
hello@jac-co.com
      </p>
      <button>DOWNLOAD RESUME</button> <br/> <br/>
      <i class="bi bi-facebook "></i>
      <i class="bi bi-instagram ps-3"></i>
      <i class="bi bi-linkedin ps-3"></i>

    </div>

  </div>

</div>
   </>
  )
}

export default ThemeComponant