import React from 'react';
import Section from '../common/Section';
import './Affiliations.css';

const Affiliations = () => {
    return (
        <Section className="affiliations-section">
            <div className="section-header text-center">
                <h2 className="section-title">Our Main Affiliation</h2>
                <div className="section-line"></div>
                <p className="section-subtitle">Partnered with the best to bring you excellence</p>
            </div>

            <div className="affiliations-grid">
                <div className="affiliation-card premium-card">
                    <div className="premium-card-inner">
                        <div className="affiliation-logo-wrapper">
                            {/* We will use the ASAP logo here */}
                            <img src="/asap-logo.png" alt="ASAP Kerala" className="affiliation-logo-img" />
                        </div>
                        <div className="affiliation-content">
                            <h3>ASAP Kerala</h3>
                            <div className="affiliation-badge">Kerala Govt Approved</div>
                            <p>We are proudly affiliated with the Additional Skill Acquisition Programme (ASAP), a Government of Kerala initiative, to deliver top-tier, industry-relevant skill development courses.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Affiliations;
