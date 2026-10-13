import React from 'react';
import Hero from '../components/sections/Hero';
import Affiliations from '../components/sections/Affiliations';
import ExamPortal from '../components/sections/ExamPortal';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Courses from '../components/sections/Courses';
import Gallery from '../components/sections/Gallery';
import EnquiryForm from '../components/sections/EnquiryForm';

const Home = () => {
    return (
        <>
            <Hero />
            <Affiliations />
            <ExamPortal />
            <WhyChooseUs />
            <Courses />
            <Gallery />
            <EnquiryForm />
        </>
    );
};

export default Home;
