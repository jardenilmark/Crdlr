import React from 'react'
import { Image, Container } from 'semantic-ui-react'
import { storage } from '../../backend/database'

class Home extends React.Component {
  async loadImage () {
    const url = await storage.ref().child(`background/a.jpg`).getDownloadURL()
    document.getElementById(`homeImage`).src = url
  }

  componentDidMount () {
    this.loadImage()
  }

  render () {
    return (
      <div>
        <Container fluid>
          <Image id={'homeImage'} src='' style={{height: '90vh', width: '100%'}} />
        </Container>
        <div style={{backgroundColor: 'black', height: '4vh', textAlign: 'center', color: 'white', fontSize: '25px'}}>
            RENT A CAR TODAY
        </div>
      </div>
    )
  }
}

export default Home
