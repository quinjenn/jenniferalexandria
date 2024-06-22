import React, { useState } from 'react';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = ({ isOpen, onRequestClose, }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = process.env.SERVICE_ID;
    const userID = process.env.USER_ID;

    emailjs.send(serviceID, formData, userID)
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('An error occurred, please try again.');
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Contact Modal"
      className="contact-full-screen-modal"
      overlayClassName="contact-modal-overlay"
    >
      <div id="contactForm">
        <div className='contactForm-container'>
          <form className='contact-form' onSubmit={handleSubmit}>
            <div className='contact-form-div'>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className='contact-form-div2'>
              <label>
                Message:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <button type="submit">Send</button>
          </form>
          {successMessage && <p className='success-message'>{successMessage}</p>}
          {errorMessage && <p className='error-message'>{errorMessage}</p>}
        </div>
      </div>
    </Modal>
  );
};

export default ContactForm;
