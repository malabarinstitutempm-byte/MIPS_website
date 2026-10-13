import React from 'react';
import Section from '../../components/common/Section';

const About = () => {
    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            <Section>
                <h1>About MIPS</h1>
                <p>
                    Malabar Institute of Paramedical Science is dedicated to providing high-quality education
                    in the field of paramedical sciences. Our mission is to train competent healthcare professionals
                    who can serve the community with skill and compassion.
                </p>
                <div style={{ marginTop: '2rem' }}>
                    <h2>Our Vision</h2>
                    <p>To be a center of excellence in paramedical education.</p>
                </div>
            </Section>
        </div>
    );
};

export default About;
