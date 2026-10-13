import React from 'react';
import Section from '../common/Section';
import { Monitor, Book, Truck, Activity } from 'lucide-react';
import './Facilities.css';

const facilitiesData = [
    {
        title: "Smart Classrooms",
        description: "Interactive learning environments with modern audio-visual aids to enhance understanding.",
        icon: <Monitor size={40} />,
        image: "https://placehold.co/600x400?text=Smart+Classroom"
    },
    {
        title: "Advanced Laboratories",
        description: "Fully equipped labs for MLT, Radiology, and Dialysis to provide hands-on practical training.",
        icon: <Activity size={40} />,
        image: "https://placehold.co/600x400?text=Advanced+Lab"
    },
    {
        title: "Digital Library",
        description: "Extensive collection of medical books, journals, and digital resources for research and study.",
        icon: <Book size={40} />,
        image: "https://placehold.co/600x400?text=Library"
    },
    {
        title: "Transportation",
        description: "Safe and convenient bus services for students covering major routes in the district.",
        icon: <Truck size={40} />,
        image: "https://placehold.co/600x400?text=School+Bus"
    }
];

const Facilities = () => {
    return (
        <Section className="facilities-section" id="facilities">
            <div className="section-header text-center">
                <h2 className="section-title">Campus Facilities</h2>
                <div className="section-line"></div>
                <p className="section-subtitle">World-class infrastructure to support your academic journey</p>
            </div>

            <div className="facilities-grid">
                {facilitiesData.map((item, index) => (
                    <div key={index} className="facility-item">
                        <div className="facility-image">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className="facility-content">
                            <div className="facility-icon">
                                {item.icon}
                            </div>
                            <h3 className="facility-title">{item.title}</h3>
                            <p className="facility-description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Facilities;
