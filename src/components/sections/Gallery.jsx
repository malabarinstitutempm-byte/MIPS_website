'use client';
import React, { useState } from 'react';
import Section from '../common/Section';
import Modal from '../common/Modal';
import './Gallery.css';

// Sample gallery data
const galleryImages = [
    {
        id: 1,
        src: 'https://placehold.co/800x600?text=Campus+Life',
        alt: 'Campus Life',
        caption: 'Vibrant Campus Life'
    },
    {
        id: 2,
        src: 'https://placehold.co/800x600?text=Modern+Labs',
        alt: 'Modern Labs',
        caption: 'State-of-the-art Laboratories'
    },
    {
        id: 3,
        src: 'https://placehold.co/800x600?text=Student+Events',
        alt: 'Student Events',
        caption: 'Annual Cultural Fest'
    },
    {
        id: 4,
        src: 'https://placehold.co/800x600?text=Classrooms',
        alt: 'Classrooms',
        caption: 'Smart Classrooms'
    },
    {
        id: 5,
        src: 'https://placehold.co/800x600?text=Medical+Training',
        alt: 'Medical Training',
        caption: 'Hands-on Medical Training'
    },
    {
        id: 6,
        src: 'https://placehold.co/800x600?text=Convocation',
        alt: 'Convocation',
        caption: 'Graduation Ceremony'
    }
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openLightbox = (image) => {
        setSelectedImage(image);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    return (
        <Section className="gallery-section" id="gallery">
            <div className="section-header text-center">
                <h2 className="section-title">Life at MIPS</h2>
                <div className="section-line"></div>
                <p className="section-subtitle">Glimpses of our campus, facilities, and student activities</p>
            </div>

            <div className="gallery-grid">
                {galleryImages.map((image) => (
                    <div
                        key={image.id}
                        className="gallery-item"
                        onClick={() => openLightbox(image)}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="gallery-image"
                            loading="lazy"
                        />
                        <div className="gallery-overlay">
                            <p className="gallery-caption">{image.caption}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                isOpen={!!selectedImage}
                onClose={closeLightbox}
                title={selectedImage?.caption || "Gallery"}
            >
                {selectedImage && (
                    <div className="gallery-modal-content">
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="modal-gallery-image"
                        />
                        <p className="modal-gallery-caption">{selectedImage.caption}</p>
                    </div>
                )}
            </Modal>
        </Section>
    );
};

export default Gallery;
