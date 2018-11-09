import itemReducer from '../backend/reducers/itemReducer'

describe('itemReducer ', () => {
  let data
  beforeEach(() => {
    data = {type: '', payload: 'test'}
  })
  it('returns active item data', () => {
    data.type = 'GET_ITEM'
    expect(itemReducer({}, data)).toEqual({activeItem: 'test'})
  })
  it('returns progress data', () => {
    data.type = 'GET_PROGRESS'
    expect(itemReducer({}, data)).toEqual({progress: 'test'})
  })
  it('returns peopleModals data', () => {
    data.type = 'SET_PEOPLE_ARR'
    expect(itemReducer({}, data)).toEqual({peopleModals: 'test'})
  })
  it('updates peopleModals array', () => {
    data.type = 'SET_PEOPLE_VISIBILITY'
    data.payload = {visibility: true, num: 0}
    expect(itemReducer({peopleModals: [{visibility: false}]}, data)).toEqual({peopleModals: [{visibility: true}]})
  })
  it('returns loader data', () => {
    data.type = 'GET_LOADER'
    expect(itemReducer({}, data)).toEqual({loader: 'test'})
  })
  it('returns uploadStatus data', () => {
    data.type = 'GET_UPLOAD_STATUS'
    expect(itemReducer({}, data)).toEqual({uploadStatus: 'test'})
  })
  it('returns state as empty', () => {
    expect(itemReducer({}, data)).toEqual({})
  })
})
