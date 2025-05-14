import React, { useRef } from 'react';
import { toast } from 'react-toastify';  // Import toast
import emailjs from 'emailjs-com';
import './Contact.css';
import Fade from 'react-reveal/Fade';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_y2pzykb', // Service ID
        'template_j6257xw', // Template ID
        form.current,       // Form reference
        'KlrA_Vpco3e9RlGOF' // Your EmailJS User ID
      )
      .then(
        (result) => {
          toast.success('Message Sent Successfully!');  // Show success toast
        },
        (error) => {
          toast.error('Failed to Send Message, Please Try Again!');  // Show error toast
        }
      );

    e.target.reset();
  };

  return (
    <div className='project-container' id='Contact'>
      <div className="contact-container">
        <h1>Contact Me</h1>
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <Fade bottom>
            <label>
              Name:
              <input type="text" name="name" placeholder="Your Name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" placeholder="Your Email" required />
            </label>
            <label>
              Message:
              <textarea name="message" placeholder="Your Message" required></textarea>
            </label>
            <button type="submit">Send Message</button>
          </Fade>
        </form>
      </div>
    </div>
  );
}

export default Contact;
