import React, { useState } from 'react'

export default function Input({type}) {
    const[input,setinput]=useState('')
    function movelabel(e) {
        setinput(e.target.value)
    }
  return (
    <>
  <div className="mb-3">
    <label
   htmlFor={type} 
   className="form-label"
      style={{
          opacity: input !== '' ? '1' : '0',
          transform: input !== '' ? 'translate(12px, 0px)' : 'translate(12px, 38px)',
          transition: 'all 0.5s',
        }}>
            {type} :
   </label>
  <input type="text" className="form-control py-3" id={type} placeholder={type} onChange={movelabel} />
  
</div>

    </>
  )
}
