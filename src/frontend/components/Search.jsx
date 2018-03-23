import React from 'react'
import Item from './Item'
import { Dimmer, Loader, Container, Header, Dropdown, Grid, Segment, Divider, Menu } from 'semantic-ui-react'
import Button from './Buttons/customButton'

class Search extends React.Component {
  getDropdownValues (arr) {
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

  componentDidMount () { // to refactor
    const { getCars, updateLoader } = this.props
    getCars()
    setTimeout(() => {
      updateLoader(true)
    }, 10000)
  }

  getFilteredList (arr) {
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
      updateCarList(arr)
    }
  }

  getLoader (arr) {
    if (arr.length === 0 && !this.props.loader) {
      return <Dimmer active>
        <Loader indeterminate>Preparing Selection</Loader>
      </Dimmer>
    } else if (arr.length === 0 && this.props.loader) {
      return <Header size='large'>
        No Available Cars
      </Header>
    }
  }

  render () {
    const arr = ['Location', 'Brand', 'Type', 'Model']
    const { allCars, filteredCars } = this.props
    let toShowArr = []
    let dropDownArr = []
    if (allCars) {
      dropDownArr = this.getDropdownValues(arr)
      toShowArr = allCars
      if (filteredCars) {
        toShowArr = filteredCars
      }
    }
    let count = 0
    let idCar = 0
    return (
      <Container fluid>
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
                    onClose={() => this.getFilteredList(arr)}
                    search options={dropArr} selection id={holder}/>
                </Grid.Column>)
            })}
            <Grid.Column/>
            <Grid.Column/>
          </Grid.Row>
        </Grid>
        <Divider/>
        <Container fluid textAlign='center'>
          {this.getLoader(toShowArr)}
        </Container>
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

export default Search
