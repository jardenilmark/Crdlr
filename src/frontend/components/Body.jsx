import React from 'react'
import { Container } from 'semantic-ui-react'
import Home from './Home.jsx'
import Search from './Search.jsx'
import SignUp from './UserInput/SignUp.jsx'

class Body extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  getActiveComponent () {
    const { activeItem } = this.props
    if (activeItem === 'Home') {
      return <Home />
    } else if (activeItem === 'Search') {
      return <Search />
    } else {
      return <SignUp />
    }
  }

  render () {
    return (
      <Container fluid>
        {this.getActiveComponent()}
      </Container>
    )
  }
}

export default Body
