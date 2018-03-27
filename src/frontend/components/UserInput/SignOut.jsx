import React from 'react'
import { Button } from 'semantic-ui-react'
import { auth } from '../../../backend/database'
import history from '../../../backend/history'
import alertify from 'alertify.js'

class SignOut extends React.Component {
  async logOutUser () {
    const { setUser } = this.props
    await auth.signOut()
    localStorage.clear()
    setUser()
    alertify.error('User Signed Out')
    const path = history.location.pathname 
    if (path === '/CarCreate') {
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
