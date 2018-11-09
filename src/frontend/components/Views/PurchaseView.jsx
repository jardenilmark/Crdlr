import React from 'react'
import { Container } from 'semantic-ui-react'
import ConfirmationContainer from '../../../backend/containers/ConfirmationContainer'
import BuyerReceiptContainer from '../../../backend/containers/BuyerReceiptContainer'

const PurchaseView = (props) => {
  const { history, num } = props
  let item
  if (history.location.state) {
    item = history.location.state.item
  }
  return (
    <Container fluid style={{height: '100%', background: `url(${require('../../../../public/images/e.png')})`}}>
      <ConfirmationContainer item={item} num={num} />
      <BuyerReceiptContainer />
    </Container>
  )
}

export default PurchaseView
