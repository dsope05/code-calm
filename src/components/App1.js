import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../style/App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="container">
            <img src="https://i2.wp.com/www.embodyingman.com/wp-content/uploads/2015/01/yin-yang-sign-21589289.jpg?ssl=1" width='100px' height='100px'/>
           <a className="navbar-brand" href="/"> Code+Calm </a>
            <Link to="/">Home</Link>
            <Link to="/about">Code</Link>
            <Link to="/topics">Exploration</Link>
        </nav>
          <Route exact path="/" component={Home}/>
        </div>
    </Router>
  )
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

export default App;
