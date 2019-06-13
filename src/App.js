import React, { Component } from 'react';
import Encode from './Encode'
import Substrings from './Substrings'
import Mapping from './Mapping'
import {Menu} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      activeItem: 'encode'
    }
    
  }

handleItemClick = (e, { name }) => this.setState({ activeItem: name })

render() {
  let Display
  if(this.state.activeItem === 'encode'){
    Display = <Encode />
  }
  else if(this.state.activeItem === 'substrings'){
    Display = <Substrings/>
  }
  else { 
    Display = <Mapping/>
  }
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
          name='mapping'
          active={activeItem === 'mapping'}
          onClick={this.handleItemClick}
        >
          Mapping 
        </Menu.Item>
      </Menu>
      { Display }
    </div>
  );
 }
}

