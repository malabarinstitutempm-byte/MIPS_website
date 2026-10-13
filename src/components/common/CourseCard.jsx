import React from 'react';
import { Clock, BookOpen, ChevronRight } from 'lucide-react';
import './CourseCard.css';

const CourseCard = ({ title, type, duration, image, badges, onClick }) => {
    return (
        <div className="course-card" onClick={onClick} style={{ cursor: 'pointer' }}>
            <div className="course-image-container">
                <div className="course-type-badge">{type}</div>
                {badges && badges.length > 0 && (
                    <div className="course-badges-overlay">
                        {badges.map((badge, idx) => (
                            <span key={idx} className={`custom-badge custom-badge-${badge.toLowerCase().replace(/\s+/g, '-')}`}>
                                {badge}
                            </span>
                        ))}
                    </div>
                )}
                {image ? (
                    <img src={image} alt={title} className="course-image" />
                ) : (
                    <div className="course-image-placeholder"></div>
                )}
            </div>
            <div className="course-content">
                <h3 className="course-title">{title}</h3>
                <div className="course-meta">
                    <div className="meta-item">
                        <Clock size={16} />
                        <span>{duration}</span>
                    </div>
                    <div className="meta-item">
                        <BookOpen size={16} />
                        <span>Full Time</span>
                    </div>
                </div>
                <div className="course-btn">
                    View Details <ChevronRight size={16} />
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
