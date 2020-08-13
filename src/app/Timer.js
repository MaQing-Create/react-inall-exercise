import React, { Component } from 'react';
import './timer.less'

class Timer extends Component {
  state = {
    time: -1,
  }

  backToHome = () => {
    this.props.history.push('/')
  }

  countDown = () => {
    setTimeout(() => {
      this.setState({
        time: this.state.time - 1,
      })
    }, 1000)
  }

  inputTime = 0;

  inputChange = (event) => {
    this.inputTime = event.target.value;
  }

  timeDisplay = () => {
    if (this.state.time == -1)
      return <p>Start</p>
    if (this.state.time > 0)
      return <p>{this.state.time} 秒</p>
    else return <p>End</p>
  }

  render () {

    if (this.state.time > 0) this.countDown();
    return (
      <div className="timer">
        <h2>在线倒计时器</h2>
        <div className='timerContent'>
          <div className='timerController'>
            <div className='timeInput'>
              <label htmlFor="inputTime">设置时间</label>
              <input type="text" id='inputTime' name='inputTime' className="inputTime" onChange={this.inputChange} /><br />
            </div>
            <button className='starter' disabled={this.state.time > 0}
              onClick={() => this.setState({ time: this.inputTime })}>Start
                </button>
          </div>
          {this.timeDisplay()}
        </div>
        <p onClick={this.backToHome} className="backToHome">回到主页</p>
      </div>
    )
  }
}

export default Timer;