import loginReducer from '../frontend/redux/reducers/loginReducer'

describe('loginReducer ', () => {
  let data
  beforeEach(() => {
    data = { type: '', payload: 'test' }
  })
  it('returns login status', () => {
    data.type = 'GET_LOGIN_STATUS'
    expect(loginReducer({}, data)).toEqual({status: 'test'})
  })
  it('returns state as empty', () => {
    expect(loginReducer({}, data)).toEqual({})
  })
})
