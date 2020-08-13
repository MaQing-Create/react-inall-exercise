import React, { Component } from 'react';
import './calculator.less'

class Calculator extends Component {
  state = {
    input: '',
    operator: '',
    number1: '',
    number2: '',
  }

  backToHome = () => {
    this.props.history.push('/')
  }

  setInput = (newInput, isOperator) => {
    this.mySetState('input', newInput)
    if (isOperator) {
      this.mySetState('operator', newInput)
    } else {
      if (this.state.operator === '') {
        this.mySetState('number1', newInput)
      } else {
        this.mySetState('number2', newInput)
      }
    }
  }

  mySetState = (field, newInput) => {
    setTimeout(() => {
      this.setState({
        [field]: this.state[field] + newInput,
      })
    }, 1)
  }

  initState = () => {
    setTimeout(() => {
      this.setState({
        input: '',
        operator: '',
        number1: '',
        number2: '',
      })
    }, 1)
  }

  calculate = () => {
    const number1 = parseInt(this.state.number1)
    const number2 = parseInt(this.state.number2)
    const operator = this.state.operator
    let res = 0
    if (operator === 'x') res = number1 * number2
    if (operator === '+') res = number1 + number2
    if (operator === '-') res = number1 - number2
    this.initState()
    this.mySetState('input', res)
    this.mySetState('number1', res)
  }

  render () {
    console.log(this.state.input)
    console.log(this.state.number1)
    console.log(this.state.number2)
    const numberButtons = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
    return (
      <div className="calculatorPage">
        <h2>在线计算器</h2>
        <div className="calculator">
          <p className='displayScreen'>{this.state.input}</p>
          <div className='buttons'>
            <button key='plus' id='plus' className='operator' disabled={this.state.operator !== ''}
              onClick={() => this.setInput('+', true)}>+
                    </button>
            <button key='minus' id='minus' className='operator' disabled={this.state.operator !== ''}
              onClick={() => this.setInput('-', true)}>-
                    </button>
            <button key='multiply' id='multiply' className='operator' disabled={this.state.operator !== ''}
              onClick={() => this.setInput('x', true)}>x
                    </button>
            {numberButtons.map(button =>
              <button key={button} id={button} className='numberButton'
                onClick={() => this.setInput(button, false)}>{button}</button>)
            }
            <button key='clear' id='clear' className='operator' disabled={this.state.input === ''}
              onClick={this.initState}>clear
                    </button>
            <button key='equal' id='equal' className='operator' disabled={this.state.number2 === ''}
              onClick={this.calculate}>=
                    </button>
          </div>
        </div>
        <p onClick={this.backToHome} className="backToHome">回到主页</p>
      </div>
    )
  }
}

export default Calculator;