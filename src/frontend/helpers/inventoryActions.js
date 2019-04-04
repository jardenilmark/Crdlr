import { fetchFromDbFilter } from '../../backend/data'

export function isAcceptedKey (key) {
  const arr = ['imageId', 'id', 'peopleInterested', 'arrayId']
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
      if (key === 'sold' && e[key] === true) {
        numSold++
      }
    }
  })
  return numSold
}

export function setPeopleModalArr (func, arr) {
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

export async function setReceiptModalArr (func, arr) {
  const modalArr = []
  await Promise.all(arr.map(async e => {
    for (const key in e) {
      if (key === 'sold' && e[key]) {
        const item = await fetchFromDbFilter('transactions', 'carId', e['imageId'])
        modalArr.push({
          modalVisibility: false,
          item: {...item[0], car: `${e['brand']} ${e['model']}`, location: e.location}
        })
      }
    }
  })
  )
  func(modalArr)
}
