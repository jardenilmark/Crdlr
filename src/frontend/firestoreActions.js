import { firestore } from '../backend/database'

export async function addToDb (collection, object) {
  return await firestore.collection(collection).add(object)
}

export async function getDocument (collection, field, data) {
  if (field && data !== undefined) { // data might be a true or false
    return await firestore.collection(collection).where(field, '==', data).get()
  }
  return await firestore.collection(collection).get()
}

export async function getDocumentUID (collection, uid) {
  return await firestore.collection(collection).doc(uid).get()
} 

export async function setDocument(collection, id, obj, callback) {
  return await firestore.collection(collection).doc(id).set(obj)
}

export async function updateDocument (collection, id, obj) {
  return await firestore.collection(collection).doc(id).update(obj)
}

export async function deleteDocument (collection, id) {
  return await firestore.collection(collection).doc(id).delete()
}
