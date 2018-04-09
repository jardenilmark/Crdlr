import React from 'react'
import { Dimmer, Loader, Header } from 'semantic-ui-react'

class InventoryHeader extends React.Component {
  getLoader () {
    const { allCars, filteredCars, loader } = this.props
    let arr = []
    if (filteredCars) {
      arr = filteredCars
    } else if (allCars) {
      arr = allCars
    }
    if (arr.length === 0 && !loader) {
      return (
        <Dimmer active>
          <Loader size='massive' indeterminate>Preparing Selection</Loader>
        </Dimmer>
      )
    } else if (arr.length === 0 && loader) {
      return (
        <Header size='large'>
          No Available Cars
        </Header>
      )
    }
    return <div/>
  }

  render () {
    return (
      this.getLoader()
    )
  }
}

export default InventoryHeader
