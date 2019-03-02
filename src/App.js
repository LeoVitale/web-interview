import React, { Component } from 'react'
import { hot } from 'react-hot-loader';
import logo from './logo.png'
import Header from './components/blocks/Header';
import { API_ENDPOINT } from './config'

import './App.scss'

class App extends Component {
  componentDidMount() {
    fetch(`${API_ENDPOINT}/users/1`)
      .then(res => res.json())
      .then(() => {
        // TODO: Handle response here
      })
      .catch(() => {
        // TODO: Handle error here
      })
  }

  render() {
    return (
      <div className="app">
        <Header logo={logo}/>
        <h1>This is where your code goes!</h1>
      </div>
    )
  }
}

export default hot(module)(App);
