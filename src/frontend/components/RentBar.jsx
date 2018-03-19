import React from 'react'
import { Step, Icon } from 'semantic-ui-react'

class RentBar extends React.Component {
  render () {
    const { activeItem } = this.props
    return (
      <Step.Group widths={3}>
        <Step active={true}>
          <Icon name='car' />
          <Step.Content>
            <Step.Title>Choose Car</Step.Title>
          </Step.Content>
        </Step>
        <Step active={true}>
          <Icon name='add to calendar' />
          <Step.Content>
            <Step.Title>Length Of Use</Step.Title>
          </Step.Content>
        </Step>
        <Step active={false}>
          <Icon name='credit card alternative' />
          <Step.Content>
            <Step.Title>Confirmation</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>
    )
  }
}

export default RentBar
