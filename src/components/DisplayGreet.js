import React, { useState } from 'react'

const DisplayGreet = () => {
    const [name ,setName]=useState("");
  return (
    <div>
    <label htmlFor="">Enter your name</label> <br />
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
    {
        name&&
    <h1>hello {name}</h1>
    }
      
    </div>
  )
}

export default DisplayGreet
