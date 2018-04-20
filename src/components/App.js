import React, { Component } from 'react';
import '../style/App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Algorithms from './Algorithms';
import Calendar from './Calendar';
import Counter from './Counter';
import Rating from './Rating';

const App = () => {
  return (
    <Router>
      <div>
      <nav>
        <ul className="navcontainer">
          <li> <Link className="links" to='/'> Home </Link> </li>
          <li> <Link className="links" to='/about'> About </Link> </li>
          <li> <Link className="links" to='/calendar'> Calendar</Link> </li>
          <li> <Link className="links" to='/algorithms'> Algorithms</Link> </li>
          <li> <Link className="links" to='/rating'> Rating </Link> </li>
          <li> <Link className="links" to='/counter'> Counter</Link> </li>
          <li className="extra"> <Link className="links" to='/extra'> Extra </Link> </li>
        </ul>
      </nav>
          <Route exact path="/" component= {Rating}/>
          <Route exact path="/about" component= {About}/>
          <Route exact path="/calendar" component= {Calendar}/>
          <Route exact path="/extra" component= {Extra}/>
          <Route exact path="/algorithms" component= {Algorithms}/>
          <Route exact path="/counter" component= {Counter}/>
          <Route exact path="/rating" component= {Rating}/>
        </div>
    </Router>
  )
}

const Home = () => (
  <div className="maincontainer">
    This is my home
    <div> hi HOW ARE YOU </div> 
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
