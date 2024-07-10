import React,{memo} from 'react'


function Child() {
    console.log("Count")
  return (
    <div>
       
    </div>
  )
}

export default memo(Child)