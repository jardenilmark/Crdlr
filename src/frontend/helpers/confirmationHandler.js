import { getDocumentValues, getDate } from './documentHandler'
import { getDocument, addToDb, updateDocument } from '../../backend/data'
import Validator from './validator'

export async function confirmationHandler(props) {
	const { setError, item, setReceipt, setBuyerReceiptModalVisibility } = props
	const { price, imageId } = item
	const arr = ['firstName', 'lastName', 'email', 'phone', 'gender', 'creditCard', 'address']
	const toCheck = getDocumentValues(arr)
	const validator = new Validator()
	let isAllValid = true
	for (const key in toCheck) {
		if (!validator.isValid(key, toCheck[key])) {
			isAllValid = false
		}
	}
	if (!document.getElementById('expirationDate').value) {
		setError(true, 'GET_ERROR_EXPIRATIONDATE')
		isAllValid = false
	} else {
		setError(false, 'GET_ERROR_EXPIRATIONDATE')
	}
	if (isAllValid) {
		const obj = {
			...toCheck,
			expirationDate: document.getElementById('expirationDate').value,
			carId: imageId, // imageId is the same as the carId in the db
			price: parseFloat(price) * 0.98,
			advertisementFee: parseFloat(price) * 0.02,
			transactionDate: getDate(new Date()),
			status: 'bought'
		}
		await addToDb('transactions', obj)
		const cars = await getDocument('cars')
		for (let i = 0; i < cars.docs.length; i++) {
			const data = cars.docs[i].data()
			if (JSON.stringify(data) === JSON.stringify(item)) {
				await updateDocument('cars', cars.docs[i].id, { available: false })
				obj.totalPrice = parseFloat(price)
				setReceipt(obj)
				setBuyerReceiptModalVisibility(true)
			}
		}
	}
}
