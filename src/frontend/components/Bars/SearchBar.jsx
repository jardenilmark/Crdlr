import React from 'react'
import Dropdown from '../DropDown/Dropdown.jsx'
import { Grid, Segment, Divider, Sidebar, Button, Menu } from 'semantic-ui-react'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      array: [],
      carArr: [],
      selectedBrand: ''
    }
    this.arr = ['Location', 'Brand', 'Type', 'Model', 'Price']
  }

  async getInfo (para) {
    const response = await fetch(`/getCar/${para}`)
    const result = await response.json()
    const set = new Set()
    result.forEach(obj => {
      set.add(obj[para])
    })
    const arr = this.state.array
    const miniArr = []
    let count = 0
    for (let item of set) {
      let a
      if (typeof (item) === 'string') {
        a = item.substring(0, 2).toUpperCase()
      } else {
        a = count++
      }
      miniArr.push({key: a, value: a, text: item})
    }
    arr.push(miniArr)
    this.setState({
      array: arr
    })
  }

  async populateState () {
    for (const item of this.arr) {
      await this.getInfo(item.toLowerCase())
    }
  }

  componentDidMount () {
    this.populateState()
  }

  async getData () {
    const holder = this.arr
    const arr = document.querySelectorAll('div.ui.search.selection.dropdown > div.text')
    let data = ''
    let count = 0
    arr.forEach(a => {
      if (a.className !== 'default text') {
        data += `${[holder[count++].toLowerCase()] + ':' + "'" + a.innerHTML + "',"}`
      } else {
        count++
      }
    })
    data = data.substring(0, data.length - 1)
    if (data.length !== 0) {
      const response = await fetch(`/availCars/${data}`)
      const result = await response.json()
      this.setState({
        carArr: result
      })
    }
  }

  render () {
    const arr = this.state.array
    const active = this.state.selectedBrand
    let count = 0
    return (
      <Sidebar.Pushable as={Segment} style={{height: '95vh', margin: 0}}>
        <Sidebar as={Menu} animation='overlay' style={{width: 250}} visible={true} icon='labeled' vertical inverted>
          {arr.map(elem => {
            const holder = this.arr[count++]
            return (
              <Menu.Item name={holder} style={{marginTop: '5vh'}}>
                <Dropdown array = {elem} name = {holder} active = {active}/>
              </Menu.Item>)
          })}
          <Button inverted content='Search' style={{marginTop: '5vh'}} onClick={(e) => this.getData()}/>
        </Sidebar>
      </Sidebar.Pushable>
    )
  }
}

export default Header
