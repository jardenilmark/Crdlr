import React from 'react'
import TitleBar from '../Bars/TitleBar'
import { Jumbotron } from 'react-bootstrap'
import './SignUp.css'

class Search extends React.Component {
  render () {
    return (
      <div>
        <TitleBar />
        <div className="center">
          <h2 className="centerText">SignUp</h2>
        </div>
      </div>
    )
  }
}

export default Search
