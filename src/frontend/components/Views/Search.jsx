import React from 'react'
import Item from '../Items/Item'
import { Dimmer, Loader, Container, Header, Dropdown, Grid, Segment, Divider, Menu } from 'semantic-ui-react'

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
          a = item
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

  renderLoader () { //to be placed in a component
    const { allCars, filteredCars } = this.props
    let arr = []
    if (filteredCars) {
      arr = [filteredCars]
    } else if (allCars) {
      arr = [allCars]
    }
    if (arr.length === 0 && !this.props.loader) {
      return (
        <Dimmer active>
          <Loader indeterminate>Preparing Selection</Loader>
        </Dimmer>
      )
    } else if (arr.length === 0 && this.props.loader) {
      return (
        <Header size='large'>
          No Available Cars
        </Header>
      )
    }
  }

  renderItems () { //to be placed in a component
    const { allCars, filteredCars } = this.props
    const toRenderArr = []
    let carArr = []
    let count = 0
    if (filteredCars) {
      carArr = filteredCars
    } else if (allCars) {
      carArr = allCars
    }
    carArr.forEach(e => {
      toRenderArr.push(<Item item={e} id={count} key={count}/>)
      count++
    })
    return toRenderArr
  }

  renderDropDowns () { //to be placed in a component
    const placeholders = ['Location', 'Brand', 'Type', 'Model']
    const toRenderArr = []
    let dropDownArr = []
    let count = 0
    if (this.props.allCars) {
      dropDownArr = this.getDropdownValues(placeholders)
    }
    dropDownArr.forEach(e => {
      const placeholder = placeholders[count++]
      const array = [...e]
      array.push({key: '...', value: '...', text: '...'})
      toRenderArr.push(                
      <Grid.Column name={placeholder} key={placeholder} >
        <Dropdown button noResultsMessage='No Results Found' placeholder={placeholder}
          onClose={() => this.getFilteredList(placeholders)}
          search options={array} selection id={placeholder}/>
      </Grid.Column>)
    })
    return toRenderArr
  }

  render () {
    return (
      <Container fluid>
        <Grid style={{marginTop: 1}} columns='equal'>
          <Grid.Row>
            <Grid.Column/>
            <Grid.Column/>
            {this.renderDropDowns()}
            <Grid.Column/>
            <Grid.Column/>
          </Grid.Row>
        </Grid>
        <Divider/>
        <Container fluid textAlign='center'>
          {this.renderLoader()}
        </Container>
        <Grid style={{marginTop: 30, marginBottom: 30, paddingLeft: 20, paddingRight: 20}} relaxed>
          {this.renderItems()}
        </Grid>
      </Container>
    )
  }
}

export default Search