// Write your code here

import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {isStarted: false, timerValue: 25, min: 25, secs: 60}

  componentDidMount() {
    this.timerId = setInterval(() => {
      let {secs, min, isStarted, timerValue} = this.state

      if (isStarted) {
        secs -= 1
        if (secs === 0) {
          secs = 60
        }
        if (secs === 59) {
          min -= 1
        }
      }
      if (min === 0 && secs === 60) {
        clearInterval(this.timerId)
        isStarted = false
        timerValue = 25
        console.log(min, secs)
      }
      console.log(isStarted)
      this.setState({secs, min, isStarted, timerValue})
    }, 1000)

    // console.log(isStarted)
  }

  onClickStart = () => {
    const {isStarted} = this.state
    this.setState({isStarted: !isStarted})
  }

  onResetBtn = () => {
    clearInterval(this.timerId)
    this.setState({isStarted: false, secs: 60, min: 25, timerValue: 25})
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
    const {isStarted, timerValue, min} = this.state
    let {secs} = this.state
    const startOrPause = isStarted ? 'Pause' : 'Start'
    const runningOrPaused = isStarted ? 'Running' : 'Paused'
    const playOrPauseIcon = isStarted ? 'pause icon' : 'play icon'
    const playOrPauseImg = isStarted
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png '
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png '
    if (secs === 60) {
      secs = `0${0}`
    }
    if (secs <= 9 && secs > 0) {
      secs = `0${secs}`
    }
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
                <p className="pause">{runningOrPaused}</p>
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
                    src={playOrPauseImg}
                    alt={playOrPauseIcon}
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
                <p className="set-timer-heading">Set Timer Limit</p>
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
