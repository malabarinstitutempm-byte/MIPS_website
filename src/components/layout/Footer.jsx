import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';
import Link from 'next/link';

import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">

                {/* Brand Column */}
                <div className="footer-col">
                    <div className="footer-logo">
                        <img src="/mips-logo.jpg" alt="MIPS" style={{ height: '40px', borderRadius: '50%', marginRight: '10px' }} />
                        <div>
                            <span className="logo-title" style={{ display: 'block', lineHeight: '1' }}>MIPS</span>
                            <span className="logo-subtitle" style={{ display: 'block', fontSize: '0.8rem', opacity: '0.8' }}>Malabar Institute</span>
                        </div>
                    </div>
                    <p className="footer-about">
                        Empowering the next generation of healthcare professionals with world-class paramedical education.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-icon"><Facebook size={20} /></a>
                        <a href="#" className="social-icon"><Instagram size={20} /></a>
                        <a href="https://wa.me/919895553764" className="social-icon" target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-col">
                    <h3 className="footer-heading">Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/courses">Our Courses</Link></li>
                        <li><a href="https://mips-examportal.netlify.app/">Exam Portal</a></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/apply">Admissions</Link></li>
                    </ul>
                </div>



                {/* Contact Info */}
                <div className="footer-col">
                    <h3 className="footer-heading">Contact Us</h3>
                    <ul className="contact-list">
                        <li className="contact-item">
                            <a href="https://www.google.com/maps/search/?api=1&query=Malabar+Institute+of+Paramedical+Science,+Kizhakethala,+Malappuram,+Kerala" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                <MapPin size={20} className="contact-icon" style={{ flexShrink: 0 }} />
                                <span>
                                    CH Centre Campus, Kozhikode Road<br />
                                    Kizhakethala, Malappuram, Kerala, India - 676519
                                </span>
                            </a>
                        </li>
                        <li className="contact-item" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                            <Phone size={20} className="contact-icon" style={{ flexShrink: 0 }} />
                            <div className="phone-links">
                                <a href="tel:+919895553764" className="contact-link">+91 98955 53764</a>
                                <span style={{ margin: '0 8px', opacity: 0.5 }}>|</span>
                                <a href="tel:+918606000055" className="contact-link">+91 86060 00055</a>
                            </div>
                        </li>
                        <li className="contact-item">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=malabarinstitutempm@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                <Mail size={20} className="contact-icon" style={{ flexShrink: 0 }} />
                                <span>malabarinstitutempm@gmail.com</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Malabar Institute of Paramedical Science. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
