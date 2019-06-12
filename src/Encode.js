import React, { Component } from 'react';

export default class Encode extends Component {
    constructor() {
      super()
      this.state = {
        value: '',
        DNA: '',
        isDNA: true,
        isRNA: false
      }
    }
  
  
  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  encodeDNA = (arr) => {
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
          if(this.state.isDNA) {
             dna += 'T'
          } else {
            dna += 'U'
          }
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
        binary = '0' + binary + '0'
      }
      var dnaArray = []
      dnaArray[0] = binary.slice(0,2)
      dnaArray[1] = binary.slice(2,4)
      dnaArray[2] = binary.slice(4,6)
      dnaArray[3] = binary.slice(6,8)
      dna += this.encodeDNA(dnaArray)
  }
  return dna
}
  
  handleSubmit = (event) => {
    event.preventDefault()
    var input = this.state.value
    this.setState({DNA: this.convertBinary(input)})
  }

  handleRadio = (event) => {
    if(event.target.name === 'DNA'){
      this.setState({isDNA: true, isRNA: false})
    } else {
      this.setState({isRNA: true, isDNA: false})
    }
    console.log(this.state.isDNA + " " + this.state.isRNA)
  }
  
  render() {
    return (
      <div className="wrapper">
        <div className="asciiForm">
       <form onSubmit={this.handleSubmit}>
          <label>
            ASCII STRING TO CONVERT 
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="DNA"
              checked={this.state.isDNA}
              onChange={this.handleRadio}
            />
            DNA
          </label>
          </div>
          <div className="form-check">
          <label>
            <input
              type="radio"
              name="RNA"
              checked={this.state.isRNA}
              onChange={this.handleRadio}
            />
            RNA
          </label>
        </div>
        </div>
        <div className="dnaResponse">
          { this.state.DNA === '' ? <h1> </h1> : <h1>{this.state.DNA}</h1> }
        </div>
      </div>
    );
   }
  }