import React from 'react'
import Dropdown from '../DropDown/Dropdown.jsx'
import Item from '../Item.jsx'
import { Grid, Segment, Divider, Button, Menu, Icon } from 'semantic-ui-react'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      array: [],
      carArr: [],
      selectedBrand: ''
    }
    this.arr = ['Location', 'Brand', 'Type', 'Model']
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

  async iniCarList() {
    const response = await fetch(`/carLists`)
    const result = await response.json()
    this.setState({
      carArr: result
    })
  }

  async populateState () {
    for (const item of this.arr) {
      await this.getInfo(item.toLowerCase())
    }
    await this.iniCarList()
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
    console.log(data)
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
              <Menu.Item name={holder}>
                <Dropdown array={dropArr} name={holder} active={active}/>
              </Menu.Item>)
          })}
          <Menu.Item name='Search'>
            <Button basic color='black' content='Search' onClick={(e) => this.getData()}>
              <Button.Content>
                <Icon name='search' />
              </Button.Content>
            </Button>
          </Menu.Item>
        </Menu>
        <Grid style={{marginTop: 30}} relaxed>
          {carArr.map(elem => {
            return (<Item item={elem} />)
          })}
        </Grid>
      </div>
    )
  }
}

export default Header
