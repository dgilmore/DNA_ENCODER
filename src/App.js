import React, { Component } from 'react';
import Encode from './Encode'
import {Menu} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

export default class App extends Component {
  constructor(){
    super()
    this.state = {}
    
  }

handleItemClick = (e, { name }) => this.setState({ activeItem: name })

render() {
  const { activeItem } = this.state
  return (
    <div className="App">
      <Menu>
        <Menu.Item
          name='encode'
          active={activeItem === 'encode'}
          onClick={this.handleItemClick}
        >
          Encode
        </Menu.Item>

        <Menu.Item name='substrings' 
                   active={activeItem === 'substrings'} 
                   onClick={this.handleItemClick}>
          Substrings
        </Menu.Item>

        <Menu.Item
          name='decode'
          active={activeItem === 'decode'}
          onClick={this.handleItemClick}
        >
          Decode
        </Menu.Item>
      </Menu>
      <Encode />
    </div>
  );
 }
}

