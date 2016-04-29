import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './Components/Counter'
import counter from './reducer'

const store  = createStore(counter)
const rootEl = document.getElementById('root')

function render() {
  ReactDOM.render(
    <Counter
      value = { store.getState() }
      onIncrement = { () => store.dispacth({ type: INCREMENT})}
      onDecrement = { () => store.dispacth({ type: DECREMENT})}
      />,
    rootEl
  )
}

render()
store.subscribe(render)
