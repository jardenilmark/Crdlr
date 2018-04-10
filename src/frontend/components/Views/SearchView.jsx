import React from 'react'
import Item from '../Items/Item'
import { Container, Grid, Divider } from 'semantic-ui-react'
import Dropdown from '../../../backend/containers/DropdownContainer'
import Loader from '../../../backend/containers/LoaderContainer'

class SearchView extends React.Component {
  async intialize () {
    const { getCars, updateLoader, updateCarList } = this.props
    setTimeout(() => {
      updateLoader(true)
    }, 6000)
    await getCars()
    const { allCars } = this.props
    updateCarList(allCars)
  }

  componentDidMount () {
    this.intialize()
  }

  renderItems () {
    const { filteredCars } = this.props
    const toRenderArr = []
    let carArr = []
    let count = 0
    if (filteredCars) {
      carArr = filteredCars
    }
    carArr.forEach(e => {
      toRenderArr.push(<Item item={e} id={count} key={count}/>)
      count++
    })
    return toRenderArr
  }

  render () {
    return (
      <Container fluid>
        <Grid style={{marginTop: 1, marginLeft: 10, marginRight: 10}} columns='equal'>
          <Grid.Row>
            <Dropdown/>
          </Grid.Row>
        </Grid>
        <Divider/>
        <Container fluid textAlign='center'>
          <Loader/>
        </Container>
        <Grid style={{marginTop: 30, marginBottom: 30, paddingLeft: 20, paddingRight: 20}} relaxed>
          {this.renderItems()}
        </Grid>
      </Container>
    )
  }
}

export default SearchView
