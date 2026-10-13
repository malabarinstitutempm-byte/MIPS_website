import React from 'react';
import Section from '../../../components/common/Section';
import { coursesData } from '../../../data/courses';
import { Clock, Award, BookOpen, Briefcase, ChevronRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import './CourseDetail.css';

export async function generateStaticParams() {
    return coursesData
        .flatMap(category => category.items)
        .map(item => ({ slug: item.slug }));
}

export default async function CourseDetail({ params }) {
    const { slug } = await params;

    const course = coursesData
        .flatMap(category => category.items)
        .find(item => item.slug === slug);

    if (!course) {
        return (
            <div className="course-detail-page" style={{ paddingTop: 'var(--header-height)' }}>
                <Section>
                    <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                        <h1>Course Not Found</h1>
                        <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>We could not find the course you are looking for.</p>
                        <Link href="/courses" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>
                            &larr; Back to All Courses
                        </Link>
                    </div>
                </Section>
            </div>
        );
    }

    return (
        <div className="course-detail-page">
            {/* Hero Section */}
            <div className="course-hero" style={{ paddingTop: 'var(--header-height)' }}>
                <img
                    src={course.image}
                    alt={course.title}
                    className="course-hero-bg"
                />
                
                <div className="breadcrumb">
                    <Link href="/">Home</Link> <ChevronRight size={14} style={{display: 'inline', verticalAlign: 'middle'}}/> 
                    <Link href="/courses">Courses</Link> <ChevronRight size={14} style={{display: 'inline', verticalAlign: 'middle'}}/> 
                    <span>{course.title}</span>
                </div>

                <div className="course-hero-overlay">
                    <div className="course-badge">
                        {course.type} Program
                    </div>
                    <h1 className="detail-page-title">
                        {course.title}
                    </h1>
                </div>
            </div>

            <Section>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                    {/* Quick Info Bar */}
                    <div className="quick-info-grid">
                        <div className="info-card">
                            <div className="info-icon-wrapper">
                                <Clock size={28} />
                            </div>
                            <div className="info-content">
                                <h4>Duration</h4>
                                <strong>{course.duration}</strong>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon-wrapper">
                                <Award size={28} />
                            </div>
                            <div className="info-content">
                                <h4>Eligibility</h4>
                                <strong>{course.eligibility}</strong>
                            </div>
                        </div>
                    </div>

                    <div className="course-content-layout">
                        {/* Main Content Area */}
                        <div>
                            <div className="content-section">
                                <h2 className="section-heading">
                                    <BookOpen className="text-primary" size={32} /> About the Course
                                </h2>
                                <p className="section-text">
                                    {course.description}
                                </p>
                            </div>

                            <div className="content-section">
                                <h2 className="section-heading" style={{ marginBottom: '30px' }}>
                                    <CheckCircle2 className="text-primary" size={32} /> Syllabus Highlights
                                </h2>
                                <ul className="syllabus-grid">
                                    {course.syllabus?.map((item, id) => (
                                        <li key={id} className="syllabus-item">
                                            <span className="check-icon">✓</span>
                                            <span className="syllabus-text">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Sticky Sidebar */}
                        <div>
                            <div className="sidebar-sticky">
                                <div className="career-card">
                                    <h3 className="career-heading">
                                        <Briefcase size={28} /> Career Opportunities
                                    </h3>
                                    <ul className="career-list">
                                        {course.career?.map((job, id) => (
                                            <li key={id} className="career-item">
                                                {job}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="apply-button-wrapper">
                                        <Link
                                            href={`/apply?course=${encodeURIComponent(course.title)}`}
                                            className="btn-apply-course"
                                        >
                                            Apply for this Course <ChevronRight size={20} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </Section>
        </div>
    );
}
