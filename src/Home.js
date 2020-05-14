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
            <SectionHero buttonText={`Events`} linkTo={`/events`} heroName="eventHero" header={`Come on in - it's always party time at woody.`} />
            <SectionHero buttonText={`Gallery`} linkTo={`/gallery`} heroName="galleryHero" header={`Say cheese and cheers with good friends and drinks.`} />
        </div>
    )
}

export default Home;