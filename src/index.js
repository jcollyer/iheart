import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducers from './reducers'
import router from './router';
import store from './store'
// const appElement = document.getElementById('app')

// function render() {
//   ReactDOM.render(
//     <Home />,
//     appElement
//   )
// }
//
// render()
// store.subscribe(render)

ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('app')
);
