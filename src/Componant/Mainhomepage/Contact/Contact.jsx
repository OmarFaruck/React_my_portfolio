import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaPhoneSquare, FaEnvelopeSquare } from "react-icons/fa";
import '../Contact/Contact.css'
import GoogleSingUp from '../../Font_icon/GoogleSingUp/GoogleSingUp';
import FaceBookSingUp from '../../Font_icon/FaceBookSingUp/FaceBookSingUp';
import GitHubSingUp from '../../Font_icon/GitHubSingUp/GitHubSingUp';
import Gmail from '../../Font_icon/Gmail/Gmail';
const Contact = () => {
  return (
    <>
      <div className="information">
        <div className="text-center">
          <h1>LogIn Information</h1>
          <div className="con_information">

            <NavLink className='nav-link' to="tel:+8801858927228"><FaPhoneSquare className='phone' /></NavLink>
            <p>+8801858927228</p>
          </div>
          <div className="con_information">

            <NavLink onClick={() => window.location = 'mailto:yourmail@domain.com'}><FaEnvelopeSquare className='envelope' /></NavLink>
            <p className='nav-link'>omarfaruck1994@gmial.com</p>
          </div>
          <span className="text-center fs-4">Or Login With</span>
          <span><hr /></span>
          <div className="font">

            <GoogleSingUp />
            <FaceBookSingUp />
            <GitHubSingUp />
            <Gmail />

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;