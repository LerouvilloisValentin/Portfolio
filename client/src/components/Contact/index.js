import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import styled from "styled-components";
import Home from "../Home";
import Footer from "../Footer";
import "./contact.css"


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qtdgai9",
        "template_l3tkp4k",
        form.current,
        "AKwn3-LNREQlccMFn"
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
        <input type="submit" value="Send" className="send-button" />
      </form>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;

