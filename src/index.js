import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import store from './store'
import Artists from './components/artists'
import './style/styles.less'

ReactDOM.render(
  <Provider store={store}>
    <Artists />
  </Provider>,
  document.getElementById('app')
)
