import React from 'react'
import { FormGroup, MenuItem, ControlLabel, FormControl } from 'react-bootstrap'

class Header extends React.Component {
  render () {
    return (
      <FormGroup controlId="formControlsSelect">
        <ControlLabel>Select</ControlLabel>{' '}
        <FormControl componentClass="select" placeholder="select">
          <option value="select">select</option>
          <option value="other">...</option>
        </FormControl>
      </FormGroup>
    )
  }
}

export default Header
