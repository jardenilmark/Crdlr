import locationReducer from '../backend/reducers/locationReducer'

describe('locationReducer ', () => {
  let data
  beforeEach(() => {
    data = { type: '', payload: 'test' }
  })
  it('returns locations data', () => {
    data.type = 'GET_LOCATIONS'
    expect(locationReducer({}, data)).toEqual({locations: 'test'})
  })
  it('returns state as empty', () => {
    expect(locationReducer({}, data)).toEqual({})
  })
})
