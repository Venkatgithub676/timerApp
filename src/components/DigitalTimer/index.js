// Write your code here

import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {isStarted: false, timerValue: 25, min: 25, secs: 0}

  componentDidMount() {
    const {secs, mins} = this.state
    let sec = 10

    this.timerId = setInterval(() => {
      if (sec <= 9 && sec >= 0) {
        const sec1 = `0${sec}`
        this.setState({secs: sec1})
        sec -= 1
      } else {
        sec -= 1
        this.setState({secs: sec})
        console.log(sec)
      }
    }, 1000)
  }

  onClickStart = () => {
    const {isStarted} = this.state
    this.setState({isStarted: !isStarted})
  }

  onResetBtn = () => {
    this.setState({isStarted: false})
  }

  onDecrement = () => {
    const {timerValue, min, isStarted} = this.state
    if (!isStarted) {
      this.setState({timerValue: timerValue - 1, min: min - 1})
    }
  }

  onIncrement = () => {
    const {timerValue, min, isStarted} = this.state
    if (!isStarted) {
      this.setState({timerValue: timerValue + 1, min: min + 1})
    }
  }

  render() {
    const {isStarted, timerValue, min, secs} = this.state
    const startOrPause = isStarted ? 'Pause' : 'Start'
    const runningOrPaused = isStarted ? 'Running' : 'Paused'
    return (
      <div className="bg-con">
        <div className="main-con">
          <h1 className="heading">Digital Timer</h1>
          <div className="digital-timer-con">
            <div className="timer-bg-con">
              <div className="timer-pause-con">
                <h1 className="timer">
                  {min}:{secs}
                </h1>
                <h1 className="pause">{runningOrPaused}</h1>
              </div>
            </div>
            <div>
              <div className="start-btn-con">
                <button
                  type="button"
                  className="start-btn"
                  onClick={this.onClickStart}
                  id="startBtn"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png "
                    alt="play icon"
                    className="start-img"
                    id="start-img"
                  />
                </button>
                <label htmlFor="startBtn" className="labels">
                  {startOrPause}
                </label>
                <button
                  type="button"
                  id="resetBtn"
                  onClick={this.onResetBtn}
                  className="start-btn"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                    id="start-img"
                    className="start-img"
                  />
                </button>
                <label htmlFor="resetBtn" className="labels">
                  Reset
                </label>
              </div>
              <div className="set-timer-limit-con">
                <h1 className="set-timer-heading">Set Timer Limit</h1>
                <div className="timer-min-max-con">
                  <button
                    onClick={this.onDecrement}
                    type="button"
                    className="min"
                  >
                    -
                  </button>
                  <p className="timer-fix">{timerValue}</p>
                  <button
                    onClick={this.onIncrement}
                    type="button"
                    className="max"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
