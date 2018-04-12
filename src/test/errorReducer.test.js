import errorReducer from '../backend/reducers/errorReducer'

describe('errorReducer ', () => {
  let data
  beforeEach(() => {
    data = { type: '', payload: true }
  })
  it('returns emailError as true', () => {
    data.type = 'GET_ERROR_EMAIL'
    expect(errorReducer({}, data)).toEqual({emailError: true})
  })
  it('returns fnError as true', () => {
    data.type = 'GET_ERROR_FIRSTNAME'
    expect(errorReducer({}, data)).toEqual({fnError: true})
  })
  it('returns passError as true', () => {
    data.type = 'GET_ERROR_PASS'
    expect(errorReducer({}, data)).toEqual({passError: true})
  })
  it('returns phoneError as true', () => {
    data.type = 'GET_ERROR_PHONE'
    expect(errorReducer({}, data)).toEqual({phoneError: true})
  })
  it('returns genderError as true', () => {
    data.type = 'GET_ERROR_GENDER'
    expect(errorReducer({}, data)).toEqual({genderError: true})
  })
  it('returns creditCardError as true', () => {
    data.type = 'GET_ERROR_CREDITCARD'
    expect(errorReducer({}, data)).toEqual({creditCardError: true})
  })
  it('returns addressError as true', () => {
    data.type = 'GET_ERROR_ADDRESS'
    expect(errorReducer({}, data)).toEqual({addressError: true})
  })
  it('returns expirationDateError as true', () => {
    data.type = 'GET_ERROR_EXPIRATIONDATE'
    expect(errorReducer({}, data)).toEqual({expirationDateError: true})
  })
  it('returns every error as false', () => {
    data.type = 'GET_SUCCESS'
    expect(errorReducer({}, data)).toEqual({
      emailError: false,
      fnError: false,
      lnError: false,
      passError: false,
      phoneError: false,
      genderError: false,
      creditCardError: false,
      addressError: false
    })
  })
  it('returns empty object', () => {
    expect(errorReducer({}, data)).toEqual({})
  })
})
