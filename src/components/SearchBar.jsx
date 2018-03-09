import React from 'react'
import { Panel } from 'react-bootstrap'

class Header extends React.Component {
  render () {
    return (
      <Panel bsStyle="primary">
        <Panel.Heading>
          <Panel.Title componentClass="h3">Panel heading</Panel.Title>
        </Panel.Heading>
        <Panel.Body>Panel content</Panel.Body>
      </Panel>
    )
  }
}

export default Header
