import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import normalBaby from './assets/unadulterated-hoglette.png'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'

// is there a way we could associate eye color string values with images? 
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

export default class BabyHog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      image: normalBaby,
      weight: 100
    }
  }

  changeWeight = (e) => {
    const newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
    this.setState({
      weight: newWeight
    })
  }

  changeImage = () => {
    if (this.props.eyeColor === "blue") {
      return BlueBaby
    } else if (this.props.eyeColor === "glowing") {
      return GlowingBaby
    } else {
      return SunBaby
    }
  }

  render() {
    return (
      <li className="hogbabies">
        <h1>{this.props.name}</h1>
        <h3>Weight:</h3>
        <h3>{this.props.hobby}</h3>
        <h4>{this.props.eyeColor}</h4>
          
        <Button onClick={this.changeWeight} name="+">
          Increase Weight {this.state.weight}
        </Button>
        <Button onClick={this.changeWeight} name="-">
          Decrease Weight {this.state.weight}
        </Button>

        <div className="hb-wrap">
          <img src={this.changeImage()} style={{height: '200px'}} alt="MasterBlasterJrJr" />
        </div>
        
      </li>
    )
  }
}
