import { firestore } from '../backend/database'

export async function addToDb (collection, object) {
  return firestore.collection(collection).add(object)
}

export async function getDocument (collection, field, data) {
  if (field && data !== undefined) { // data might be a true or false
    return firestore.collection(collection).where(field, '==', data).get()
  }
  return firestore.collection(collection).get()
}

export async function getDocumentUID (collection, uid) {
  return firestore.collection(collection).doc(uid).get()
}

export async function setDocument (collection, id, obj, callback) {
  return firestore.collection(collection).doc(id).set(obj)
}

export async function updateDocument (collection, id, obj) {
  return firestore.collection(collection).doc(id).update(obj)
}

export async function deleteDocument (collection, id) {
  return firestore.collection(collection).doc(id).delete()
}
