import React from 'react'
import { auth } from '../../../backend/database'
import { Dropdown, Card, Image, Button, Form, Grid, Segment, Container } from 'semantic-ui-react'

class CarCreate extends React.Component {
  componentDidMount () {
    const { fetchCarBrands, fetchCarTypes } = this.props
    fetchCarBrands()
    fetchCarTypes()
  }

  render () {
    const { brands, types } = this.props
    let carBrands = []
    let carTypes = []
    if (brands && types) {
      carBrands = [...brands]
      carTypes = [...types]
    }
    return (
      <Container fluid style={{height: '100%', background: `url(${require('../../images/d.jpg')})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}}>
        <Grid textAlign='center' verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: '40%', paddingTop: 60 }}>
            <Segment piled textAlign='center' color='grey'>
              <Form>
                <Form.Group>
                  <Form.Input placeholder='Car Model' width={12}/>
                  <Form.Input placeholder='Price' width={6}/>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Dropdown selection placeholder='Brand' options={carBrands}/>
                  <Form.Dropdown selection placeholder='Type' options={carTypes}/>
                </Form.Group>
              </Form>
              <Image src={require('../../images/b.png')} size='large' centered style={{marginTop: 20, marginBottom: 20}}/>
              <Form.TextArea placeholder='Additional Details' style={{width: '100%', height: '10%'}} />
              <div style={{textAlign: 'left', paddingBottom: 10, paddingTop: 10}}>
                <Form.Checkbox label='I agree to the Terms and Conditions' />
              </div>
              <Button content='Submit' secondary fluid/>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default CarCreate
