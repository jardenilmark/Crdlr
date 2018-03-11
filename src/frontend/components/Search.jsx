import React from 'react'
import TitleBar from './Bars/TitleBar'
import SearchBar from './Bars/SearchBar'

class Search extends React.Component {
  render () {
    return (
      <div>
        <TitleBar />
        <SearchBar />
      </div>
    )
  }
}

export default Search
