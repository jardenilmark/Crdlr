import carReducer from '../frontend/redux/reducers/carReducer'

describe('carReducer ', () => {
  let data
  beforeEach(() => {
    data = { type: '', payload: 'test' }
  })
  it('returns allCars with value', () => {
    data.type = 'GET_CARS'
    expect(carReducer({}, data)).toEqual({allCars: 'test'})
  })
  it('returns filteredCars with value', () => {
    data.type = 'GET_FILTERED'
    expect(carReducer({}, data)).toEqual({filteredCars: 'test'})
  })
  it('returns brands with value', () => {
    data.type = 'GET_CAR_BRANDS'
    expect(carReducer({}, data)).toEqual({brands: 'test'})
  })
  it('returns types with value', () => {
    data.type = 'GET_CAR_TYPES'
    expect(carReducer({}, data)).toEqual({types: 'test'})
  })
  it('returns types with value', () => {
    data.type = 'GET_CARS_OWNER'
    expect(carReducer({}, data)).toEqual({advertisedCars: 'test'})
  })
  it('returns empty object', () => {
    expect(carReducer({}, data)).toEqual({})
  })
})
