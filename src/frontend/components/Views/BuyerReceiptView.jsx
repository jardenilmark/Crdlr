import React from 'react'
import { Segment, Divider, Header, Modal, Grid, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import alertify from 'alertify.js'

const onClickHandler = (func) => {
  alertify.success(`Transaction Completed`, 3)
  func(false)
}

const ReceiptView = (props) => {
  const { receiptLocation, totalPrice, receiptCar, transactionDate, buyerReceiptModal, setBuyerReceiptModalVisibility } = props
  return (
    <Modal dimmer='blurring' open={buyerReceiptModal} basic>
      <Grid textAlign='center' verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: '50%' }}>
          <Segment stacked basic>
            <Segment basic>
              <Header inverted size='huge'>Receipt</Header>
            </Segment>
            <Divider/>
            <Header size='medium' textAlign='left' inverted content={`Date of Transaction: ${transactionDate}`}/>
            <Divider/>
            <Header size='medium' textAlign='left' inverted content={`Location: ${receiptLocation}`}/>
            <Divider/>
            <Header size='medium' textAlign='left' inverted content={`Car: ${receiptCar}`}/>
            <Divider/>
            <Header size='medium' textAlign='left' inverted content={`Total Payment: ₱${totalPrice}`}/>
            <Divider/>
            <Header inverted size='huge'>Thank you for your purchase!</Header>
            <Button fluid as={Link} to={'/SearchView'} onClick={() => onClickHandler(setBuyerReceiptModalVisibility)} inverted color='black'>
              <Icon name='remove' /> BACK
            </Button>
          </Segment>
        </Grid.Column>
      </Grid>
    </Modal>
  )
}

export default ReceiptView
