import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Let's Talk</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>jerryrawlings282@gmail.com</h5>
            <a href="mailto:jerryrawlings282@gmail.com"> Send a Message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Facebook</h4>
            <h5>Jerry Rawlings</h5>
            <a href="mailto:jerryrawlings282@gmail.com"> Send a Message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>0790732468</h5>
            <a href="mailto:jerryrawlings282@gmail.com"> Send a Message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send a Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
