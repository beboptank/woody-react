import React from 'react';
import SectionHero from './components/sectionhero';
import './App.scss';

const Home = () => {
    return (
        <div>
            <SectionHero buttonText={`Menu`} href={`/menu`} heroName="menuHero" header={`Refreshing cocktails and beer. Delicious curry.`} />
            <SectionHero buttonText={`Events`} href={`/events`} heroName="eventHero" header={`Come on in - it's always party time at woody.`} />
            <SectionHero buttonText={`Gallery`} href={`/gallery`} heroName="galleryHero" header={`Say cheese and cheers with good friends and drinks.`} />
        </div>
    )
}

export default Home;