import 'firebase/storage'
import { isAcceptedKey, getNumberCarsSold } from '../frontend/inventoryActions'

describe('inventoryAction methods', () => {
  it('returns true if is an accepted key', () => {
    const arr = ['test', 'foo', 'boo']
    arr.forEach(e => {
      expect(isAcceptedKey(e)).toBeTruthy()
    })
  })
  it('returns false if key is in the banned keys', () => {
    const arr = ['peopleInterested', 'id']
    arr.forEach(e => {
      expect(isAcceptedKey(e)).toBeFalsy()
    })
  })
  it('gets the number of cars sold in the array', () => {
    const arr = [{sold: false}, {sold: true}, {sold: false}]
    expect(getNumberCarsSold(arr)).toEqual(1)
  })
})
