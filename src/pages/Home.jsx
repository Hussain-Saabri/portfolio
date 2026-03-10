import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import HelpServices from '../components/HelpServices';
import ProjectGrid from '../components/ProjectGrid';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main>
                <Hero />
                <About />
                <HelpServices />
                <ProjectGrid />
                <ContactForm />
            </main>

            <Footer />
        </div>
    );
};

export default Home;
