import React from 'react'
import { FormGroup, MenuItem, ControlLabel, FormControl } from 'react-bootstrap'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.arr = props.array
    this.name = props.name
  }
  render () {
    return (
      <FormGroup controlId={this.name}>
        <ControlLabel>{this.name}</ControlLabel>{' '}
        <FormControl componentClass="select" placeholder="select">
          {this.arr.map(elem => {
            return <option value={elem}>{elem}</option>
          })}
        </FormControl>
      </FormGroup>
    )
  }
}

export default Header
