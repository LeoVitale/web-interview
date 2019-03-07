import React from 'react'
import { render } from 'react-dom'
import configureStore from './redux/storeConfig'
import { Provider } from 'react-redux'
import 'normalize.css'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

const store = configureStore()

const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp)
}

renderApp()
registerServiceWorker()
