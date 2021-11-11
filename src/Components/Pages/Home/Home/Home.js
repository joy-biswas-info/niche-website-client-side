import React from 'react';
import Banner from '../Banner/Banner';
import Places from '../Places/Places';
import Contact from './Contact/Contact';
import "./Home.css"

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <Places></Places>
            <Contact></Contact>
        </main>
    );
};

export default Home;