'use client';
import React, { useState } from 'react';
import Layout from '@/app/layout/layout';
import './contact-page.css';
import moe from './images/moe.png';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to an API
    console.log('Form data submitted:', formData);
    alert('Thank you for contacting us!');
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Layout>
      <div className="contact__container">
        <img src={moe.src} alt="Moe Szyslak" className="contact__image" />
        <h1 className="contact__title">Contact Us</h1>
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form__group">
            <label htmlFor="name" className="form__label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form__input"
              required
            />
          </div>
          <div className="form__group">
            <label htmlFor="email" className="form__label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form__input"
              required
            />
          </div>
          <div className="form__group">
            <label htmlFor="message" className="form__label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form__textarea"
              required
            ></textarea>
          </div>
          <button type="submit" className="form__submit-button">
            Send Message
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ContactPage;
