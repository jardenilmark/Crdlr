import React from 'react'
import 'firebase/storage'
import localStorage from './localStorageMock'
import shallow from './Enzyme.js'
import ConfirmationView from '../frontend/components/Views/ConfirmationView'

describe('<ConfirmationView />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<ConfirmationView genderOptions={[
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' }
    ]}
    setSuccess={jest.fn()} getUser={jest.fn()} item={{foo: 'foo'}}
    />)
  })
  it('renders <ConfirmationView>', () => {
    expect(wrapper).toHaveLength(1)
  })
})
