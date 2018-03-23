import React from 'react'
import "firebase/storage"
import shallow from './Enzyme.js'
import { Route } from 'react-router-dom'
import Body from '../frontend/components/Body'
import BodyListener from '../frontend/components/BodyListener'

describe('<Body />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Body />)
  })
  it('renders <Body>', () => {
    expect(wrapper).toHaveLength(1)
  })
  it('can set props', () => {
    wrapper.setProps({data: 'dummy'})
    expect(wrapper.instance().props.data).toBe('dummy')
  })
  it('contains <BodyListener />', () => {
    expect(wrapper.find(BodyListener)).toHaveLength(1)
  })
  it('contains <Route />', () => {
    expect(wrapper.find(Route)).toHaveLength(5)
  })
})
