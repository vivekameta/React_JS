import { INCREASE } from "./actions";
import { DECREASE } from "./actions";

const reducer = (state,action)=>{
    
    switch(action.type){
      
        case INCREASE : return {
            ...state,
            prices : state.prices.map(item=>item.id===action.payload ? {...item, value: item.value + item.price} : item )
        }

        case DECREASE : return {
            ...state,
            prices : state.prices.map(item=>item.id===action.payload ? {...item, value: item.value - item.price} : item )
        }
    }
}

export default reducer