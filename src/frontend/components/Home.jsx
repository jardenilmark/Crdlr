import React from 'react'
import { Image, Container } from 'semantic-ui-react'

class Home extends React.Component {
  render () {
    return (
      <div>
        <Container fluid style={{backgroundImage: require('./pic/a.jpg')}}>
          <Image src={require('./pic/a.jpg')} style={{height: '90vh', width: '100%'}} />
        </Container>
        <div style={{backgroundColor: 'black', height: '4vh', textAlign: 'center', color: 'white', fontSize: '25px'}}>
            RENT A CAR TODAY
        </div>
      </div>
    )
  }
}

export default Home
