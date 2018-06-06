import React from 'react'
import 'firebase/storage'
import './localStorageMock'
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
})
