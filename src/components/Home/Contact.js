
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import CircularProgress from '@mui/material/CircularProgress';
import contactImage from '../../image/contactImage.png'

import { BsArrowRight } from "react-icons/bs";

function Contact() {

  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false); // State for loading indicator

  const statusChange = () => {
    setStatus('');
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!senderEmail || !subject || !message || !name) {
      setStatus('Please fill in all fields.');
      return;
    }

    setLoading(true);

    const templateParams = {
      name: name,
      from_email: senderEmail,
      subject: subject,
      message: message,
    };

    const your_service_id = 'service_j6vsv3q';
    const your_template_id = 'template_msprmwi';
    const your_user_id = 'hs4dqlcGsMOxzEk7A';

    emailjs
      .send(your_service_id, your_template_id, templateParams, your_user_id)
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        setStatus('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setStatus('Failed to send email.');
      })
      .finally(() => {
        setLoading(false);
        setName('');
        setSenderEmail('');
        setSubject('');
        setMessage('');
      });
  };
  return (
    <div>
      <div className='bg-slate-100 pt-10  w-full pb-10'>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  text-sm lg:text-md md:text-md">
          <div>
            <img src={contactImage} alt="Contact" className="w-full" />
          </div>


          <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md relative ">


            {loading && (
              <div className="absolute top-0 left-0 w-full h-full rounded-lg flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                <CircularProgress color="primary" />
              </div>
            )}

            <div  >
              <h1 className="text-2xl mb-4 text-center">Send a Message</h1>
              <form onSubmit={sendEmail} className="flex flex-col">
                <input
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your Name"
                  className="w-full p-2 mb-4 border text-black border-gray-300 bg-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#574aab]"
                />
                <input
                  type="email"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-2 mb-4 border border-gray-300 bg-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#574aab]"
                />
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Enter subject"
                  className="w-full p-2 mb-4 border border-gray-300 bg-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#574aab]"
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message"
                  className="w-full p-2 mb-4 border border-gray-300 h-24  bg-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#574aab]"
                />
                <button
                  type="submit"
                  onClick={statusChange}
                  className="w-full bg-[#574aab] text-white p-2  rounded-md hover:bg-[#1a1443] transition-colors duration-300"
                >
                  Send
                </button>
                {status && <p className="mt-2 text-center">{status}</p>}
              </form>
            </div>
          </div>

        </div>



      </div>


      <div className='flex bg-sky-900 p-10 items-center justify-around '>
        <div className='font-bold text-2xl text-white text-jus '>
          WE PROVIDE INNOVATIVE SUPPLY SOLUTIONS TO ENHANCE OUR CUSTOMERS OPERATIONS
        </div>

        <div className=' flex justify-center'>
          <button class="bg-red-500 text-white font-bold py-4 px-6 hover:bg-white  hover:text-black     flex items-center gap-2 ">
            ENQUIRY <BsArrowRight />
          </button>
        </div>
      </div>

    </div>

  );
};

export default Contact;
