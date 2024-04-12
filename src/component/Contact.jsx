import React, { useState } from "react";
import "../component/contact.css";
import Header from "./Header";

function Contact() {
  const [message, setMessage]=useState("")
  const handleSubmit=(e)=>{
    e.preventDefault();
    setMessage("Thank you for your message. We will get in touch with you shortly")
  }
  return (
    <>
      <Header />

      <div class="container text-light">
        {/* <!-- Arrow --> */}
        <a href="">
          <i class="fa-solid fa-arrow-up d-none d-md-block" id="arrow"></i>
        </a>

        <div class="row" id="main">
          <p id="welcome">Hello there!</p>
          <div class="col-md-5">
            <p>
              {" "}
              👋 I'm Vasimakram Choudhari, a Frontend Developer. Whether you
              have a project in mind, want to collaborate, or simply have a
              question, feel free to drop me a message. I'm always excited to
              connect with like-minded individuals and explore new
              opportunities. Let's bring ideas to life together!
            </p>
          </div>
          <div class="col-md-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.9050969156!2d78.24323212615417!3d17.412608641671888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1710283394833!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{border:"0"}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div id="myProject">
          <h1>
            CONTACT <span>US</span>
          </h1>
          <p></p>
        </div>
        {/* <!-- contact form start --> */}
        
          <form onSubmit={handleSubmit}>
          <div class="row" id="contactRow">
            <div class="col-md-3" id="box">
              <input type="text" placeholder="Name" required />
            </div>
            <div class="col-md-3" id="box">
              <input type="email" placeholder="Email" required/>
            </div>
            <div class="col-md-3" id="box">
              <input type="text" placeholder="Subject" required />
            </div>
          </div>
          <div class="row" id="contactRow">
            <div class="col-md-9" id="message">
              <textarea type="textarea" placeholder="Your Message" required></textarea>
            </div>
          </div>
          <div id="lastBtn">
            <input type="submit" id="btn" value="Send Message"></input>
            
          </div>

          <div >
            <p className="p-2 text-success fw-bold" style={{fontSize:"1.5rem",marginTop:"-50px"}}>{message}</p>
          </div>
          
          </form> 
        
        {/* <!-- contact form end --> */}
        <div class="row" id=" lastRow" >
          <div class="col-md-12"  style={{marginBottom:"20rem"}}>
            <p>CopyRight © 2024 Choudhari | All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
