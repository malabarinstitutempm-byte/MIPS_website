import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    const phoneNumber = "919895553764"; // Replace with actual number
    const message = "Hello, I would like to know more about MIPS courses.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
        >
            <MessageCircle size={32} />
        </a>
    );
};

export default WhatsAppButton;
