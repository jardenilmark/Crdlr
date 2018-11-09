import React from 'react'
import 'firebase/storage'
import './localStorageMock'
import shallow from './Enzyme.js'
import LoginContainer from '../backend/containers/LoginContainer'
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
