import React from 'react'
import Dropdown from '../DropDown/Dropdown.jsx'
import Item from '../Item.jsx'
import { Grid, Segment, Divider, Button, Menu, Icon } from 'semantic-ui-react'
import database from '../../../backend/database.js'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dropdownArray: [],
      carArr: [],
      allCarArr: [],
      selectedBrand: ''
    }
    this.arr = ['Location', 'Brand', 'Type', 'Model']
  }

  async getInfo (para) {
    const { allCarArr } = this.state
    const set = new Set()
    console.log(cars)
    cars.forEach(obj => {
      console.log(obj.data())
      set.add(obj.data())
    })
    console.log(set)
    const arr = this.state.dropdownArray
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
      dropdownArray: arr
    })
  }

  async iniCarList () {
    const cars = await database.collection('cars').get()
    const arr = []
    cars.forEach(e => {
      console.log(e.data())
      arr.push(e.data())
    })
    this.setState({
      carArr: arr,
      allCarArr: arr
    })
  }

  async populateState () {
    await this.iniCarList()
    for (const item of this.arr) {
      await this.getInfo(item.toLowerCase())
    }
  }

  componentDidMount () {
    this.populateState()
  }

  // async getData () {
  //   const holder = this.arr
  //   const arr = document.querySelectorAll('div.ui.search.selection.dropdown > div.text')
  //   let data = ''
  //   let count = 0
  //   arr.forEach(a => {
  //     if (a.className !== 'default text') {
  //       data += `${[holder[count++].toLowerCase()] + ':' + "'" + a.innerHTML + "',"}`
  //     } else {
  //       count++
  //     }
  //   })
  //   data = data.substring(0, data.length - 1)
  //   console.log(data)
  //   if (data.length !== 0) {
  //     const response = await fetch(`/availCars/${data}`)
  //     const result = await response.json()
  //     this.setState({
  //       carArr: result
  //     })
  //   }
  // }

  render () {
    const arr = this.state.dropdownArray
    const carArr = this.state.carArr
    const active = this.state.selectedBrand
    let count = 0
    return (
      <div>
        <Menu style={{margin: 0}}>
          {arr.map(elem => {
            const holder = this.arr[count++]
            const dropArr = [...elem]
            dropArr.push({key: '...', value: '...', text: '...'})
            return (
              <Menu.Item name={holder} key={holder}>
                <Dropdown array={dropArr} name={holder} active={active}/>
              </Menu.Item>)
          })}
          <Menu.Item name='Search'>
            <Button basic color='black' onClick={(e) => this.getData()}>
              <Button.Content>
                <Icon name='search' />
              </Button.Content>
            </Button>
          </Menu.Item>
        </Menu>
        <Grid style={{marginTop: 30}} relaxed>
          {carArr.map(elem => {
            return (<Item item={elem} key={elem}/>)
          })}
        </Grid>
      </div>
    )
  }
}

export default Header
