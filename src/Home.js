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
            <SectionHero buttonText={`events`} linkTo={`/events`} heroName="eventHero" header={`*party night*`} />
            <SectionHero buttonText={`gallery`} linkTo={`/gallery`} heroName="galleryHero" header={`*say cheese!*`} />
        </div>
    )
}

export default Home;