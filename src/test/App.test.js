import React from 'react'
import "firebase/storage"
import shallow from './Enzyme.js'
import AppView from '../frontend/components/Views/AppView'
import TitleBar from '../backend/containers/TitleBarContainer'
import BodyListener from '../backend/containers/BodyContainer'
import { Route } from 'react-router-dom'

describe('<AppView />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<AppView setCurrentUser={jest.fn()}/>)
  })
  it('renders <AppView>', () => {
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
