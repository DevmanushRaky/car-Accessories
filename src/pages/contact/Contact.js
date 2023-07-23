import React from 'react';
import Helmet from "../../components/helmet/Helmet";
import "./Contact.css"
import { WhatsApp } from '@mui/icons-material';
import { Call } from '@mui/icons-material';
import { Email } from '@mui/icons-material';
import { LocationCity } from '@mui/icons-material';

function Contact() {
  // Function to open WhatsApp and send a message
  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210', '_blank');
  };

  // Function to open the dial pad with the phone number
  const handleCall = () => {
    window.open('tel:+919876543210');
  };

  // Function to open the email app with the email address
  const handleEmail = () => {
    window.open('mailto:example@example.com');
  };

  // Function to open Google Maps with the location
  const handleLocation = () => {
    window.open('https://maps.google.com/?q=Your+Location', '_blank');
  };

  return (
    <Helmet title="Contact">
      <>
        <h1 className='d-flex justify-content-center align-items-center'> Contact Us </h1>
        <div class="ag-format-container">
          <div class="ag-courses_box">

            <div class="ag-courses_item whatsapp-item" onClick={handleWhatsApp}>
              <div class="ag-courses-item_bg"></div>
              <div class="ag-courses-item_title whatsapp-title">
                <span ><WhatsApp className=' contact-icon contact-whatsapp' /></span>
                WhatsApp
              </div>
            </div>

            <div class="ag-courses_item call-item" onClick={handleCall}>
              <div class="ag-courses-item_bg"></div>
              <div class="ag-courses-item_title call-title">
                <span ><Call className='contact-icon contact-call' /></span>
                Call
              </div>
            </div>

            <div class="ag-courses_item email-item" onClick={handleEmail}>
              <div class="ag-courses-item_bg"></div>
              <div class="ag-courses-item_title email-title">
                <span ><Email className='contact-icon contact-email' /></span>
                Email
              </div>
            </div>

            <div class="ag-courses_item location-item" onClick={handleLocation}>
              <div class="ag-courses-item_bg"></div>
              <div class="ag-courses-item_title location-title">
                <span>< LocationCity className='contact-icon contact-location' /></span>
                Location
              </div>
            </div>

          </div>
        </div>
        <div className='container p-2'>
          <p className='text-justify'>
            Welcome to our contact page! We are thrilled to connect with you and provide any assistance you may need. Whether you have a question, a suggestion, or simply want to say hello, feel free to reach out to us through any of the contact options below:
          </p>
          <p className='text-justify'>
            1. <b>WhatsApp</b>: Click on the "WhatsApp" card to send us a message directly on WhatsApp. We're just a tap away and will respond to your inquiries as promptly as possible.
          </p>
          <p className='text-justify'>
            2. <b>Call</b>: If you prefer to speak to us directly, click on the "Call" card to initiate a call. Our friendly team is ready to assist you and address any concerns you may have.
          </p>
          <p className='text-justify'>
            3. <b>Email</b>: For more detailed inquiries or to share any documents or information, click on the "Email" card to compose an email. We'll make sure to get back to you via email with the information you need.
          </p>
          <p className='text-justify'>
            4. <b>Location</b>: If you ever want to visit us or need to know our physical location, click on the "Location" card to view our address on Google Maps. We look forward to welcoming you in person if you ever decide to visit.
          </p>
          <p className='text-justify'>
            Your feedback and questions are valuable to us, and we are committed to responding to every user as soon as possible. At our end, we strive to provide excellent customer support and create a positive experience for everyone.
          </p>
          <p className='text-justify'>
            Don't hesitate to contact us through any of the provided options. We are here to assist you and make your interaction with us as smooth and enjoyable as possible. Thank you for choosing to connect with us, and we look forward to hearing from you soon!
          </p>
        </div>
      </>
    </Helmet >
  );
}

export default Contact;
