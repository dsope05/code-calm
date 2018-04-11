import React, { Component } from 'react';
import '../style/Algorithms.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import generateAlgorithmsContainer from '../containers/Algorithms';
import BreakingBad from './BreakingBad';

const Algorithms = () => {
  return (
    <div>
      <BreakingBad/>
    </div>
  ) 
}

const AlgorithmsContainer = generateAlgorithmsContainer(Algorithms);
export default AlgorithmsContainer;

