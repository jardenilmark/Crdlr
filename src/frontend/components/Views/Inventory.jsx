import React from 'react'
import { Popup, Header, Icon, Table, Image, Container, Button } from 'semantic-ui-react'
import { getCollection, deleteCollection } from '../../firestoreActions'
import { storage } from '../../../backend/database'
import swal from 'sweetalert'

class Inventory extends React.Component {
  componentDidMount () {
    const { getCarsAdvertised } = this.props
    getCarsAdvertised(JSON.parse(localStorage.getItem('user')).uid)
  }

  getHeaders () {
    const { cars } = this.props
    if (cars && cars.length > 0) {
      const toRender = []
      let count = 0
      toRender.push(<Table.HeaderCell key={count++}/>)
      for (const key in cars[0]) {
        if (key !== 'ImageId' && key !== 'Id') {
          toRender.push(<Table.HeaderCell key={count++}>{key}</Table.HeaderCell>)
        }
      }
      return toRender
    }
  }

  async onClickHandler (imageId, id) {
    const { getCarsAdvertised } = this.props
    const option = swal({
      title: "Warning!",
      text: "You will be charged a 2% cancellation fee if you wish to continue",
      icon: "warning",
      buttons: true,
      dangerMode: true
    })
    if (await option) {
      const confirmation = swal("Advertisment has been cancelled!", {
        icon: "success"
      })
      if (await confirmation) {
        deleteCollection('cars', id)
        storage.ref().child(`cars/${imageId}`).delete()
        getCarsAdvertised(JSON.parse(localStorage.getItem('user')).uid)
      }
    }
  }

  async loadImage (id, imageId) {
    const url = await storage.ref().child(`cars/${imageId}`).getDownloadURL()
    const imgURL = document.getElementById(id)
    if (imgURL) {
      imgURL.src = url
    }
  }

  getRowContents (num) {
    const { cars } = this.props
    if (cars && cars.length > 0) {
      const toRender = []
      let count = 0
      const imageKey = `${count}${cars[num]['ImageId']}`
      const child = `${cars[num]['ImageId']}`
      toRender.push(<Table.Cell key={count++}><Image id={imageKey} rounded size='small' src={this.loadImage(imageKey, child)}/></Table.Cell>)
      for (const key in cars[num]) {
        const obj = cars[num][key]
        if (obj === 'true') {
          toRender.push(<Table.Cell key={count++}><Icon color='green' name='checkmark' size='large' /></Table.Cell>)
        } else if (obj === 'false') {
          const imageId = cars[num]['ImageId']
          const id = cars[num]['Id']
          toRender.push(
            <Table.Cell key={count++}>
            <Popup trigger={<Icon color='red' name='close' size='large' onClick={() => this.onClickHandler(imageId, id)}/>}
              content='**Click on this icon to cancel advertisment'/>
            </Table.Cell>
          )
        } else {
          if (key !== 'ImageId' && key !== 'Id') {
            toRender.push(<Table.Cell key={count++}>{obj}</Table.Cell>)
          }
        }
      }
      return toRender
    }
  }

  getBodyContents () {
    const { cars } = this.props
    if (cars && cars.length > 0) {
      const toRender = []
      let count = 0
      for (let i = 0; i < cars.length; i++) {
        toRender.push(<Table.Row key={count++}>{this.getRowContents(i)}</Table.Row>)
      }
      return toRender
    }
  }

  getFooterContents () {
    const { cars } = this.props
    if (cars && cars.length > 0) {
      const renderEmptyRows = []
      const toRender = []
      let count = 0
      for (let i = 0; i < Object.keys(cars[0]).length - 3; i++) {
        renderEmptyRows.push(<Table.HeaderCell key={count++}/>)
      }
      toRender.push(
        <Table.Row key={count++}>{renderEmptyRows}
          <Table.HeaderCell>Number Sold:</Table.HeaderCell>
          <Table.HeaderCell>{this.getNumberSold()}</Table.HeaderCell>
        </Table.Row>
        )
      return toRender
    }
  }

  getNumberSold () {
    const { cars } = this.props
    let numSold = 0
    cars.forEach(e => {
      for (const key in e) {
        if (key === 'Sold' && e[key] === true) {
          numSold++
        }
      }
    })
    return numSold
  }
  render () {
    return (
      <Container fluid style={{height: '100%', background: 'grey', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}}>
        <Table color={'black'} celled fixed>
          <Table.Header>
            <Table.Row>
              {this.getHeaders()}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.getBodyContents()}
          </Table.Body>
          <Table.Footer>
            {this.getFooterContents()}
          </Table.Footer>
        </Table>
      </Container>
    )
  }
}

export default Inventory
