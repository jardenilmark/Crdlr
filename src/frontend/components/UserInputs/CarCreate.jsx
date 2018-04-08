import React from 'react'
import { storage } from '../../../backend/database'
import { Modal, Progress, Input, Dropdown, Card, Image, Button, Form, Grid, Segment, Container } from 'semantic-ui-react'
import { addToDb } from '../../firestoreActions'
import { getDocumentValues } from '../../documentHandler'
import { isUserError } from '../../errorHandler'
import alertify from 'alertify.js'
import swal from 'sweetalert'

class CarCreate extends React.Component {
  componentDidMount () {
    this.initialize()
  }

  async initialize () {
    const { setProgressBar, fetchCarBrands, fetchCarTypes, fetchLocations, history } = this.props
    if (await isUserError(history)) {
      fetchCarBrands()
      fetchCarTypes()
      fetchLocations()
      setProgressBar(-1)
    }
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

  async onClickHandler (id) {
    const { file, setProgressBar, progress } = this.props
    const dropArr = ['brand', 'location', 'type', 'model', 'price', 'desc']
    const db = await addToDb('peopleInterested', {people: []})
    const car = {
      ...getDocumentValues(dropArr),
      available: true,
      image: id,
      owner: JSON.parse(localStorage.getItem('user')).uid,
      peopleInterested: db.id
    }
    let isAllValid = true
    for (const key in car) {
      if ((!car[key] && key !== 'details') || car[key] === 'Brand' 
        || car[key] === 'Location' || car[key] === 'Type' || !file) {
        isAllValid = false
        break
      }
    }
    if (isAllValid && (progress === -1 || progress === 100)) {
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
    console.log(this.props)
    const picId = this.generateRandomPicId()
    const { brands, types, locations, progress } = this.props
    return (
      <Container fluid style={{height: '100%', background: `url(${require('../../images/d.jpg')})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}}>
        <Grid textAlign='center' verticalAlign='middle' style={{ paddingTop: '7%' }}>
          <Grid.Column style={{ maxWidth: '40%', paddingTop: 60 }}>
            <Segment piled textAlign='center' color='grey'>
              {this.showProgressBar()}
              <Form>
                <Form.Group>
                  <Form.Input id='model' placeholder='Car Model' width={12}/>
                  <Form.Input id='price' placeholder='Price' type='number' width={6}/>
                </Form.Group>
                <Form.Group>
                  <Form.Dropdown id='brand' selection placeholder='Brand' options={brands} width={8}/>
                  <Form.Dropdown id='type' selection placeholder='Type' options={types} width={8}/>
                </Form.Group>
                <Form.Dropdown id='location' selection placeholder='Location' options={locations}/>
              </Form>
              <Input type='file' onChange={ (e) => this.onChangeHandler(e.target.files[0], picId) } />
              <Form.TextArea id='desc' placeholder='Additional Details' style={{marginTop: 20, width: '100%', height: '10%'}} />
              <div style={{textAlign: 'left', paddingBottom: 10, paddingTop: 10}}>
                <Form.Checkbox label='I agree to the Terms and Conditions' />
              </div>
              <Button loading={progress > -1 && progress < 100} onClick={() => this.onClickHandler(picId)} content='Submit' secondary fluid/>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default CarCreate
