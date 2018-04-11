import React from 'react'
import 'firebase/storage'
import localStorage from './localStorageMock'
import shallow from './Enzyme.js'
import Login from '../frontend/components/UserInputs/Login'
import { Message } from 'semantic-ui-react'

describe('<Login />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Login/>)
    document.body.innerHTML = ''
  })
  it('renders <Login>', () => {
    expect(wrapper).toHaveLength(1)
  })
  it('shows an error message', () => {
    wrapper.setProps({status: 'failed'})
    expect(wrapper.find(Message)).toHaveLength(1)
  })
  it('returns false to a failed login', async () => {
    wrapper.setProps({setCurrentUser: jest.fn(), setLoginStatus: jest.fn()})
    document.body.innerHTML =
    `
    <input id='emailLogin' value='test@asd.com'/>
    <input id='passwordLogin' value='testom'/>
    `
    const value = await wrapper.instance().loginUser()
    expect(value).toBeFalsy()
  })
  it('returns true to a successful login', async () => {
    wrapper.setProps({setCurrentUser: jest.fn(), setLoginStatus: jest.fn()})
    document.body.innerHTML =
    `
    <input id='emailLogin' value='test@email.com'/>
    <input id='passwordLogin' value='password'/>
    `
    const value = await wrapper.instance().loginUser()
    expect(value).toBeTruthy()
  })
})
