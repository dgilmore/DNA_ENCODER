import React, { Component } from 'react';
import Encode from './Encode'
import './App.css';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
       dnaChecked: '',
       rnaChecked: ''
    }
  }

render() {
  return (
    <div className="App">
      <Encode />
    </div>
  );
 }
}

