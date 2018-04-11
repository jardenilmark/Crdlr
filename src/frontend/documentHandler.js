import { storage } from '../backend/database'

export function getDate (date) {
  let month = date.getMonth()
  let day = date.getDate()
  if (date.getMonth() < 10) {
    month = `0${date.getMonth()}`
  }
  if (date.getDate() < 10) {
    day = `0${date.getDate()}`
  }
  return `${date.getFullYear()}-${month + 1}-${day}`
}

export function generateRandomNum (limit) {
  return Math.floor(Math.random() * limit)
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
