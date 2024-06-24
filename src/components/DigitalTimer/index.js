// Write your code here

import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  render() {
    return (
      <div className="bg-con">
        <div className="main-con">
          <h1 className="heading">Digital Timer</h1>
          <div className="digital-timer-con">
            <div className="timer-bg-con">
              <div className="timer-pause-con">
                <h1 className="timer">25:00</h1>
                <p className="pause">Paused</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
