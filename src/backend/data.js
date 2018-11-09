import { firestore } from './database'

export function getData (type, data) {
  return {
    type: type,
    payload: data
  }
}

export async function fetchFromDb (name) {
  const collection = await firestore.collection(name).get()
  return collection.docs.map(e => e.data())
}

export async function fetchFromDbFilter (name, field, data) {
  const collection = await firestore.collection(name).where(field, '==', data).get()
  return collection.docs.map(e => e.data())
}

export async function fetchFromDbDoc (name, id) {
  const doc = await firestore.collection(name).doc(id).get()
  if (doc.exists) {
    return doc.data()
  }
  return null
}

export function addToDb (collection, object) {
  return firestore.collection(collection).add(object)
}

export function getDocument (collection, field, data) {
  if (field && data !== undefined) { // data might be a true or false
    return firestore.collection(collection).where(field, '==', data).get()
  }
  return firestore.collection(collection).get()
}

export function getDocumentUID (collection, uid) {
  return firestore.collection(collection).doc(uid).get()
}

export function setDocument (collection, id, obj, callback) {
  return firestore.collection(collection).doc(id).set(obj)
}

export function updateDocument (collection, id, obj) {
  return firestore.collection(collection).doc(id).update(obj)
}

export function deleteDocument (collection, id) {
  return firestore.collection(collection).doc(id).delete()
}
