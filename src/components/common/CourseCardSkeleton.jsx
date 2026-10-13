import React from 'react';
import Skeleton from './Skeleton';
import './CourseCard.css'; // Reusing CourseCard styles for layout

const CourseCardSkeleton = () => {
    return (
        <div className="course-card">
            <div className="course-image-container">
                <Skeleton width="100%" height="100%" borderRadius="0" />
            </div>
            <div className="course-content">
                {/* Title */}
                <Skeleton width="80%" height="24px" style={{ marginBottom: '15px' }} />

                {/* Meta Items (Duration & Type) */}
                <div className="course-meta">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Skeleton width="16px" height="16px" borderRadius="50%" />
                        <Skeleton width="60px" height="14px" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Skeleton width="16px" height="16px" borderRadius="50%" />
                        <Skeleton width="60px" height="14px" />
                    </div>
                </div>

                {/* Button */}
                <Skeleton width="100%" height="40px" borderRadius="8px" style={{ marginTop: 'auto' }} />
            </div>
        </div>
    );
};

export default CourseCardSkeleton;
