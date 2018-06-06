import React from 'react'
import { Dimmer, Loader, Header } from 'semantic-ui-react'

const InventoryHeader = (props) => {
  const { filteredCars, loader } = props
  if (filteredCars.length === 0 && !loader) {
    return (
      <Dimmer active>
        <Loader size='massive' indeterminate>Preparing Selection</Loader>
      </Dimmer>
    )
  } else if (filteredCars.length === 0 && loader) {
    return (
      <Header size='large'>
        No Available Cars
      </Header>
    )
  }
  return <div/>
}

export default InventoryHeader
