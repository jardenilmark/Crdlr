import { storage } from '../backend/database'

export async function loadImage (id, imageId) {
  const url = await storage.ref().child(`cars/${imageId}`).getDownloadURL()
  const imgURL = document.getElementById(id)
  if (imgURL) {
    imgURL.src = url
  }
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