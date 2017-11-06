import React, { Component } from 'react';
import './App.css';
import CountryContainer from './containers/CountryContainer'
import StateContainer from './containers/StateContainer'

export default class App extends Component {
  render() {
    return (
      <div>
        <CountryContainer />
        <StateContainer />
      </div>
    )
  }
}
