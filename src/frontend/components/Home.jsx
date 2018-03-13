import React from 'react'
import { Menu, Button, Header, Container, Icon, Image } from 'semantic-ui-react'

class Home extends React.Component {
  render () {
    return (
      <div style={{backgroundImage: require('./pic/a.jpg')}}>
        <Image src={require('./pic/a.jpg')} style={{height: '90vh', width: '100%'}} />
        <div style={{backgroundColor: 'black', height: '6vh', textAlign: 'center', color: 'white', fontSize: '25px'}}>
          THE BEST PRICE FOR YOUR MONEY
        </div>
      </div>
    )
  }
}

export default Home
