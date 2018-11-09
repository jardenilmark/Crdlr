import { getDocumentUID, updateDocument } from '../backend/data'

export async function onClickHandler (count, props) {
  const { getCarsAdvertised, arrayId, currentUser } = props
  const people = await getDocumentUID('contacts', arrayId)
  const peopleData = people.data().people
  peopleData.splice(count, 1)
  await updateDocument('contacts', arrayId, {people: peopleData})
  await getCarsAdvertised(JSON.parse(currentUser).uid)
}
