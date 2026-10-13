'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '../common/Button';
import dynamic from 'next/dynamic';
import './Hero.css';

const HeroScene = dynamic(() => import('../Three/HeroScene'), { ssr: false });

const Hero = () => {
    const router = useRouter();

    return (
        <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
            <HeroScene />
            <div className="hero-overlay" style={{ zIndex: 1, pointerEvents: 'none' }}></div>
            <div className="container hero-content" style={{ position: 'relative', zIndex: 2 }}>
                <h1 className="hero-title">
                    Building Careers in <span className="highlight">Healthcare</span>
                </h1>
                <p className="hero-subtitle">
                    Join MIPS to pursue excellence in paramedical sciences.
                    Affiliated with Kerala Govt Approved ASAP Courses.
                </p>
                <div className="hero-actions">
                    <Button variant="primary" className="hero-btn-primary" onClick={() => router.push('/apply')}>Apply Now</Button>
                    <Button variant="outline-white" className="hero-btn-secondary" onClick={() => router.push('/courses')}>Explore Courses</Button>
                    <a href="https://mips-examportal.netlify.app/" className="btn btn-outline-white hero-btn-portal">Exam Portal</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
