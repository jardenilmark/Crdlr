import React from 'react'
import { Image, Container } from 'semantic-ui-react'
import { storage } from '../../backend/database'

class Home extends React.Component {
  render () {
    return (
      <div>
        <Container fluid>
          <Image src={require('../images/a.jpg')} style={{height: '90vh', width: '100%'}} />
        </Container>
        <div style={{backgroundColor: 'black', height: '7vh', textAlign: 'center', color: 'white', fontSize: '25px'}}>
            THE BEST PRICE FOR YOUR MONEY
        </div>
      </div>
    )
  }
}

export default Home
