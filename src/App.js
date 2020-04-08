import React from 'react';
import LogoBanner from '../src/components/logobanner';
import Navigation from '../src/components/navigation';
import SectionHero from '../src/components/sectionhero';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation right />
      <LogoBanner />
      <SectionHero header={`Refreshing cocktails and beer. Delicious curry.`}/>
      <SectionHero header={`Come on in - it's always party time at woody.`} />
      <SectionHero header={`Say cheese and cheers with good friends and drinks.`} />
    </div>
  );
}

export default App;
