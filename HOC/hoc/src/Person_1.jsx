import React, { useState } from 'react'

import Updated_Component from './Updated_Component'

function Person_1({money,handleincrease}) {

  return (
    <>
    <h1>Pratik is Offering : ${money}</h1>
    <button onClick={handleincrease}>Click Here!!!</button>
    </>
  )
}

export default Updated_Component(Person_1)