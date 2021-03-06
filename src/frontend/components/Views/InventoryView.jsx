import React from 'react'
import { Table, Container } from 'semantic-ui-react'
import { isUserError } from '../../helpers/errorHandler'
import InventoryHeader from '../../redux/containers/InvenHeaderContainer'
import InventoryBody from '../../redux/containers/InvenBodyContainer'
import InventoryFooter from '../../redux/containers/InvenFooterContainer'
import { setPeopleModalArr, setReceiptModalArr } from '.../../helpers/inventoryActions'

class InventoryView extends React.Component {
  componentDidMount () {
    this.initialize()
  }

  async initialize () {
    const { getCarsAdvertised, history, currentUser } = this.props
    if (await isUserError(history)) {
      await getCarsAdvertised(JSON.parse(currentUser).uid)
      const { setPeopleModals, cars, setReceiptModals } = this.props
      await setPeopleModalArr(setPeopleModals, cars)
      await setReceiptModalArr(setReceiptModals, cars)
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
