import React from 'react'
import { Dropdown, Grid } from 'semantic-ui-react'

class DropdownCustom extends React.Component {
  getDropdownValues (arr) {
    const { allCars } = this.props
    const dropdownArray = []
    for (const para of arr) {
      const set = new Set() // so no duplicates
      allCars.forEach(obj => {
        const name = para.toLowerCase()
        set.add(obj[name])
      })
      const valueArr = []
      let count = 0
      for (const item of set) {
        let val
        if (typeof (item) === 'string') {
          val = item
        } else {
          val = count++
        }
        valueArr.push({key: val, value: val, text: item})
      }
      dropdownArray.push(valueArr)
    }
    return dropdownArray
  }

  renderDropDowns () {
    const { allCars } = this.props
    const placeholders = ['Location', 'Brand', 'Type', 'Model']
    const toRenderArr = []
    let dropDownArr = []
    let count = 0
    if (allCars) {
      dropDownArr = this.getDropdownValues(placeholders)
    }
    dropDownArr.forEach(e => {
      const placeholder = placeholders[count++]
      const array = [...e]
      array.push({key: 'Show All', value: 'Show All', text: 'Show All'})
      toRenderArr.push(
        <Grid.Column name={placeholder} key={placeholder} >
          <Dropdown button noResultsMessage='No Results Found' placeholder={placeholder}
            onClose={() => this.getFilteredList(placeholders)}
            search options={array} selection id={placeholder}/>
        </Grid.Column>
      )
    })
    return toRenderArr
  }

  getFilteredList (arr) {
    const selections = document.querySelectorAll('div.ui.search.selection.dropdown > div.text')
    const { allCars, updateCarList } = this.props
    const updatedList = []
    let data = {}
    let count = 0
    selections.forEach(a => {
      if (a.className !== 'default text') {
        const holder = arr[count].toLowerCase()
        data[holder] = a.innerText
      }
      count++
    })
    if (data.length !== 0) {
      allCars.forEach(elem => {
        let isQualified = true
        for (const key in data) {
          if (data[key] === 'Show All') {
            // do nothing
          } else if (data[key] !== elem[key]) {
            isQualified = false
          }
        }
        if (isQualified) {
          updatedList.push(elem)
        }
      })
      updateCarList(updatedList)
    }
  }

  render () {
    return (
      this.renderDropDowns()
    )
  }
}

export default DropdownCustom
