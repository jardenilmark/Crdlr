import React from 'react'
import { withRouter } from 'react-router-dom'

class Body extends React.Component {
  componentWillMount () {
    const { setItemName, history } = this.props
    this.unlisten = history.listen((location, action) => {
      let loc = location.pathname
      if (loc.length > 1) {
        loc = loc.slice(1)
      }
      setItemName(loc)
    })
  }

  componentWillUnmount () {
    this.unlisten()
  }

  render () {
    return (
      <div>{this.props.children}</div>
    )
  }
}

export default withRouter(Body)