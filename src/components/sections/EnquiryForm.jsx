'use client';
import React, { useState } from 'react';
import Section from '../common/Section';
import Button from '../common/Button';
import { User, Mail, Phone, BookOpen, MessageSquare } from 'lucide-react';
import './EnquiryForm.css';

const EnquiryForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your enquiry! We will contact you soon.');
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            course: '',
            message: ''
        });
    };

    return (
        <Section className="enquiry-section" id="contact">
            <div className="container enquiry-container">
                <div className="enquiry-content">
                    <h2 className="enquiry-title">Start Your Career Journey Today</h2>
                    <p className="enquiry-text">
                        Have questions about our courses or admission process?
                        Fill out the form and our academic counselors will get in touch with you.
                    </p>
                </div>

                <form className="enquiry-form" onSubmit={handleSubmit}>
                    <h3 className="form-title">Admission Enquiry</h3>

                    <div className="form-group">
                        <div className="input-wrapper">
                            <User className="input-icon" size={20} />
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-wrapper">
                            <Mail className="input-icon" size={20} />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-wrapper">
                            <Phone className="input-icon" size={20} />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-wrapper">
                            <BookOpen className="input-icon" size={20} />
                            <select name="course" value={formData.course} onChange={handleChange} required>
                                <option value="">Select Course</option>
                                <option value="mlt">B.Sc MLT</option>
                                <option value="radiology">B.Sc Radiology</option>
                                <option value="dialysis">Diploma in Dialysis</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-wrapper">
                            <MessageSquare className="input-icon textarea-icon" size={20} />
                            <textarea
                                name="message"
                                placeholder="Message (Optional)"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                            ></textarea>
                        </div>
                    </div>

                    <Button variant="primary" type="submit" className="w-full">Submit Enquiry</Button>
                </form>
            </div>
        </Section>
    );
};

export default EnquiryForm;
