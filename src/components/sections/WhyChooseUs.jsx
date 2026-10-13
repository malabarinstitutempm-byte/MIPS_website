import React from 'react';
import Section from '../common/Section';
import { UserCheck, Zap, Briefcase, IndianRupee } from 'lucide-react';
import './WhyChooseUs.css';

const features = [
    {
        icon: <UserCheck size={32} />,
        title: "Expert Faculty",
        description: "Learn from experienced professionals and industry experts dedicated to your success."
    },
    {
        icon: <Zap size={32} />,
        title: "Modern Labs",
        description: "Train in state-of-the-art laboratories equipped with the latest medical technology."
    },
    {
        icon: <Briefcase size={32} />,
        title: "Job Assistant",
        description: "We provide 100% placement assistance and career guidance to help you secure top jobs."
    },
    {
        icon: <IndianRupee size={32} />,
        title: "Affordable Fees",
        description: "Quality education at affordable fee structures with installment options available."
    }
];

const WhyChooseUs = () => {
    return (
        <Section className="why-choose-us-section" id="why-choose-us">
            <div className="section-header text-center">
                <h2 className="section-title">Why Choose MIPS?</h2>
                <div className="section-line"></div>
                <p className="section-subtitle">We are committed to shaping the future of healthcare professionals</p>
            </div>

            <div className="features-grid">
                {features.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <div className="feature-icon">
                            {feature.icon}
                        </div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-description">{feature.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default WhyChooseUs;
