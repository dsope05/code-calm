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
      <nav>
        <ul className="navcontainer">
          <li className="calm"> <Link className="links" to='/'> Home </Link> </li>
          <li className="about"> <Link className="links" to='/about'> About </Link> </li>
          <li className="code"> <Link className="links" to='/code'> Code </Link> </li>
          <li className="extra"> <Link className="links" to='/extra'> Extra </Link> </li>
        </ul>
      </nav>
          <Route exact path="/" component= {Home}/>
          <Route exact path="/about" component= {About}/>
          <Route exact path="/code" component= {Code}/>
          <Route exact path="/extra" component= {Extra}/>
        </div>
    </Router>
  )
}

const Home = () => (
  <div className="maincontainer">
    <div className="fb-login-button" data-width="250" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="true" data-auto-logout-link="false" data-use-continue-as="false"></div>
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

const Code = () => (
  <div>
    <h2> Code </h2>
  </div>
);
export default App;
