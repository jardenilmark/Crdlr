import React from 'react'
import "firebase/storage"
import shallow from './Enzyme.js'
import App from '../frontend/components/App'
import localStorage from './localStorageMock'
import TitleBar from '../frontend/components/Bars/TitleBar'
import Body from '../frontend/components/Body'

describe('<App />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App setCurrentUser={jest.fn()}/>)
  })
  it('renders <App>', () => {
    expect(wrapper).toHaveLength(1)
  })
  it('accepts props', () => {
    wrapper.setProps({app: 'app'})
    expect(wrapper.instance().props.app).toEqual('app')
  })
  it('renders <TitleBar>', () => {
    expect(wrapper.find(TitleBar)).toHaveLength(1)
  })
  it('renders <Body>', () => {
    expect(wrapper.find(Body)).toHaveLength(1)
  })
})
