import React, { useState } from 'react'
import Card from './Card'
import poert1 from './assets/poert1.png'
import port2 from './assets/port2.png'
import port3 from './assets/port3.png'
export default function Portfolio() {
    const[imgUrl,setimgUrl]=useState()
    const[show,setshow]=useState(false)
  return (
    <>
      <section className='portfolio '>
        <div className="container">
        <div className="portfolio-content text-center">   
              <div className="portfolio-title">
          <h2>portfolio component</h2>
          <div className="shape">
            <span></span>
            <i className="fa-solid fa-star" />
            <span></span>
          </div>
        </div>
   </div>
<div className="container-card d-flex row flex-wrap g-5">


 <Card src={poert1}   func={(url) => { setimgUrl(url); setshow(true); }} />
<Card src={port2}   func={(url) => { setimgUrl(url); setshow(true); }} />
<Card src={port3}   func={(url) => { setimgUrl(url); setshow(true); }} />
<Card src={poert1}   func={(url) => { setimgUrl(url); setshow(true); }} />
<Card src={port2}   func={(url) => { setimgUrl(url); setshow(true); }} />
<Card src={port3}   func={(url) => { setimgUrl(url); setshow(true); }} />
</div>

        </div>

      </section>
     {show&&(
 <div className="model row d-flex align-items-center justify-content-center"
      onClick={() => setshow(false)}
   
      >
<div className="container col-md-6 mx-auto">
    <div className="img "
onClick={(e)=>e.stopPropagation()}
>
    <img src={imgUrl} className='w-100' />
</div>
</div>
      </div>
     )}
    </>
  )
}
