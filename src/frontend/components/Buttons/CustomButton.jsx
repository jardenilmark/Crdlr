import React from 'react'
import Button from 'react-bootstrap/lib/Button'
import { bootstrapUtils } from 'react-bootstrap/lib/utils'

bootstrapUtils.addStyle(Button, 'custom')

class CustomButton extends React.Component {
  constructor (props) {
    super(props)
    this.name = props.name
  }

  render () {
    return (
      <b>
        <style type="text/css">{`
        .btn-custom {
            background-color: transparent;
            color: gray;
        }
        `}</style>
        <Button bsStyle="custom">{this.name}</Button>
      </b>
    )
  }
}

export default CustomButton
