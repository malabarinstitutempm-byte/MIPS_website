import React from 'react';

const Section = ({ children, className = '', id = '' }) => {
    return (
        <section id={id} className={`section ${className}`}>
            <div className="container">
                {children}
            </div>
        </section>
    );
};

export default Section;
