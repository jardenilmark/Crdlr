import React from 'react'
import "firebase/storage"
import shallow from './Enzyme.js'
import App from '../frontend/components/Views/App'
import localStorage from './localStorageMock'
import TitleBar from '../backend/containers/titleBarContainer'
import BodyListener from '../frontend/components/Views/BodyListener'
import { Route } from 'react-router-dom'

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
  it('renders <BodyListener>', () => {
    expect(wrapper.find(BodyListener)).toHaveLength(1)
  })
  it('contains <Route />', () => {
    expect(wrapper.find(Route).length).toBeGreaterThan(1)
  })
})
