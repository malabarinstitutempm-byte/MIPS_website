'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Section from '../common/Section';
import CourseCard from '../common/CourseCard';
import CourseCardSkeleton from '../common/CourseCardSkeleton';
import './Courses.css';

import { coursesData } from '../../data/courses';

const Courses = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleCourseClick = (course) => {
        router.push(`/courses/${course.slug}`);
    };

    return (
        <Section className="courses-section" id="courses">
            <div className="section-header text-center">
                <h2 className="section-title">Our Featured Courses</h2>
                <div className="section-line"></div>
                <p className="section-subtitle">Choose from our wide range of paramedical programs</p>
            </div>

            {loading ? (
                // Skeleton UI
                <div className="course-category-group">
                    <h3 className="category-title">
                        <div className="skeleton" style={{ width: '200px', height: '32px', borderRadius: '4px' }}></div>
                    </h3>
                    <div className="courses-grid">
                        {[1, 2, 3].map((item) => (
                            <CourseCardSkeleton key={item} />
                        ))}
                    </div>
                </div>
            ) : (
                // Actual Content
                coursesData.map((category, index) => (
                    <div key={index} className="course-category-group">
                        <h3 className="category-title">{category.category}</h3>
                        <div className="courses-grid">
                            {category.items.map(course => (
                                <CourseCard
                                    key={course.id}
                                    {...course}
                                    onClick={() => handleCourseClick(course)}
                                />
                            ))}
                        </div>
                    </div>
                ))
            )}
        </Section>
    );
};

export default Courses;
