import React from 'react';
import Home from './Home';
import Menu from './Menu';
import Events from './Events';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from '../src/components/footer';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/menu" component={Menu} />
          <Route path="/events" component={Events} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
