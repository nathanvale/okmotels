import './bootstrap'
import React from 'react'
import ReactDOM from 'react-dom'
import {AppProviders} from './context'
import App from './pages/app'

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root'),
)
