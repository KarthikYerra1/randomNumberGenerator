import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    ranNum: 0,
  }

  generateRandomNumber = () => {
    const newNum = Math.ceil(Math.random() * 100)
    this.setState({ranNum: newNum})
  }

  render() {
    const {ranNum} = this.state
    const randomNumber = ranNum
    return (
      <div className="bg-container">
        <div className="ran-generator">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the <br /> range of 0 to 100
          </p>
          <button
            className="btn"
            type="button"
            onClick={this.generateRandomNumber}
          >
            Generate
          </button>
          <p className="ranNumber">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
