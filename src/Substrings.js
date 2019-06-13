import React, { Component } from 'react'
import {Segment, Form, Header} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default class Substrings extends Component {
    constructor() {
      super()
      this.state = {
        value: '',
        found: ''
      }
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }
    
    handleSubmit = (event) => {
        var input = this.state.value
        var regex = /(a|c|t|g|A|C|T|G){4}/g
        var result = input.search(regex)
        console.log(result)
        this.setState({found: result})
    }

    render() {
        let display
        if(this.state.found === ''){
            display = <h1> </h1>
        }
        else if(this.state.found === -1){
            display = <Header as="h1">No encoded DNA found(-1)</Header>
        } 
        else {
            display = <Header as="h1">Encoded DNA found at zero based index {this.state.found}</Header>
        }
     return (
      <div>
        <Segment>
            <Header as="h1">Search ASCII string for substring that is DNA encoded</Header>
          <Form onSubmit={this.handleSubmit}> 
            <Form.Input placeholder='ASCII STRING' size="big" value={this.state.value} onChange={this.handleChange} />
            <Form.Button type="submit" value="Submit" color="green">SUBMIT</Form.Button>
          </Form>
          <div className="dnaResponse">
             { display }
          </div>
        </Segment>
      </div>  

        )
    }
}