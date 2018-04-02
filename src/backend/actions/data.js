import { firestore } from '../database'

export function getData (type, data) {
  return {
    type: type,
    payload: data
  }
}

export async function fetchFromDb (name) {
  const collection = await firestore.collection(name).get()
  const arr = []
  collection.forEach(e => {
    arr.push(e.data())
  })
  return arr
}

export async function fetchFromDbFilter (name, field, data, isIdIncluded) {
  const collection = await firestore.collection(name).where(field, '==', data).get()
  const arr = []
  collection.forEach(e => {
    if (isIdIncluded) {
      const obj = {...e.data(), id: e.id}
      arr.push(obj)
    } else {
      arr.push(e.data())
    }
  })
  return arr
}
