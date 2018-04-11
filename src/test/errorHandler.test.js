import 'firebase/storage'
import { getColor, isItemError, isCarCreateError } from '../frontend/errorHandler'
import localStorage from './localStorageMock'

describe('errorHandler methods', () => {
  it('returns red if there is an error', () => {
    expect(getColor(true)).toEqual('red')
  })
  it('returns white if there is no error', () => {
    expect(getColor(false)).toEqual('white')
  })
  it('checks if theres an item', async () => {
    expect(await isItemError(jest.fn(), ' ')).toBeFalsy()
  })
  it('gets all error messages and returns false if it does', () => {
    const car = {
      desc: 'test',
      price: 1323,
      brand: 'Brand',
      Type: 'tesla',
      location: 'Location',
      model: 'None'
    }
    expect(isCarCreateError(car, jest.fn(), undefined)).toBeFalsy()
  })
})
