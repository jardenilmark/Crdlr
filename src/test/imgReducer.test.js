import imgReducer from '../frontend/redux/reducers/imgReducer'

describe('imgReducer ', () => {
  let data
  beforeEach(() => {
    data = { type: '', payload: 'test' }
  })
  it('returns file data', () => {
    data.type = 'GET_IMAGE_FILE'
    expect(imgReducer({}, data)).toEqual({file: 'test'})
  })
  it('returns state as empty', () => {
    expect(imgReducer({}, data)).toEqual({})
  })
})
