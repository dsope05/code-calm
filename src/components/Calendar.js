import React, { Component } from 'react';
import '../style/Calendar.css';

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      startNumber: 0,
      numArray: [],
      selectedDay: 0,
      input: ''
    } 
  }

  clickDay(i) {
    console.log('i', i);
    const newArray = this.state.numArray;
    console.log('blah', newArray[this.state.selectedDay + this.state.startNumber - 1])
    if(this.state.selectedDay && newArray[this.state.selectedDay + this.state.startNumber - 1] !==' ') {
      newArray[this.state.selectedDay + this.state.startNumber - 1] = 'pink';
    }
    newArray[i] = ' ';
    this.setState({numArray: newArray, selectedDay: i - this.state.startNumber + 1});
  }

  reset(){
    //this.makeCalendar(this.state.startNumber); 
    const sup = [];
    for(let i = 0; i < 3; i++) {
      sup.push('white');
    }
    for(let i = 1; i < 30; i++) {
      sup.push('pink');
    } 
    this.setState({numArray: sup});
    //setTimeout(()=> this.setState({numArray: sup}), 3000);
  }
  onSubmit() {
    const newArray = this.state.numArray;
    newArray[this.state.selectedDay + this.state.startNumber - 1] = this.state.input; 
    this.setState({numArray: newArray});
     
  }

  makeCalendar(startNumber) {
    console.log('this', this);
    const numArray = [];
    for(let i = 0; i < startNumber; i++) {
      numArray.push('white');
    }
    for(let i = 1; i < 30; i++) {
      numArray.push('pink');
    } 
    this.setState({numArray: numArray});
  }
  onInput = (e) => {
    this.setState({input: e}); 
  }
  componentWillMount() {
    //const startDay = prompt('Enter Start Day')
    const startDay = 'Friday';
    let startNumber = 0;
    switch(startDay) {
      case 'Tuesday': 
        startNumber = 1;
        break;
      case 'Wednesday': 
        startNumber = 2;
        break;
      case 'Thursday': 
        startNumber = 3;
        break;
      case 'Friday': 
        startNumber = 4;
        break;
      case 'Saturday': 
        startNumber = 5;
        break;
      case 'Sunday': 
        startNumber = 6;
        break;
      default:
        break;
    }
    this.setState({startNumber: startNumber});
    this.makeCalendar(startNumber);
  }

  render() {
    const calendarArray = this.state.numArray.map((val, i) => {
      if (val === 'white') {
        return <div key={i} className="white box"/>
      } else if(val === 'pink') {
        return <div onClick={()=> this.clickDay(i)} key={i} className="pink box"> { i - this.state.startNumber + 1 } </div> 
      } else {
        return <div onClick={()=> this.clickDay(i)} key={i} className="green box"> { i - this.state.startNumber + 1 }
          {val}
          </div> 
      }
    }); 
    const days = 
      <div className="boxContainer">
        <div className="box green">
          Monday
        </div>
        <div className="box green">
          Tuesday 
        </div>
        <div className="box green">
          Wednesday 
        </div>
        <div className="box green">
          Thurday 
        </div>
        <div className="box green">
          Friday 
        </div>
        <div className="box green">
          Saturday 
        </div>
        <div className="box green">
          Sunday 
        </div>
      </div>
      return (
        <div>
          {days}
          <div className="boxContainer">
            {calendarArray}
          </div>
          <button className="resetBtn" onClick={()=> this.reset()}> Reset </button>
          <h2> Make some calendar updates why don't you? </h2>
          Selected Day: {this.state.selectedDay}
          <div>
            <input type="text" onChange={(e)=> this.onInput(e.target.value)}/>
            <div>
              <input type="submit" onClick={()=> this.onSubmit()} value="Submit"/>
            </div>
          </div>
        </div>
      );
  }
}

export default Calendar;
