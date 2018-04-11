import React from 'react';
import '../style/Counter.css'

class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      sometext: 'this is some text',
      color: ['style1', 'style2', 'style3', 'style4'],
      index: 0,
    } 
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
      index: Math.ceil(Math.random() * 4)
    });
  }

  render() {
    console.log('thisindex', this.state.index);
    return(
      <div>
        Counter
        <div>
          { this.state.sometext }
          <div className={ this.state.color[this.state.index] } style={{fontSize: '40px'}}>
            { this.state.count }
          </div>
          <button onClick={this.increaseCount}> click me </button>
        </div>
      </div>
    ) 
  }
}


export default Counter;
