import React, { useRef } from 'react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import emailImg from '../../images/email.png';
import locationImg from '../../images/location.png';
import phoneImg from '../../images/phone.png';
import './ContactMe.css';

const ContactMe = () => {
  const form = useRef();
  const notify = () => toast.success('Send Your Info Successfully!');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_0plwzna', form.current, 'RLXjZLUe26CX9a6Ml')
      .then((result) => {
        //   console.log(result.text);
      }, (error) => {
        //   console.log(error.text);
      });
  };

  return (
    <div className='mb-52' id='contactMe'>
      <h1 className='text-4xl font-bold text-center underline decoration-dashed'>Contact Me Form</h1>
      <div className='mt-10 grid grid-cols-1 lg:grid-cols-2 mx-20' >
        <div className='lg:ml-40'>

          <div className="card lg:px-44 bg-base-100 shadow-xl contact">
            <div className="card-body">
              <img src={emailImg} className='w-16' alt="" />
              <h2 className="card-title">E-mail</h2>
              <p>snurmy18@gmail.com</p>
            </div>
          </div>

          <div className="card lg:px-44 bg-base-100 shadow-xl contact">
            <div className="card-body">
              <img src={phoneImg} className='w-16' alt="" />
              <h2 className="card-title">Phone</h2>
              <p>+880 1516789576</p>
            </div>
          </div>

          <div className="card lg:px-44 bg-base-100 shadow-xl contact">
            <div className="card-body">
              <img src={locationImg} className='w-16' alt="" />
              <h2 className="card-title">Location</h2>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        <div className='mt-20'>

          <form className='mt-4 text-center w-[90%] mx-auto p-7' ref={form} onSubmit={sendEmail}>
            <input className='w-[90%] p-4 mb-4 border rounded-lg' type="text" name='name' placeholder='Full Name' required /><br />
            <input className='w-[90%] p-4 mb-4 border rounded-lg' type="text" name='email' placeholder='Email' required /><br />
            <input className='w-[90%] p-4 mb-4 border rounded-lg' type="text" name='phone' placeholder='Phone' required /><br />
            <textarea className='w-[90%] p-4 mb-4 border rounded-lg' name="message" id="" placeholder='Message' required></textarea><br />
            <button onClick={notify} className='btn ' type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;