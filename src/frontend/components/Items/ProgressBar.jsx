import React from 'react'
import { Modal, Progress, Input, Button, Form, Grid, Segment, Container } from 'semantic-ui-react'

class ProgressBar extends React.Component {
  getProgressBar () {
    const { progress } = this.props
    if (progress >= 0 && progress < 100) {
      return <Progress percent={progress} active/>
    } else if (progress === 100) {
      const prog = progress
      return <Progress percent={prog} success/>
    }
    return <div/>
  }

  render () {
    return (
      this.getProgressBar()
    )
  }
}

export default ProgressBar
