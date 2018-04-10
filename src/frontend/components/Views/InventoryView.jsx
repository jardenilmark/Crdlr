import React from 'react'
import { Table, Container } from 'semantic-ui-react'
import { isUserError } from '../../errorHandler'
import InventoryHeader from '../../../backend/containers/InvenHeaderContainer'
import InventoryBody from '../../../backend/containers/InvenBodyContainer'
import InventoryFooter from '../../../backend/containers/InvenFooterContainer'
import { setModalArr } from '../../inventoryActions'

class InventoryView extends React.Component {
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
              <InventoryHeader />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <InventoryBody />
          </Table.Body>
          <Table.Footer>
            <InventoryFooter />
          </Table.Footer>
        </Table>
      </Container>
    )
  }
}

export default InventoryView
