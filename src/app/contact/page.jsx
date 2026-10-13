import React from 'react';
import Section from '../../components/common/Section';
import EnquiryForm from '../../components/sections/EnquiryForm';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            <Section>
                <h1>Contact Us</h1>
                <p>Get in touch with us for admissions and enquiries.</p>

                <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h3>Contact Information</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}><MapPin style={{ flexShrink: 0 }} /> <span>CH Centre Campus, Kozhikode Road, Kizhakethala,<br />Malappuram, Kerala, India, 676519</span></li>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}><Phone style={{ flexShrink: 0 }} /> <span>+91 98955 53764<br />+91 86060 00055</span></li>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><Mail style={{ flexShrink: 0 }} /> malabarinstitutempm@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </Section>
            <EnquiryForm />
        </div>
    );
};

export default Contact;
