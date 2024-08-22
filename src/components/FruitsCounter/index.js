// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onIncreaseBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  onIncreaseMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  render() {
    const {banana, mango} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1>
            Bob ate <span className="dynamic-text">{mango}</span> Mangoes
            <span className="dynamic-text"> {banana}</span> bananas
          </h1>
          <div className="img-button-container">
            <div className="con1 common-img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img1 img"
              />
              <button className="button" onClick={this.onIncreaseMango}>
                Eat Mango
              </button>
            </div>
            <div className="con2 common-img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img2 img"
              />
              <button className="button" onClick={this.onIncreaseBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
