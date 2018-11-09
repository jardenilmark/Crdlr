import { storage } from '../backend/database'
import { addToDb, updateDocument } from '../backend/data'
import { getDocumentValues } from './documentHandler'
import { isCarCreateError } from './errorHandler'
import alertify from 'alertify.js'

export async function onClickHandler (props) {
  const { file, setProgressBar, progress, setUploadStatus, setError, currentUser } = props
  if (progress === -1 || progress === 100) {
    const dropArr = ['brand', 'location', 'type', 'model', 'price', 'desc']
    const car = {
      ...getDocumentValues(dropArr),
      available: true,
      owner: JSON.parse(currentUser).uid
    }
    if (isCarCreateError(car, setError, file)) {
      const db = await addToDb('contacts', {people: []})
      car['peopleInterested'] = db.id
      const carDb = await addToDb('cars', car)
      await updateDocument('cars', carDb.id, {imageId: carDb.id})
      storage.ref(`cars/${carDb.id}`).put(file).on('state_changed', async (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgressBar(progress)
        if (progress === 100) {
          alertify.success(`Car has been placed on sale`, 3)
          setUploadStatus('done')
        }
      })
    }
  } else {
    setUploadStatus('processing')
  }
}
