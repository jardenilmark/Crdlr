import { deleteDocument, getDocumentUID, addToDb } from '../../backend/data'
import { getDate } from './documentHandler'
import { storage } from '../../backend/database'
import swal from 'sweetalert'

export async function onClickHandler (imageId, obj, props) {
  const { getCarsAdvertised, currentUser } = props
  const option = swal(
    'Warning!',
    'You will be charged a 2% cancellation fee if you wish to continue',
    'warning'
  )
  if (await option) {
    const confirmation = swal('Advertisment has been cancelled!', {
      icon: 'success'
    })
    if (await confirmation) {
      const userUID = JSON.parse(currentUser).uid
      await deleteDocument('contacts', obj.arrayId)
      await deleteDocument('cars', imageId)
      await storage.ref().child(`cars/${imageId}`).delete()
      await getCarsAdvertised(userUID)
      const user = await getDocumentUID('users', userUID)
      const userData = user.data()
      delete userData.isAdmin // To not include isAdmin property
      const transaction = { // To prevent them from having a transaction in real life and then just cancelling for free advertisment
        ...userData,
        fee: parseFloat(obj.price) * 0.02,
        transactionDate: getDate(new Date()),
        status: 'cancelled'
      }
      addToDb('transactions', transaction)
    }
  }
}
