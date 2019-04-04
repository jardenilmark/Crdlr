import React from 'react'
import Item from '../Items/Item'
import { Container, Grid, Divider } from 'semantic-ui-react'
import Dropdown from '../../redux/containers/DropdownContainer'
import Loader from '../../redux/containers/LoaderContainer'

class SearchView extends React.Component {
  componentDidMount () {
    this.intialize()
  }

  async intialize () {
    const { getCars, updateCarList, currentUser } = this.props
    let uid
    try {
      uid = JSON.parse(currentUser).uid
    } catch (e) {
      // do nothing
    }
    await getCars(uid)
    const { allCars } = this.props // separated because of getCars
    updateCarList(allCars)
  }

  renderItems () {
    const { filteredCars } = this.props
    let carArr = []
    let count = 0
    if (filteredCars) {
      carArr = filteredCars
    }
    return carArr.map(e => <Item item={e} key={count++}/>)
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
