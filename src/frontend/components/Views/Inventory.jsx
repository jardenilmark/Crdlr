import React from 'react'
import { Label, Popup, Header, Icon, Table, Image, Container, Button } from 'semantic-ui-react'
import { isUserError } from '../../errorHandler'
import InventoryHeader from '../../../backend/containers/invenHeader'
import InventoryBody from '../../../backend/containers/invenBody'
import InventoryFooter from '../../../backend/containers/invenFooter'
import { setModalArr } from '../../inventoryActions'

class Inventory extends React.Component {
  componentDidMount () {
    this.initialize()
  }

  async initialize () {
    const { getCarsAdvertised, history } = this.props
    if (await isUserError(history)) {
      await getCarsAdvertised(JSON.parse(localStorage.getItem('user')).uid)
      const { setPeopleModals, cars } = this.props
      setModalArr(setPeopleModals, cars)
    }
  }

  render () {
    return (
      <Container fluid style={{height: '100%', background: 'grey', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}}>
        <Table color={'black'} celled fixed>
          <Table.Header>
            <Table.Row>
              <InventoryHeader/>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <InventoryBody/>
          </Table.Body>
          <Table.Footer>
            <InventoryFooter/>
          </Table.Footer>
        </Table>
      </Container>
    )
  }
}

export default Inventory
