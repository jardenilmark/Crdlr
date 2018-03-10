import React from 'react'
import TitleBar from './Bars/TitleBar'
import SearchBar from './Bars/SearchBar'
import SideBar from './Bars/SideBar'

class Search extends React.Component {
  render () {
    return (
      <div>
        <TitleBar />
        <SearchBar />
        <SideBar />
      </div>
    )
  }
}

export default Search
