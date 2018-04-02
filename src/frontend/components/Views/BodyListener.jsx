import React from 'react'
import { withRouter } from 'react-router-dom'

class BodyListener extends React.Component {
  componentWillMount () {
    const { setItemName, activeItem, history } = this.props
    this.unlisten = history.listen((location, action) => {
      let loc = location.pathname
      if (loc.length > 1) {
        loc = loc.slice(1)
      }
      setItemName(loc)
    })
    if (!activeItem) {
      setItemName(history.location.pathname.slice(1))
    }
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

export default withRouter(BodyListener)
