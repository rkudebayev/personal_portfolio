import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contacts.css'
import Toastify from 'toastify-js'

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')
  const form = useRef();
  const templateId = process.env.REACT_APP_TEMPLATE_KEY;
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

 

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
            Toastify({
                text: 'Your email has been sent',
                duration: 2000,
                gravity: 'top',
                position: 'right'
            }).showToast();
            setName('');
            setEmail('');
            setMessage('');
        },
        (error) => {
            Toastify({
                text: 'Failed to send email',
                duration: 3000,
                gravity: 'top',
                position: 'right'
            }).showToast()
        },
      );
  };

  return (
    <div className='contact-me'>
      <div className='header'>
        <h2>Contact me</h2>
        <hr />
      </div>
    
      <div className='form'>

        <div className='input'>
          <form ref={form} onSubmit={sendEmail}>
          <input 
              className='form-control' 
              type="text" 
              value={name}
              name="user_name" 
              id='name'
              onChange={e => {setName(e.target.value)}}
              placeholder='Name'
              required
              />
          <input 
              className='form-control'
              type="email" 
              value={email}
              id='email'
              name="user_email"
              onChange={e => {setEmail(e.target.value)}}
              placeholder='Email'
              required
              />
          <textarea 
              name="message"
              value={message}
              className='form-control'
              placeholder='Please type your text'
              onChange={e => {setMessage(e.target.value)}}
              required
              />
          <button className="btn btn-primary w-100" type="submit" value="Send">Send</button>
          </form>  
      </div>

        <div className='personal-details'>
          <h5>Email:</h5>
          <p>rasul.kudebaev@gmail.com</p>
          <h5>Phone:</h5>
          <p>+77017040114</p>
        </div>

        </div>
    </div>
  );
};

export default ContactUs;