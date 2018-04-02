import React from 'react'
import "firebase/storage"
import shallow from './Enzyme.js'
import SignedInView from '../backend/containers/signedInContainer'
import LoginContainer from '../backend/containers/loginContainer'
import { Menu, Header } from 'semantic-ui-react'
import TitleBar from '../frontend/components/Bars/TitleBar'

let wrapper
describe('<TitleBar /> ', () => {
  beforeEach(() => {
    wrapper = shallow(<TitleBar />)
  })
  it('renders <TitleBar>', () => {
    expect(wrapper).toHaveLength(1)
  })
  it('allows us to set props', () => {
    wrapper.setProps({foo: 'foo'})
    expect(wrapper.instance().props.foo).toBe('foo')
  })
  it('contains <SignedInView>', () => {
    wrapper.setProps({currentUser: 'dummy user'})
    expect(wrapper.find(SignedInView)).toHaveLength(1)
  })
  it('contains <LoginContainer>', () => {
    expect(wrapper.find(LoginContainer)).toHaveLength(1)
  })
  it('contains <Menu.Item>', () => {
    expect(wrapper.find(Menu.Item)).toHaveLength(5)
  })
  it('contains <Menu>', () => {
    expect(wrapper.find(Menu)).toHaveLength(1)
  })
  it('contains <Header>', () => {
    expect(wrapper.find(Header)).toHaveLength(1)
  })
})
