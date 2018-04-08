export function isAcceptedKey (key) {
  const arr = ['ImageId', 'Id', 'peopleInterested', 'arrayId']
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return false
    }
  }
  return true
}

export function getNumberCarsSold (arr) {
  let numSold = 0
  arr.forEach(e => {
    for (const key in e) {
      if (key === 'Sold' && e[key] === true) { 
        numSold++
      }
    }
  })
  return numSold
}

export function setModalArr (func, arr) {
  const modalArr = []
  arr.forEach(e => {
    for (const key in e) {
      if (key === 'peopleInterested') {
        modalArr.push({
          modalVisibility: false
        })
      }
    }
  })
  func(modalArr)
}
