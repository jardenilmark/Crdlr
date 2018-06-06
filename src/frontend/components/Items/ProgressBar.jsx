import React from 'react'
import { Progress } from 'semantic-ui-react'

const ProgressBar = (props) => {
  const { progress } = props
  if (progress >= 0 && progress < 100) {
    return <Progress percent={progress} active/>
  } else if (progress === 100) {
    const prog = progress
    return <Progress percent={prog} success/>
  }
  return <div/>
}

export default ProgressBar
