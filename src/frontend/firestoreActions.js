import { firestore } from '../backend/database'

export async function addToDb (collection, object) {
  return await firestore.collection(collection).add(object)
}

export async function getCollection(collection, field, data) {
  if (field && data !== undefined) { // data might be a true or false
    return await firestore.collection(collection).where(field, '==', data).get()
  }
  return await firestore.collection(collection).get()
}

export async function setCollection(collection, id, obj, callback) {
  return await firestore.collection(collection).doc(id).set(obj)
}

export async function updateCollection(collection, id, obj) {
  return await firestore.collection(collection).doc(id).update(obj)
}

export async function deleteCollection(collection, id) {
  return await firestore.collection(collection).doc(id).delete()
}
