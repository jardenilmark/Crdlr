import React from 'react'
import { Button } from 'semantic-ui-react'
import { auth } from '../../../backend/database'

class SignOut extends React.Component {
  async logOutUser () {
    const { setUser } = this.props
    await auth.signOut()
    localStorage.clear()
    setUser()
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
