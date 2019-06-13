import React, { Component } from 'react'
import {Segment, Form, Header} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
export default class Encode extends Component {
    constructor() {
      super()
      this.state = {
        value: '',
        DNA: '',
        type: 'DNA'
      }
    }
  
  
  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  /*convert binary value to DNA sequence*/
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
          if(this.state.type === 'DNA') {
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
  /*find ascii value of each char, convert to binary and call DNA convesion func*/
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

  handleRadio = (e, { value }) => this.setState({ type: value })
  
  render() {
    return (
    <div className="wrapper">
      <Segment>
        <div className="asciiForm">
            <Form onSubmit={this.handleSubmit}>
             <Header as="h1">ASCII STRING TO CONVERT</Header>
             <Header as="h5">Note: You must resubmit if toggled after results produced.</Header>
             <Form.Input placeholder='ASCII STRING' size="big" value={this.state.value} onChange={this.handleChange} />
             <Form.Group inline>
                <Form.Radio
                  label="DNA"
                  name="DNA"
                  value="DNA"
                  checked={this.state.type === 'DNA'}
                  onChange={this.handleRadio}
                />
                <Form.Radio
                  label ="RNA"
                  name="RNA"
                  value="RNA"
                  checked={this.state.type === 'RNA'}
                  onChange={this.handleRadio}
                />
              </Form.Group>
              <Form.Button type="submit" value="Submit" color="green">SUBMIT</Form.Button>
           </Form>
        </div>
          <div className="dnaResponse">
             { this.state.DNA === '' ? <h1> </h1> : <h1>{this.state.DNA}</h1> }
          </div>
      </Segment>
    </div>
    );
   }
  }