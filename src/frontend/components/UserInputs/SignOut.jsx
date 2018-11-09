import React from 'react'
import { Button } from 'semantic-ui-react'
import history from '../../../backend/history'

const onClickHandler = async (props) => {
  await props.logOutUser()
  const path = history.location.pathname
  if (path === '/CarCreate' || path === '/InventoryView') {
    history.push('/')
  }
}

const SignOut = (props) => {
  return (
    <div>
      <Button negative onClick={() => onClickHandler(props)}>
        Sign Out
      </Button>
    </div>
  )
}

export default SignOut
