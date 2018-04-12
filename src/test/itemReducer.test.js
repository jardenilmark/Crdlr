import itemReducer from '../backend/reducers/itemReducer'

describe('itemReducer ', () => {
  let data
  beforeEach(() => {
    data = { type: '', payload: 'test', num: 0, visibility: true }
  })
  it('returns active item data', () => {
    data.type = 'GET_ITEM'
    expect(itemReducer({}, data)).toEqual({activeItem: 'test'})
  })
  it('returns progress data', () => {
    data.type = 'GET_PROGRESS'
    expect(itemReducer({}, data)).toEqual({progress: 'test'})
  })
  it('returns itemModals data', () => {
    data.type = 'SET_MODAL_ARR'
    expect(itemReducer({}, data)).toEqual({itemModals: 'test'})
  })
  it('updates itemModals array', () => {
    data.type = 'SET_MODAL_VISIBILITY'
    expect(itemReducer({itemModals: [{visibility: false}]}, data)).toEqual({itemModals: [{visibility: false}]})
  })
  it('returns itemModals data', () => {
    data.type = 'SET_PEOPLE_ARR'
    expect(itemReducer({}, data)).toEqual({peopleModals: 'test'})
  })
  it('updates peopleModals array', () => {
    data.type = 'SET_PEOPLE_VISIBILITY'
    expect(itemReducer({peopleModals: [{visibility: false}]}, data)).toEqual({peopleModals: [{visibility: false}]})
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
