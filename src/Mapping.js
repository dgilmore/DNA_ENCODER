import React, { Component } from 'react'
import {Segment, Form, Header} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default class Mapping extends Component {
    constructor() {
      super()
      this.state = {
        value: '',
        mapped: ''
      }
    }

    mapToInverse = (input) => {
        var newStr = ''
        for(var i = 0; i < input.length; i++){
            switch(input.charAt(i)){
                case 'G':
                  newStr += 'C'
                  break
                case 'C':
                  newStr += 'G'
                  break
                case 'A':
                  newStr += 'T'
                  break
                case 'T':
                  newStr += 'A'
                  break
                default:
            }
        }
        return newStr
    }

    mapToAscii = (input) => {
        var newStr = ''
        for(var i = 0, j = 3; j < input.length; i += 4, j +=4){
            var temp = input.substring(i,j+1)
            console.log(temp)
            var tempBinary = ''
            for(var k = 0; k < temp.length; k++){
                switch(temp.charAt(k)){
                    case 'C':
                      tempBinary += '10'
                      break
                    case 'G':
                      tempBinary += '01'
                      break
                    case 'T':
                      tempBinary += '11'
                      break
                    case 'A':
                      tempBinary += '00'
                      break
                    default:
                }
            }
            console.log(tempBinary)
            var decimal = parseInt(tempBinary, 2)
            tempBinary = ''
            console.log(decimal)
            newStr += String.fromCharCode(decimal)
        }
        return newStr
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    handleSubmit = () => {
        var inverse = this.mapToInverse(this.state.value)
        var ascii = this.mapToAscii(inverse)
        this.setState({mapped: ascii})
    }

    render() {
        return(
            <div>
                <Segment>
                    <Header as="h1">Enter a string to map to its inverse and convert to ascii</Header>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Input placeholder='DNA STRING' size="big" value={this.state.value} onChange={this.handleChange} />
                  <Form.Button type="submit" value="Submit" color="green">SUBMIT</Form.Button>
                </Form>
                <div className="dnaResponse">
                   { this.state.mapped === '' ? <h1> </h1> : <h1>{this.state.mapped}</h1> }
                </div>
                </Segment>
            </div>
        )
    }
}