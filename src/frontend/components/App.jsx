import React from 'react'
import TitleBar from './Bars/TitleBar'
import Body from './Body'

class App extends React.Component {
  componentDidMount () {
    const { setCurrentUser } = this.props
    setCurrentUser(JSON.parse(localStorage.getItem('user')))
  }

  render () {
    const { activeItem, currentUser, setItemName, setCurrentUser } = this.props
    if (currentUser) {
      console.log(currentUser.email)
    }
    return (
      <div>
        <TitleBar activeItem={activeItem} handleItemClick={setItemName} setUser={setCurrentUser}/>
        <Body activeItem={activeItem} handleItemClick={setItemName} setUser={setCurrentUser}/>
      </div>
    )
  }
}

export default App
