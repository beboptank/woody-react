import React from 'react';
import LogoBanner from '../src/components/logobanner';
import Navigation from '../src/components/navigation';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation right />
      <LogoBanner />
    </div>
  );
}

export default App;
