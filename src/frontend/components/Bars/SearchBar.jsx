import React from 'react'
import Dropdown from '../DropDown/Dropdown.jsx'
import { Panel, Form } from 'react-bootstrap'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      array: []
    }
    this.arr = ['Location', 'Brand', 'Type', 'Model']
  }

  async getInfo (para) {
    const response = await fetch(`/getCar/${para}`)
    const result = await response.json()
    const set = new Set()
    result.forEach(obj => {
      set.add(obj[para])
    })
    const arr = this.state.array
    arr.push([...set])
    this.setState({
      array: arr
    })
  }

  async populateState () {
    for (const item of this.arr) {
      await this.getInfo(item.toLowerCase())
    }
  }

  componentDidMount () {
    this.populateState()
  }

  render () {
    const arr = this.state.array
    let count = 0
    return (
      <Panel bsStyle="primary" style={{marginBottom: 0, marginLeft: '20%'}}>
        <Panel.Body>
          <Form inline>
            {arr.map(elem => {
              return <span><Dropdown
                array = {elem}
                name = {this.arr[count++]}
              />{' '}</span>
            })}
          </Form>
        </Panel.Body>
      </Panel>
    )
  }
}

export default Header
