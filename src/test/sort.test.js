import { compareData } from '../backend/sort'

describe('sort ', () => {
  it('sorts the array alphabetically based on an object property', () => {
    const arr = [{test: 'z'}, {test: 'b'}, {test: 'e'}]
    compareData(arr, 'test')
    expect(arr).toEqual([{test: 'b'}, {test: 'e'}, {test: 'z'}])
  })
})
