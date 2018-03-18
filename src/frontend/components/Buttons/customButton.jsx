import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

class customButton extends React.Component {
  getButton (arr, action) {
    if (arr.length !== 0) {
      return (
        <Button onClick={(e) => action}>
          <Button.Content>
            <Icon name='search' />
          </Button.Content>
        </Button>
      )
    }
    return <div />
  }

  render () {
    const { arr, getFilteredList } = this.props
    return (
      this.getButton(arr, getFilteredList)
    )
  }
}

export default customButton
