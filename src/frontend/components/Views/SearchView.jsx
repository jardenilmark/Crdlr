import React from 'react'
import Item from '../Items/Item'
import { Dimmer, Container, Header, Grid, Segment, Divider, Menu } from 'semantic-ui-react'
import Dropdown from '../../../backend/containers/dropdownContainer'
import Loader from '../../../backend/containers/loaderContainer'

class SearchView extends React.Component {
  async intialize () {
    const { getCars, updateLoader } = this.props
    setTimeout(() => {
      updateLoader(true)
    }, 6000)
    await getCars()
  }

  componentDidMount () {
    this.intialize()
  }

  renderItems () {
    const { allCars, filteredCars } = this.props
    const toRenderArr = []
    let carArr = []
    let count = 0
    if (filteredCars) {
      carArr = filteredCars
    } else if (allCars) {
      carArr = allCars
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
        <Grid style={{marginTop: 1}} columns='equal'>
          <Grid.Row>
            <Grid.Column/>
            <Grid.Column/>
            <Dropdown/>
            <Grid.Column/>
            <Grid.Column/>
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
