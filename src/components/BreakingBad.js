import React, { Component } from 'react';
import '../style/BreakingBad.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import generateAlgorithmsContainer from '../containers/Algorithms';
import breakingbad from '../algorithmHelper/breakingbad';

class BreakingBadComponent extends Component {
  constructor() {
    super();
    this.state = {
      inputString: '',
      bbArray:[] 
    };
  }
  handleInput = (e) => {
    this.setState({inputString: e.target.value}) 
  }

  handleClick = () => {
    const bbString = breakingbad(this.state.inputString); 
    const newArray = this.state.bbArray; 
    newArray.push(bbString);
    this.setState({ bbArray: newArray });
  }
  render() {
    const bbArray = this.state.bbArray.map((val, i)=>
      <div> { val } </div>   
    )
    return (
      <div>
        <h4> Breaking Bad Algorithm </h4>
        <h6> Input String </h6>
        <input onChange={this.handleInput}/>
        <button onClick={this.handleClick}> Submit </button>
        <h6> Breaking Bad Strings! </h6>
        {bbArray}
      </div>
    ) 
  }
}

const BreakingBad = generateAlgorithmsContainer(BreakingBadComponent);
export default BreakingBad;

