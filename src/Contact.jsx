import React from "react";
import Input from "./Input";

export default function Contact() {

  return (
    <>
      <section className="contact text-center">
        <div className="container">
            <div className="contact-title pt-4">
          <h2>conatct section</h2>
          <div className="shape">
            <span></span>
            <i className="fa-solid fa-star" />
            <span></span>
          </div>
        </div>
        <form action="" className="responsive-form mx-auto text-start">

<Input type='userName' />
<Input type='userAge' />
<Input type='userEmail' />
<Input type='userPassword' />
<button  className="btn text-white "
style={{backgroundColor:'#3fbc9c'}}
onClick={(e)=>e.preventDefault()}> send Message </button>
        </form>
        </div>
      </section>
    </>
  );
}
