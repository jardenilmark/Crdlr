import React from 'react'
import { auth } from '../../../backend/database'
import { Form, Grid, Segment, Container } from 'semantic-ui-react'

class CarCreate extends React.Component {
  render () {
    const options = [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' }
    ]
    return (
      <Container fluid>
        <Grid textAlign='center' verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: '90%', paddingTop: 40 }}>
            <Segment color='grey'>
              <Form>
                <Form.Group>
                  <Form.Input placeholder='Car Model' width={6}/>
                  <Form.Dropdown placeholder='Brand' options={options} width={12}/>
                </Form.Group>
              </Form>
              <Form.TextArea placeholder='Additional Details' style={{width: '100%'}} />
              <Form.Checkbox label='I agree to the Terms and Conditions' />
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default CarCreate
