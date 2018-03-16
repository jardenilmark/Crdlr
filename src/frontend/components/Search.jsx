import React from 'react'
import Item from './Item'
import { Dropdown, Grid, Segment, Divider, Button, Menu, Icon } from 'semantic-ui-react'
import database from '../../backend/database'

const arr = ['Location', 'Brand', 'Type', 'Model']

class SearchBar extends React.Component {
  getDropdownValues (array) {
    const { allCars } = this.props
    const dropdownArray = []
    for (const para of arr) {
      const set = new Set()
      allCars.forEach(obj => {
        const name = para.toLowerCase()
        set.add(obj[name])
      })
      const valueArr = []
      let count = 0
      for (const item of set) {
        let a
        if (typeof (item) === 'string') {
          a = item.substring(0, 3).toUpperCase()
        } else {
          a = count++
        }
        valueArr.push({key: a, value: a, text: item})
      }
      dropdownArray.push(valueArr)
    }
    return dropdownArray
  }

  componentDidMount () {
    this.props.getCars()
  }

  getFilteredList () {
    const selections = document.querySelectorAll('div.ui.search.selection.dropdown > div.text')
    let data = {}
    let count = 0
    selections.forEach(a => {
      if (a.className !== 'default text') {
        const holder = arr[count++].toLowerCase()
        data[holder] = a.innerHTML
      } else {
        count++
      }
    })
    if (data.length !== 0) {
      const { allCars, updateCarList } = this.props
      const arr = []
      allCars.forEach(elem => {
        let isQualified = true
        for (const key in data) {
          if (data[key] === '...') {
            // do nothing
          } else if (data[key] !== elem[key]) {
            isQualified = false
          }
        }
        if (isQualified) {
          arr.push(elem)
        }
      })
      updateCarList(allCars, arr)
    }
  }

  render () {
    const { allCars, filteredCars } = this.props
    let toShowArr = []
    let dropDownArr = []
    if (!allCars === false) {
      dropDownArr = this.getDropdownValues(arr)
      toShowArr = filteredCars
    }
    let count = 0
    let idCar = 0
    return (
      <div>
        <Menu style={{margin: 0}}>
          {dropDownArr.map(elem => {
            const holder = arr[count++]
            const dropArr = [...elem]
            dropArr.push({key: '...', value: '...', text: '...'})
            return (
              <Menu.Item name={holder} key={holder}>
                <Dropdown placeholder={holder} search options={dropArr} selection id={holder}/>
              </Menu.Item>)
          })}
          <Menu.Item name='Search'>
            <Button basic color='black' onClick={(e) => this.getFilteredList()}>
              <Button.Content>
                <Icon name='search' />
              </Button.Content>
            </Button>
          </Menu.Item>
        </Menu>
        <Grid style={{marginTop: 30}} relaxed>
          {toShowArr.map(elem => {
            return (<Item item={elem} key={idCar++}/>)
          })}
        </Grid>
      </div>
    )
  }
}

export default SearchBar
