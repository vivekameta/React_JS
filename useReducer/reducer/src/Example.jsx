import initialState from "./initialState";
import { increase,decrease } from "./actions";
import reducer from "./reducer";
import React,{Fragment, useReducer} from "react";

function Example(){
    const[state,dispatch]=useReducer(reducer,initialState)

    const handleIncrease=(id)=>{

        dispatch(increase(id))
      

    }
    const handleDecrease=(id)=>
    {

        dispatch(decrease(id))
    }
       const Total = state.prices.reduce((sum, item) => sum + item.value, 0)
    return(
        <>
  
        {
            state.prices.map(item=>(
              <Fragment>

                <div key={item.id}>
                    <h1>PRICES {item.price}</h1>
                    <h1>Amount {item.value}</h1>

                    <button onClick={()=>handleIncrease(item.id)}>Increase</button>
                    <button onClick={()=>handleDecrease(item.id)}>Decrease</button>


                    
                </div>
    

      
                
              </Fragment>
                
            ))
        }
        <h1>Total Amount : {Total}</h1>
        
        </>
    )

}



export default Example