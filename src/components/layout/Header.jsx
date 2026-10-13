'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '../common/Button';
import './Header.css';


const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const handleApplyClick = () => {
        router.push('/apply');
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <Link href="/" className="logo">
                    <img src="/mips-logo.jpg" alt="MIPS Logo" className="logo-image" style={{ height: '50px', width: 'auto', borderRadius: '50%' }} />
                    <div className="logo-text">
                        <span className="logo-title">MIPS</span>
                        <span className="logo-subtitle">Malabar Institute</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <Link href="/" className="nav-link">Home</Link>
                    <Link href="/about" className="nav-link">About</Link>
                    <Link href="/courses" className="nav-link">Courses</Link>
                    <a href="https://mips-examportal.netlify.app/" className="nav-link">Exam Portal</a>
                    <Link href="/contact" className="nav-link">Contact</Link>
                    <Button variant="primary" className="header-btn" onClick={handleApplyClick}>Apply Now</Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button className="mobile-menu-btn" onClick={toggleMenu}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Navigation */}
                <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                    <Link href="/" className="mobile-nav-link" onClick={toggleMenu}>Home</Link>
                    <Link href="/about" className="mobile-nav-link" onClick={toggleMenu}>About</Link>
                    <Link href="/courses" className="mobile-nav-link" onClick={toggleMenu}>Courses</Link>
                    <a href="https://mips-examportal.netlify.app/" className="mobile-nav-link" onClick={toggleMenu}>Exam Portal</a>
                    <Link href="/contact" className="mobile-nav-link" onClick={toggleMenu}>Contact</Link>
                    <Button variant="primary" onClick={handleApplyClick} className="mobile-btn">Apply Now</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
