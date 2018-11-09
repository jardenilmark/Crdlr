import 'firebase/storage'
import { getDocumentValues, getDate } from '../frontend/documentHandler'

describe('documentHandler methods', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })
  it('get the values from documents', () => {
    document.body.innerHTML =
    `
    <input id='foo' value='foo'/>
    <input id='boo' value='boo'/>
    `
    const arr = ['foo', 'boo']
    expect(getDocumentValues(arr)).toEqual({foo: 'foo', boo: 'boo'})
  })
  it('converts new Date() format to yyyy-mm-dd', () => {
    const date = new Date('December 17, 1995')
    expect(getDate(date)).toBe('1995-12-17')
  })
})
