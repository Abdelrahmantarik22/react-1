import React from 'react'
import avataaars from'./assets/avataaars.svg'
export default function Home() {
  return (
    <>
    <section className='Home'>
<div className="container d-flex justify-content-center align-items-center flex-column">
    <div className="home-content text-center ">
      <img src={avataaars} alt="" className='mb-3'/>
      <h2 className='mb-3'>start Framework</h2>
      <div className="shape">
        <span></span>
<i className="fa-solid fa-star" />
        <span></span>
      </div>
      <div className="exper">Graphic Artist - Web Designer - Illustrator</div>

    </div>
</div>

    </section>
    </>
  )
}
