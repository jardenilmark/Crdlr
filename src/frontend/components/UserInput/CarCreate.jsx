import React from 'react'
import { auth } from '../../../backend/database'
import { Dropdown, Card, Image, Button, Form, Grid, Segment, Container } from 'semantic-ui-react'

// to refactor and placed in db
const options = [
  { key: 'ACU', text: 'Acura', value: 'Acura' },
  { key: 'ALF', text: 'Alfa Romeo', value: 'Alfa Romeo' },
  { key: 'AST', text: 'Aston Martin', value: 'Aston Martin' },
  { key: 'AUD', text: 'Audi', value: 'Audi' },
  { key: 'BEN', text: 'Bentley', value: 'Bentley' },
  { key: 'BMW', text: 'BMW', value: 'BMW' },
  { key: 'BUG', text: 'Bugatti', value: 'Bugatti' },
  { key: 'BUI', text: 'Buick', value: 'Buick' },
  { key: 'CAD', text: 'Cadillac', value: 'Cadillac' },
  { key: 'CHE', text: 'Chevrolet', value: 'Chevrolet' },
  { key: 'CHR', text: 'Chrysler', value: 'Chrysler' },
  { key: 'CIT', text: 'Citroen', value: 'Citroen' },
  { key: 'DOG', text: 'Dodge', value: 'Dodge' },
  { key: 'FER', text: 'Ferrari', value: 'Ferrari' },
  { key: 'FIA', text: 'Fiat', value: 'Fiat' },
  { key: 'FOR', text: 'Ford', value: 'Ford' },
  { key: 'GEE', text: 'Geely', value: 'Geely' },
  { key: 'GEN', text: 'General Motors', value: 'General Motors' },
  { key: 'GMC', text: 'GMC', value: 'GMC' },
  { key: 'HON', text: 'Honda', value: 'Honda' },
  { key: 'HYU', text: 'Hyundai', value: 'Hyundai' },
  { key: 'INF', text: 'Infiniti', value: 'Infiniti' },
  { key: 'JAG', text: 'Jaguar', value: 'Jaguar' },
  { key: 'JEE', text: 'Jeep', value: 'Jeep' },
  { key: 'KIA', text: 'Kia', value: 'Kia' },
  { key: 'KOE', text: 'Koengisegg', value: 'Koengisegg' },
  { key: 'LAM', text: 'Lamborghini', value: 'Lamborghini' },
  { key: 'LAN', text: 'Land Rover', value: 'Land Rover' },
  { key: 'LEX', text: 'Lexus', value: 'Lexus' },
  { key: 'MAS', text: 'Maserati', value: 'Maserati' },
  { key: 'MAZ', text: 'Mazda', value: 'Mazda' },
  { key: 'MCL', text: 'McLaren', value: 'McLaren' },
  { key: 'MER', text: 'Mercedes-Benz', value: 'Mercedes-Benz' },
  { key: 'MIN', text: 'Mini', value: 'Mini' },
  { key: 'MIT', text: 'Mitsubishi', value: 'Mitsubishi' },
  { key: 'NIS', text: 'Nissan', value: 'Nissan' }
]
const options2 = [
  { key: 'CAR', text: 'CAR', value: 'CAR' },
  { key: 'SUV', text: 'SUV', value: 'SUV' }
]

class CarCreate extends React.Component {
  render () {
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
                  <Form.Dropdown selection placeholder='Brand' options={options}/>
                  <Form.Dropdown selection placeholder='Type' options={options2}/>
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
