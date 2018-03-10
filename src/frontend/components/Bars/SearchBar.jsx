import React from 'react'
import Dropdown from '../DropDown/Dropdown.jsx'
import { Panel, Form } from 'react-bootstrap'

class Header extends React.Component {
  render () {
    return (
      <Panel bsStyle="primary">
        <Panel.Body>
          <Form inline>
            <Dropdown />{' '}
            <Dropdown />{' '}
            <Dropdown />{' '}
          </Form>
        </Panel.Body>
      </Panel>
    )
  }
}

export default Header
