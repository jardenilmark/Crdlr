import React from 'react'
import { withRouter } from 'react-router-dom'

class BodyListener extends React.Component {
  componentWillMount () {
    const { setItemName } = this.props
    this.unlisten = this.props.history.listen((location, action) => {
      setItemName(location.pathname.slice(1))
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
export default withRouter(BodyListener)
