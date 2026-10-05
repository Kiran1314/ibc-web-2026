"use client";

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; 
import ReCAPTCHA from "react-google-recaptcha";
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('');
  const [project, setProject] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      firstName,
      lastName,
      email,
      phone,
      company,
      service,
      project
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('✨ Enquiry sent successfully! We will be in touch soon.', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        
        // Reset form after successful submission
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setCompany('');
        setService('');
        setProject('');
      } else {
        toast.error('❌ Failed to send. Please check your connection and try again.', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error('❌ An error occurred. Please try again later.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <form className="cform reveal" id="contact-form" onSubmit={handleSubmit}>
        <h2>Send an Enquiry</h2>
        <p>Fill in the form and we'll be in touch within 24 hours.</p>
        
        <div className="frow">
          <div className="fg">
            <label htmlFor="first-name">First Name</label>
            <input 
              id="first-name" 
              name="first_name" 
              type="text" 
              autoComplete="given-name" 
              placeholder="Your first name" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required 
            />
          </div>
          <div className="fg">
            <label htmlFor="last-name">Last Name</label>
            <input 
              id="last-name" 
              name="last_name" 
              type="text" 
              autoComplete="family-name" 
              placeholder="Your last name" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required 
            />
          </div>
        </div>
        
        <div className="fg">
          <label htmlFor="email">Email Address</label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            autoComplete="email" 
            placeholder="your@email.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        
        <div className="fg">
          <label htmlFor="phone">Phone / WhatsApp</label>
          <input 
            id="phone" 
            name="phone" 
            type="tel" 
            autoComplete="tel" 
            placeholder="+971 55 291 2810" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required 
          />
        </div>
        
        <div className="fg">
          <label htmlFor="company">Company Name</label>
          <input 
            id="company" 
            name="company" 
            type="text" 
            autoComplete="organization" 
            placeholder="Your company" 
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        
        <div className="fg">
          <label htmlFor="service">Service of Interest</label>
          <select 
            id="service" 
            name="service" 
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="">Select a service</option>
            <option value="Audio Production">Audio Production</option>
            <option value="Video Production">Video Production</option>
            <option value="Photography">Photography</option>
            <option value="AI Production">AI Production</option>
            <option value="Digital & Development">Digital & Development</option>
            <option value="Motion Graphics / VR / AR">Motion Graphics / VR / AR</option>
            <option value="IBC Intelligence">IBC Intelligence</option>
            <option value="Multiple Services">Multiple Services</option>
            <option value="General Enquiry">General Enquiry</option>
          </select>
        </div>
        
        <div className="fg">
          <label htmlFor="project">Tell Us About Your Project</label>
          <textarea 
            id="project" 
            name="project" 
            rows="4" 
            placeholder="Describe your project, goals, timeline, and any specific requirements..." 
            value={project}
            onChange={(e) => setProject(e.target.value)}
            required 
          />
        </div>
        <div className="mb-3">
        <ReCAPTCHA sitekey="6LeFuosUAAAAAMHGuHM25M14zdNbTz83ADNMG9AE"  onChange={onChange} /> 

        </div>

        <button className="fsub" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Enquiry →'}
        </button>
        
      </form>

      {/* Toast Container placed at the bottom of the component */}
      <ToastContainer 
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}