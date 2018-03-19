import React from 'react'
import Item from './Item'
import { Dimmer, Loader, Container, Header, Dropdown, Grid, Segment, Divider, Menu } from 'semantic-ui-react'
import database from '../../backend/database'
import Button from './Buttons/customButton'

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

  getLoader (arr) {
    if (arr.length === 0) {
      return <Dimmer active>
        <Loader indeterminate>Preparing Selection</Loader>
      </Dimmer>
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
    console.log(toShowArr)
    let count = 0
    let idCar = 0
    return (
      <Container fluid>
        {this.getLoader(toShowArr)}
        <Grid style={{marginTop: 1}} columns='equal'>
          <Grid.Row>
            <Grid.Column/>
            <Grid.Column/>
            {dropDownArr.map(elem => {
              const holder = arr[count++]
              const dropArr = [...elem]
              dropArr.push({key: '...', value: '...', text: '...'})
              return (
                <Grid.Column name={holder} key={holder} >
                  <Dropdown button noResultsMessage='No Results Found' placeholder={holder}
                    onClose={() => this.getFilteredList()}
                    search options={dropArr} selection id={holder}/>
                </Grid.Column>)
            })}
            <Grid.Column/>
            <Grid.Column/>
          </Grid.Row>
        </Grid>
        <Divider/>
        <Grid style={{marginTop: 30, marginBottom: 30, paddingLeft: 20, paddingRight: 20}} relaxed>
          {toShowArr.map(elem => {
            return (
              <Item item={elem} key={idCar++}/>
            )
          })}
        </Grid>
      </Container>
    )
  }
}

export default SearchBar
