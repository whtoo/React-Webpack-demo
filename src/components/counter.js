import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  constructor() {
    super(props)
    this.incrementAsync = this.incrementAsync.bind(this)
    this.incrementIfOdd = this.incrementIfOdd.bind(this)
  }

  static propTypes = {
      value: PropTypes.number.isRequired,
      onIncrement: PropTypes.func.isRequired,
      onDecrement: PropTypes.func.isRequired
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props;
    return {
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
        +
        </button>
        {' '}
        <button onClick={onDecrement}>
        -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd()}>
        incrementIfOdd if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync()}>
        increment async
        </button>
        </p>
    }
  }
}

export default Counter
