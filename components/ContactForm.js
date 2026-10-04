"use client";

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
// Assuming you are using react-toastify based on your snippet
import { toast } from 'react-toastify'; 

export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('');
  const [project, setProject] = useState('');

  const notify = () => toast("Email sent successfully!");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_qndsxyv';
    const templateId = 'template_y8vc6mo';
    const publicKey = 'uo5jzZ8z_im3yAOGc';

    // Map your form fields to your EmailJS variables
    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      to_name: 'IBC',
      subject: service || 'General Enquiry',
      mobile: phone,
      message: `Company: ${company || 'N/A'}\n\nProject Details:\n${project}`,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully', response);
        notify();
        
        // Reset form after successful submission
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setCompany('');
        setService('');
        setProject('');
      })
      .catch((error) => {
        console.error('Error sending email', error);
        toast.error('Failed to send email. Please try again.');
      });
  };

  return (
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
      
      <button className="fsub" type="submit">
        Send Enquiry →
      </button>
      
      <p className="form-status" role="status" aria-live="polite" />
    </form>
  );
}