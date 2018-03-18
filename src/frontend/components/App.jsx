import React from 'react'
import TitleBar from './Bars/TitleBar'
import Body from './Body'
import { Container } from 'semantic-ui-react'

class App extends React.Component {
  componentDidMount () {
    const { setCurrentUser } = this.props
    setCurrentUser(JSON.parse(localStorage.getItem('user')))
  }

  render () {
    const { activeItem, currentUser, setItemName, setCurrentUser, setSelectedCar, selectedCar } = this.props
    return (
      <Container fluid>
        <TitleBar activeItem={activeItem} handleItemClick={setItemName} setUser={setCurrentUser} user={currentUser}/>
        <Body activeItem={activeItem} handleItemClick={setItemName} setUser={setCurrentUser} setCar={setSelectedCar} car={selectedCar}/>
      </Container>
    )
  }
}

export default App
