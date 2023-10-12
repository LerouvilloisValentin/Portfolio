import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import styled from "styled-components";
import Home from "../Home";
import Footer from "../Footer";
import "./contact.css"


const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ehkr1mb",
        "template_l3tkp4k",
        form.current,
        "y2QZ7RpOJuYqnXmmz"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
      setMessageSent(true)
  };

  return (
    <>
    <Home/>
    <div className="contact">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" className="send-button" translate="no"/>
      {messageSent && <p style={{ color: "green",   paddingLeft:"0%"}}>Message correctly sent !</p>}
      </form>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;

