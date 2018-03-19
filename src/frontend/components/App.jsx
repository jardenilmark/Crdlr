import React from 'react'
import TitleBar from './Bars/TitleBar'
import Body from './Body'
import { Container } from 'semantic-ui-react'
import { auth } from '../../backend/database'

class App extends React.Component {
  componentDidMount () {
    const { setCurrentUser } = this.props
    setCurrentUser(localStorage.getItem('user'))
  }

  render () {
    const { activeItem, currentUser, setCurrentUser, setItemName } = this.props
    console.log(this.props)
    console.log(auth.currentUser)
    return (
      <Container fluid>
        <TitleBar activeItem={activeItem} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <Body setItemName={setItemName}/>
      </Container>
    )
  }
}

export default App
