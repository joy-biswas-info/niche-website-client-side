import React from 'react';
import Banner from '../Banner/Banner';
import Places from '../Places/Places';
import Reviews from '../Review/Reviews';
import Contact from './Contact/Contact';
import "./Home.css"

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <Places></Places>
            <Reviews></Reviews>
            <Contact></Contact>
        </main>
    );
};

export default Home;