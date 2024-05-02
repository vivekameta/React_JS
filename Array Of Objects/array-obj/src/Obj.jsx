import React from 'react'

function Obj(props) {
  return (
    <div className='i1'>
        <center>
            <table border={5}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>     
                    </tr>
                </thead>

                <tbody>
                    {
                   props.array.map((el)=>(
                    <tr>
                        <td>{el.id}</td>
                        <td>{el.name}</td>
                        <td>{el.position}</td>
                        <td>{el.salary}</td>
                    </tr>
                   ))
                    }
                </tbody>
            </table>
        </center>
    </div>
  )
}

export default Obj