export function getDropdownValues (arr, props) {
  const { allCars } = props
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

export function getFilteredList (arr, props) {
  const selections = document.querySelectorAll('div.ui.search.selection.dropdown > div.text')
  const { allCars, updateCarList } = props
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
