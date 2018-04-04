import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../style/App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Algorithms from './Algorithms';
import Calendar from './Calendar';

const App = () => {
  return (
    <Router>
      <div>
      <nav>
        <ul className="navcontainer">
          <li> <Link className="links" to='/'> Home </Link> </li>
          <li> <Link className="links" to='/about'> About </Link> </li>
          <li> <Link className="links" to='/calendar'> Calendar</Link> </li>
          <li className="extra"> <Link className="links" to='/extra'> Extra </Link> </li>
        </ul>
      </nav>
          <Route exact path="/" component= {Home}/>
          <Route exact path="/about" component= {About}/>
          <Route exact path="/calendar" component= {Calendar}/>
          <Route exact path="/extra" component= {Extra}/>
          <Route exact path="/algorithms" component= {Algorithms}/>
        </div>
    </Router>
  )
}

const Home = () => (
  <div className="maincontainer">
  </div>
);

const Extra = () => (
  <div>
    <h2>You Extra</h2>
  </div>
);

const About = () => (
  <div>
    <h2> About </h2>
  </div>
);

export default App;
