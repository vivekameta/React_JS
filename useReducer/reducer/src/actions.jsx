export const INCREASE='INCREASE'
export const DECREASE='DECREASE'


 export const increase=(id)=>({

     type:INCREASE,
     payload:id
})


export const decrease=(id)=>({

    type:DECREASE,
    payload:id
})

    


