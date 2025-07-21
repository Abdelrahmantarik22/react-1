import React from 'react'

export default function About() {
  return (
    <>
          <section className='About'>
      <div className="container d-flex justify-content-center align-items-center flex-column">
          <div className="about-content text-center ">
            <h2 className='mb-3 text-uppercase'> about component</h2>
            <div className="shape">
              <span></span>
      <i className="fa-solid fa-star" />
              <span></span>
            </div>
            <div className="about-txt row text-start">
                <div className="col-md-6">
                    <p>Freelancer is a free bootstrap theme created 
                        by Route. The download includes the complete 
                        source files including HTML, CSS, and JavaScript
                         as well as optional SASS stylesheets for easy customization .</p>
                </div>
                <div className="col-md-6">
                    <p> Freelancer is a free bootstrap theme created by 
                        Route. The download includes the complete source 
                        files including HTML, CSS, and JavaScript as well as 
                        optional SASS stylesheets for easy customization. </p>
                </div>
            </div>
      
          </div>
      </div>
      
          </section>
    </>
  )
}
