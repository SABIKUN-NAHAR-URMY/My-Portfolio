import React, { useRef } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

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
        <div className='mb-52'>
            <h1 className='text-2xl font-bold text-center'>Contact Me Form</h1>
            <form className='mt-4 text-center'  ref={form} onSubmit={sendEmail}>
                <input className='w-[50%] p-4 mb-4 border rounded-lg' type="text" name='name' placeholder='Full Name' required /><br />
                <input className='w-[50%] p-4 mb-4 border rounded-lg' type="text" name='email' placeholder='Email' required /><br />
                <textarea className='w-[50%] p-4 mb-4 border rounded-lg' name="message" id="" placeholder='Message' required></textarea><br />
                <button onClick={notify} className='btn ' type='submit'>Send</button>
            </form>
        </div>
    );
};

export default ContactMe;