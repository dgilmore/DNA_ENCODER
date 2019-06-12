import React, { Component } from 'react';

export default class Encode extends Component {
    constructor() {
      super()
      this.state = {
        value: '',
        DNA: '',
        DNA_ARR: [],
      }
    }
  
  
  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  encodeDNA = (arr) => {
   /*const {DNA_ARR} = this.state*/
   var dna = ''
    for(var j = 0; j < arr.length; j++){
      switch(arr[j]){
        case '00':
          dna += 'A'
          break
        case '01':
          dna += 'G'
          break
        case '10':
          dna += 'C'
          break
        case '11':
          dna += 'T'
          break
        default:
       }
   }
   return dna
  }

  convertBinary = (input) => {
    var dna = ''
    for(var i = 0; i < input.length; i++){
      var ascii = input.charAt(i).charCodeAt(0)
      var binary = ascii.toString(2)
      if(binary.length === 7){
        binary += '0'
      } 
      else if(binary.length === 6){
        binary += '00'
      }
      var dnaArray = []
      var first = binary.slice(0,2)
      var second = binary.slice(2,4)
      var third = binary.slice(4,6)
      var forth = binary.slice(6,8)
      dnaArray[0] = first
      dnaArray[1] = second
      dnaArray[2] = third
      dnaArray[3] = forth
     /* this.setState({DNA_ARR: dnaArray})*/
      dna += this.encodeDNA(dnaArray)
  }
  return dna
}
  
  handleSubmit = (event) => {
    event.preventDefault()
    var input = this.state.value
    this.setState({DNA: this.convertBinary(input)})
  }
  
  render() {
    return (
      <div className="wrapper">
        <div className="asciiForm">
       <form onSubmit={this.handleSubmit}>
          <label>
            ASCII STRING TO CONVERT TO DNA
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
        <div className="dnaResponse">
          { this.state.DNA === '' ? <h1> </h1> : <h1>{this.state.DNA}</h1> }
        </div>
      </div>
    );
   }
  }