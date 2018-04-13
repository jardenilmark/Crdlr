import React from 'react'
import { Segment, Divider, Header, Modal, Container, Grid, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import alertify from 'alertify.js'

class ReceiptView extends React.Component {
  componentDidMount () {
    const { receiptCar, history } = this.props
    if (!receiptCar) {
      swal('Error!', 'No Item Purchased!', 'error')
      history.push('/SearchView')
    }
  }

  showAlertify () {
    alertify.success(`Transaction Completed`, 3)
  }

  render () {
    const { receiptName, receiptLocation, receiptEmail, totalPrice, receiptCar, transactionDate } = this.props
    return (
      <Container fluid style={{height: '100%', background: `url(${require('../../../../public/images/e.png')})`}}>
        <Modal dimmer='blurring' open basic>
          <Grid textAlign='center' verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: '50%' }}>
              <Segment stacked basic>
                <Segment basic>
                  <Header inverted size='huge'>Receipt</Header>
                </Segment>
                <Divider/>
                <Header size='medium' textAlign='left' inverted content={`Date of Transaction: ${transactionDate}`}/>
                <Divider/>
                <Header size='medium' textAlign='left' inverted content={`Name: ${receiptName}`}/>
                <Divider/>
                <Header size='medium' textAlign='left' inverted content={`Email: ${receiptEmail}`}/>
                <Divider/>
                <Header size='medium' textAlign='left' inverted content={`Location: ${receiptLocation}`}/>
                <Divider/>
                <Header size='medium' textAlign='left' inverted content={`Car: ${receiptCar}`}/>
                <Divider/>
                <Header size='medium' textAlign='left' inverted content={`Total Payment: ₱${totalPrice}`}/>
                <Divider/>
                <Header inverted size='huge'>Thank you for your purchase!</Header>
                <Button fluid as={Link} to={'/SearchView'} onClick={() => this.showAlertify()} inverted color='black'>
                  <Icon name='remove' /> BACK
                </Button>
              </Segment>
            </Grid.Column>
          </Grid>
        </Modal>
      </Container>
    )
  }
}

export default ReceiptView
