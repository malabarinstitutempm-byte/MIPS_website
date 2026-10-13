'use client';
import React, { useState } from 'react';
import Section from '../../components/common/Section';
import Button from '../../components/common/Button';
import { User, Mail, Phone, BookOpen, Award, MessageSquare } from 'lucide-react';
import './Apply.css';

const Apply = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        qualification: '',
        message: ''
    });
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResult("Sending Application...");

        try {
            const formDataObj = new FormData();
            formDataObj.append("access_key", "56715e16-4f21-409f-a279-f86393019c76");
            formDataObj.append("subject", `New Admission: ${formData.name} - ${formData.course}`);
            formDataObj.append("from_name", "MIPS Admissions Portal");
            formDataObj.append("replyto", formData.email);
            // Web3Forms uses the exact casing passed to map into its dashboard columns.
            // When fields match exactly what Web3Forms expects, they don't get duplicated.
            formDataObj.append("Name", formData.name);
            formDataObj.append("Email", formData.email);
            formDataObj.append("Phone", formData.phone);
            formDataObj.append("Course", formData.course);
            formDataObj.append("Qualification", formData.qualification);
            if (formData.message) {
                formDataObj.append("Message", formData.message);
            }

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataObj
            });

            const data = await response.json();

            if (data.success) {
                setResult("Application submitted successfully!");
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    course: '',
                    qualification: '',
                    message: ''
                });
                
                // Clear success message after 5 seconds
                setTimeout(() => {
                    setResult("");
                }, 5000);
            } else {
                console.log("Error", data);
                setResult(data.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error(error);
            setResult("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="apply-page">
            <Section>
                <div className="apply-container">
                    <div className="apply-header text-center">
                        <h1>Apply for Admission</h1>
                        <p>Start your journey in healthcare with MIPS. Fill out the form below to apply.</p>
                    </div>

                    <form className="apply-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <div className="input-wrapper">
                                <User className="input-icon" size={20} />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your full name"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <div className="input-wrapper">
                                    <Mail className="input-icon" size={20} />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <div className="input-wrapper">
                                    <Phone className="input-icon" size={20} />
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="+91 98955 53764"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="course">Course Interested In</label>
                                <div className="input-wrapper">
                                    <BookOpen className="input-icon" size={20} />
                                    <select
                                        id="course"
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select a Course</option>
                                        <optgroup label="Degree Programs">
                                            <option value="BSc MLT">BSc Medical Laboratory Technology</option>
                                            <option value="BSc MIT">BSc Medical Imaging Technology</option>
                                            <option value="BSc Dialysis">BSc Dialysis Technology</option>
                                        </optgroup>
                                        <optgroup label="Diploma Programs">
                                            <option value="DMLT">DMLT</option>
                                            <option value="DRIT">DRIT</option>
                                            <option value="Diploma Dialysis">Diploma in Dialysis</option>
                                            <option value="Hospital Admin">Diploma in Hospital Administration</option>
                                            <option value="Nursing">Nursing</option>
                                            <option value="Pharmacy Assistant">Pharmacy Assistant</option>
                                            <option value="Diploma OT AT">Diploma in OT & AT</option>
                                            <option value="GNM">GNM</option>
                                            <option value="ANM">ANM</option>
                                        </optgroup>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="qualification">Highest Qualification</label>
                                <div className="input-wrapper">
                                    <Award className="input-icon" size={20} />
                                    <select
                                        id="qualification"
                                        name="qualification"
                                        value={formData.qualification}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Qualification</option>
                                        <option value="10th">10th Standard</option>
                                        <option value="12th Science">12th Science</option>
                                        <option value="12th Other">12th Other Stream</option>
                                        <option value="Graduate">Graduate</option>
                                        <option value="Post Graduate">Post Graduate</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Additional Message (Optional)</label>
                            <div className="input-wrapper">
                                <MessageSquare className="input-icon textarea-icon" size={20} />
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Any specific queries or details..."
                                ></textarea>
                            </div>
                        </div>

                        <Button type="submit" variant="primary" className="submit-btn" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Submit Application"}
                        </Button>
                        
                        {result && (
                            <div className={`form-result ${result.includes('success') ? 'success' : 'error'}`} style={{ 
                                marginTop: '20px', 
                                padding: '15px', 
                                borderRadius: '8px', 
                                textAlign: 'center',
                                fontWeight: 'bold',
                                backgroundColor: result.includes('success') ? '#d4edda' : '#f8d7da',
                                color: result.includes('success') ? '#155724' : '#721c24'
                            }}>
                                {result}
                            </div>
                        )}
                        <p className="form-note">
                            Note: Your details will be sent directly to our admissions team. We will get back to you shortly.
                        </p>
                    </form>
                </div>
            </Section>
        </div>
    );
};

export default Apply;
