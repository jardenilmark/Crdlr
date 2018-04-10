import React from 'react'
import { Button } from 'semantic-ui-react'
import { auth } from '../../../backend/database'
import history from '../../../backend/history'
import alertify from 'alertify.js'

class SignOut extends React.Component {
  async logOutUser () {
    const { setUser, setPeopleModals } = this.props
    await auth.signOut()
    localStorage.clear()
    setUser()
    setPeopleModals([])
    alertify.error('User Signed Out')
    const path = history.location.pathname
    if (path === '/CarCreate' || path === '/InventoryView') {
      history.push('/')
    }
  }

  render () {
    return (
      <div>
        <Button negative onClick={() => this.logOutUser()}>
          Sign Out
        </Button>
      </div>
    )
  }
}

export default SignOut
