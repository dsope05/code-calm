import React from 'react';
import '../style/Rating.css'

class Rating extends React.Component {
  constructor() {
    super()
    this.state = {
      colors: ['white', 'white', 'white', 'white', 'white'] 
    } 
  }
  randomColor = () => {
    const colorArray = ['gold', 'maroon', 'orange', 'pink']; 
    const randomIndex = Math.floor(Math.random()*4)
    return colorArray[randomIndex]
  }
  doClick = (e) => {
    const newColorArray = [];
    for(let i = 0; i < 5; i++) {
      if (i <= e.target.id) newColorArray.push(this.randomColor()) 
      if (i > e.target.id) newColorArray.push('white')
    }
    this.setState({colors: newColorArray});
  }

  render() {
    const stars = this.state.colors.map((val, i)=> {
        return <div id={i} key={i} onClick={this.doClick} className={`${val} star`}> </div>
    });


    return(
      <div>
        {stars}
      </div>
    ) 
  }
}


export default Rating;
