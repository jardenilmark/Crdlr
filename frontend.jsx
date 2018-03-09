import React from 'react'
import ReactDOM from 'react-dom'
import Header from './src/components/Header.jsx'
import SearchBar from './src/components/SearchBar.jsx'

const mount = document.getElementById('mount')

ReactDOM.render(
  <div>
    <Header />
    <SearchBar />
  </div>,
  mount
)
