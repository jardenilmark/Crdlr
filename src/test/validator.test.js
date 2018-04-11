import Validator from '../frontend/validator'

const validator = new Validator()

describe('validator ', () => {
  it('returns false when value is null', () => {
    expect(validator.isValid('email')).toBeFalsy()
  })
  it('returns false when value length is 0', () => {
    expect(validator.isValid('email', '')).toBeFalsy()
  })
  it('returns true when email is valid', () => {
    expect(validator.isValid('email', 'abc@gmail.com')).toBeTruthy()
  })
  it('returns false when email is invalid', () => {
    expect(validator.isValid('email', 'abc@gm$ail.acom')).toBeFalsy()
    expect(validator.isValid('email', 'abc@gmail.@com')).toBeFalsy()
    expect(validator.isValid('email', 'abc@.acom')).toBeFalsy()
    expect(validator.isValid('email', '@gmail.acom')).toBeFalsy()
  })
  it('returns true when pass is valid', () => {
    expect(validator.isValid('pass', 'mj12121')).toBeTruthy()
    expect(validator.isValid('pass', 'password')).toBeTruthy()
    expect(validator.isValid('pass', 'lemaaooo')).toBeTruthy()
  })
  it('returns false when pass is invalid', () => {
    expect(validator.isValid('pass', '@asdasd2')).toBeFalsy()
    expect(validator.isValid('pass', '')).toBeFalsy()
    expect(validator.isValid('pass', 'aaaaaaaaaaaaaaaaaaaaaaa')).toBeFalsy()
    expect(validator.isValid('pass', 'asdasdasd*')).toBeFalsy()
  })
  it('returns true when gender is valid', () => {
    expect(validator.isValid('gender', 'Male')).toBeTruthy()
    expect(validator.isValid('gender', 'Female')).toBeTruthy()
  })
  it('returns false when pass is invalid', () => {
    expect(validator.isValid('gender', 'attackhelicopter')).toBeFalsy()
  })
  it('returns true when name is valid', () => {
    expect(validator.isValid('firstName', 'Mark')).toBeTruthy()
    expect(validator.isValid('lastName', 'Sab')).toBeTruthy()
  })
  it('returns false when name is invalid', () => {
    expect(validator.isValid('firstName', 'AL232AL')).toBeFalsy()
    expect(validator.isValid('lastName', 'A SA SA')).toBeFalsy()
  })
  it('returns true when address || message is valid', () => {
    expect(validator.isValid('address', '22312 Gen asa street')).toBeTruthy()
    expect(validator.isValid('message', 'Hello this is a message')).toBeTruthy()
  })
  it('returns false when address || message is invalid', () => {
    expect(validator.isValid('address', 'sassy@as')).toBeFalsy()
    expect(validator.isValid('message', '@INJECTING CODE')).toBeFalsy()
  })
  it('returns true when phone is valid', () => {
    expect(validator.isValid('address', '22312 Gen asa street')).toBeTruthy()
    expect(validator.isValid('message', 'Hello this is a message')).toBeTruthy()
  })
  it('returns false when phone is invalid', () => {
    expect(validator.isValid('address', 'sassy@as')).toBeFalsy()
  })
})
