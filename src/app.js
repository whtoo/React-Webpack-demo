import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'
import { INCREMENT, DECREMENT } from './constants'
const store  = createStore(counter)
const rootEl = document.getElementById('root')

function render() {
  ReactDOM.render(
    <Counter
      value = { store.getState() }
      enabled = { store.getState() > 0 ? false : true}
      onIncrement = { () => store.dispatch({ type: INCREMENT})}
      onDecrement = { () => store.dispatch({ type: DECREMENT})}
      />,
    rootEl
  )
}

render()
store.subscribe(render)
