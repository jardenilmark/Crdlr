import { storage } from '../backend/database'

export function getDate (date) {
  let month = date.getMonth() + 1
  let day = date.getDate()
  if (month < 10) {
    month = `0${month}`
  }
  if (day < 10) {
    day = `0${day}`
  }
  return `${date.getFullYear()}-${month}-${day}`
}

export function getDocumentValues (arr) {
  const obj = {}
  arr.forEach(e => {
    if (document.getElementById(e).className.includes('dropdown')) {
      obj[e] = document.getElementById(e).innerText
    } else {
      obj[e] = document.getElementById(e).value
    }
  })
  return obj
}

export async function loadImage (id) {
  const url = await storage.ref().child(`cars/${id}`).getDownloadURL()
  const imgURL = document.getElementById(id)
  if (imgURL) {
    imgURL.src = url
  }
}

export function autoFillForm (values) {
  for (const key in values) {
    if (document.getElementById(key).className.includes('dropdown')) {
      document.getElementById(key).innerText = values[key]
    } else {
      document.getElementById(key).value = values[key]
      document.getElementById(key).readOnly = true
    }
  }
}

export function getNum (num) {
  return num.toLocaleString()
}
