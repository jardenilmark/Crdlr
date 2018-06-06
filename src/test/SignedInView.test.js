import React from 'react'
import 'firebase/storage'
import shallow from './Enzyme.js'
import SignedInView from '../frontend/components/Views/SignedInView'
import { Menu } from 'semantic-ui-react'

describe('<SearchView />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<SignedInView/>)
  })
  it('renders <SignedInView>', () => {
    expect(wrapper).toHaveLength(1)
  })
  it('should have Menu.Menu and Menu.Items', () => {
    expect(wrapper.find(Menu.Menu).length).toBeGreaterThanOrEqual(1)
    expect(wrapper.find(Menu.Item).length).toBeGreaterThanOrEqual(1)
  })
})
