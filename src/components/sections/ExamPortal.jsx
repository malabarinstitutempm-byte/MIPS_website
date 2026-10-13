import React from 'react';
import Section from '../common/Section';
import { GraduationCap, FileCheck, ShieldCheck, ArrowRight } from 'lucide-react';
import './ExamPortal.css';

const ExamPortal = () => {
    return (
        <Section className="exam-portal-section" id="exam-portal">
            <div className="container">
                <div className="exam-portal-card">
                    <div className="exam-portal-content">
                        <div className="exam-portal-badge">
                            <GraduationCap size={18} />
                            <span>Student Examination Services</span>
                        </div>
                        <h2 className="exam-portal-title">
                            MIPS Exam Results Portal
                        </h2>
                        <p className="exam-portal-description">
                            Students of Malabar Institute of Paramedical Science can check their semester results,
                            verify individual subject scores, and access official academic evaluation records directly
                            through our secure online portal.
                        </p>
                        <div className="exam-portal-features">
                            <div className="exam-feature-item">
                                <FileCheck size={20} className="feature-icon" />
                                <span>Instant Results Access</span>
                            </div>
                            <div className="exam-feature-item">
                                <ShieldCheck size={20} className="feature-icon" />
                                <span>Secure Verification</span>
                            </div>
                        </div>
                        <div className="exam-portal-actions">
                            <a
                                href="https://mips-examportal.netlify.app/"
                                className="btn btn-primary exam-portal-btn"
                            >
                                <span>Access Exam Portal</span>
                                <ArrowRight size={18} />
                            </a>
                            <span className="exam-portal-note">
                                Opens official portal in this tab
                            </span>
                        </div>
                    </div>
                    <div className="exam-portal-visual">
                        <div className="portal-visual-inner">
                            <div className="portal-badge-icon">
                                <GraduationCap size={48} />
                            </div>
                            <span className="portal-tag">Official Student Portal</span>
                            <h3 className="portal-visual-title">Exam Results & Scorecards</h3>
                            <div className="portal-url-pill">
                                mips-examportal.netlify.app
                            </div>
                            <p className="portal-subtext">Semester Examinations • Results • Marksheets</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default ExamPortal;
