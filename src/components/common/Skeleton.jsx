import React from 'react';
import './Skeleton.css';

const Skeleton = ({ width, height, borderRadius = '4px', className = '', style = {} }) => {
    return (
        <div
            className={`skeleton ${className}`}
            style={{
                width: width,
                height: height,
                borderRadius: borderRadius,
                ...style
            }}
        ></div>
    );
};

export default Skeleton;
