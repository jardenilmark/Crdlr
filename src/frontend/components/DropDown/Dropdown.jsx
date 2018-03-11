import React from 'react'
import { Dropdown } from 'semantic-ui-react'

class Drop extends React.Component {
  constructor (props) {
    super(props)
    this.arr = props.array
    this.name = props.name
  }
  render () {
    return (
      <Dropdown placeholder={this.name} search selection options={this.arr} />
    )
  }
}

export default Drop
