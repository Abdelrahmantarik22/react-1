import React from 'react'

export default function Card({src , func}) {
  return (
    <>
    <div 
    onClick={()=>func(src)}
    className="card-portfolio col-lg-4 col-md-6 position-relative rounded-3" >
        <img src={src} alt="" className='w-100 rounded-3 '/>
        <div className="layer">
<i className="fa-solid fa-plus fa-2xl" style={{color: '#ffffff'}} />
        </div>
        </div>  
    </>
  )
}
