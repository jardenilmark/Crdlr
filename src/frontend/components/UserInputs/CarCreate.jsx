import React from 'react'
import { storage, auth } from '../../../backend/database'
import { Modal, Progress, Input, Dropdown, Card, Image, Button, Form, Grid, Segment, Container } from 'semantic-ui-react'
import { addToDb } from '../../firestoreActions'
import alertify from 'alertify.js'

class CarCreate extends React.Component {
  componentDidMount () {
    const { fetchCarBrands, fetchCarTypes, setProgressBar, fetchLocations } = this.props
    fetchCarBrands()
    fetchCarTypes()
    fetchLocations()
    setProgressBar(-1)
  }

  onChangeHandler (file) {
    const { setImageFile } = this.props
    setImageFile(file)
  }

  generateRandomPicId () {
    return Math.floor(Math.random() * 900000000)
  }

  showProgressBar () {
    const { progress } = this.props
    if (progress >= 0 && progress < 100) {
      return <Progress percent={progress} active/>
    } else if (progress === 100) {
      const prog = progress
      return <Progress percent={prog} success/>
    }
  }

  onClickHandler (id) {
    const { file, setProgressBar } = this.props
    const car = {
      available: true,
      brand: document.getElementById('carBrand').innerText,
      image: id,
      location: document.getElementById('carLocation').innerText,
      model: document.getElementById('carModel').value,
      price: `$${document.getElementById('carPrice').value}`,
      type: document.getElementById('carType').innerText,
      details: document.getElementById('carDesc').value,
      owner: auth.currentUser.uid
    }
    let isAllValid = true
    for (const key in car) {
      if ((!car[key] && key !== 'details') || car[key] === 'Brand' || car[key] === 'Location' || car[key] === 'Type') {
        isAllValid = false
      }
    }
    if (!file) {
      isAllValid = false
    }
    if (isAllValid) {
      storage.ref(`cars/${id}`).put(file).on('state_changed', (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgressBar(progress)
        if (progress === 100) {
          addToDb('cars', car)
          alertify.success(`Car has been placed on sale`, 3)
        }
      })
    }
  }

  render () {
    const picId = this.generateRandomPicId()
    const { brands, types, locations } = this.props
    let carBrands = []
    let carTypes = []
    let locationOptions = []
    if (brands && types && locations) {
      carBrands = brands
      carTypes = types
      locationOptions = locations
    }
    return (
      <Container fluid style={{height: '100%', background: `url(${require('../../images/d.jpg')})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}}>
        <Grid textAlign='center' verticalAlign='middle' style={{ paddingTop: '7%' }}>
          <Grid.Column style={{ maxWidth: '40%', paddingTop: 60 }}>
            <Segment piled textAlign='center' color='grey'>
              {this.showProgressBar()}
              <Form>
                <Form.Group>
                  <Form.Input id='carModel' placeholder='Car Model' width={12}/>
                  <Form.Input id='carPrice' placeholder='Price' type='number' width={6}/>
                </Form.Group>
                <Form.Group>
                  <Form.Dropdown id='carBrand' selection placeholder='Brand' options={carBrands} width={8}/>
                  <Form.Dropdown id='carType' selection placeholder='Type' options={carTypes} width={8}/>
                </Form.Group>
                <Form.Dropdown id='carLocation' selection placeholder='Location' options={locationOptions}/>
              </Form>
              <Input type='file' onChange={ (e) => this.onChangeHandler(e.target.files[0], picId) } />
              <Form.TextArea id='carDesc' placeholder='Additional Details' style={{marginTop: 20, width: '100%', height: '10%'}} />
              <div style={{textAlign: 'left', paddingBottom: 10, paddingTop: 10}}>
                <Form.Checkbox label='I agree to the Terms and Conditions' />
              </div>
              <Button onClick={() => this.onClickHandler(picId)} content='Submit' secondary fluid/>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default CarCreate
