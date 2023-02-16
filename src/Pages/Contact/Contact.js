import React from "react";
import phone from '../../assest/icon/phone.svg'
import emial from '../../assest/icon/email.svg'
import location from '../../assest/icon/location.svg'
 import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { useState } from "react";

const Contact = () => {

  const Result=()=>{
    return(
      <p className="text-2xl text-green-600 mt-5">Your messages have been successfull</p>
    )
  }

  const [result,setResult]=useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_s08hh9k', 'template_b788ocd', e.target, 'XmBQScJsejFV8ZNEa')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        setResult(true);
    };
  
  
  return (
    <div className="mt-32 " id="contact">
      <h1 className="text-center text-4xl font-bold mb-16">Get In <span className="text-blue-600">Touch</span></h1>
      <div class="card lg:card-side boxex p-10 md:items-center">
        
        <div className="contact-infro w-9/12 md:mb-10">

           <div className="flex gap-10 items-center">
             <div> <img className="h-24" src={phone} alt="" /></div>
             <div>
              <h2 className="text-3xl font-medium">Phone</h2>
              <h5 className="text-3xl font-medium">01302906374</h5>
              </div>
           </div>
           <div className="flex gap-10 items-center">
             <div> <img className="h-24" src={emial} alt="" /></div>
             <div>
              <h2 className="text-3xl font-medium">Email</h2>
              <h5 className="text-3xl font-mediumd">suzitsarkar27@gmail.com</h5>
              </div>
           </div>
           <div className="flex gap-10 items-center">
             <div> <img className="h-24" src={location} alt="" /></div>
             <div>
              <h2 className="text-3xl font-medium">Locaton</h2>
              <h5 className="text-3xl font-medium">Biyanibazar, Sylhet</h5>
              </div>
           </div>
    
        </div>

        <form onSubmit={sendEmail}  class="card-body justify-end w-9/12">
          <>
            <div className="lg:flex gap-5">
            <input type="text" name="fullName" placeholder="Full Name" class="input input-bordered w-full " />
            <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered w-full " />
            </div>
            <input type="text" name="email" placeholder="Email" class="input input-bordered w-full " />
            <div>
            <input type="text" name="message" placeholder="Masseges" class="input input-bordered w-full" />

            <button className="btn_shadow mt-5">Send Messages</button>
            </div>
            <div>
               {result ? <Result/> :null}
            </div>
          </>
        </form>
      </div>
    </div>
  );
};

export default Contact;
