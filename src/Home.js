import React from 'react';
import SectionHero from './components/sectionhero';
import Navigation from '../src/components/navigation';
import LogoBanner from '../src/components/logobanner';
import './App.scss';

const Home = () => {
    return (
        <div>
            <Navigation />
            <LogoBanner />
            <SectionHero buttonText={`events`} linkTo={`/events`} heroName="eventHero" header={`In here, it's summer all year round.`} />
            <SectionHero buttonText={`gallery`} linkTo={`/gallery`} heroName="galleryHero" header={`Here's to feeling good all the time.`} />
        </div>
    )
}

export default Home;