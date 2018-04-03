import React from 'react'
import "firebase/storage"
import shallow from './Enzyme.js'
import Search from '../frontend/components/Views/Search'
import { getFromDb } from '../backend/actions/carAction'
import { Dropdown, Dimmer, Loader, Header } from 'semantic-ui-react'
import Item from '../frontend/components/Items/Item'

describe('<Search />', () => {
  let wrapper
  let arr
  let allCars
  const car = {brand: 'Toyota', model: 'RAV4', type: 'Car', location: 'iloilo'}
  const car2 = {brand: 'Honda', model: 'RAV5', type: 'SUV', location: 'iloilo'}
  const car3 = {brand: 'Toyota', model: 'RAV6', type: 'Car', location: 'Manila'}
  beforeEach(() => {
    wrapper = shallow(<Search initialize={jest.fn()}/>)
    arr = ['Location', 'Brand', 'Type', 'Model']
    allCars = [car, car2, car3]
  })
  it('renders <Search>', () => {
    expect(wrapper).toHaveLength(1)
  })
  it('gets array for dropdown', () => {
    wrapper.setProps({allCars: allCars})
    const values = wrapper.instance().getDropdownValues(arr)
    expect(values).toHaveLength(4)
  })
  it('gets loader', () => {
    wrapper.setProps({loader: false})
    expect(wrapper.find(Dimmer)).toHaveLength(1)
  })
  it('gets No Available Cars sign', () => {
    wrapper.setProps({loader: true})
    expect(wrapper.find(Header)).toHaveLength(1)
  })
  it('renders Item', () => {
    wrapper.setProps({allCars: allCars, itemModals: true})
    const value = wrapper.instance().renderItems()
    expect(value).toHaveLength(3)
  })
  it('renders dropdown', () => {
    wrapper.setProps({allCars: allCars})
    wrapper.instance().getDropdownValues(arr)
    expect(wrapper.find(Dropdown)).toHaveLength(4)
  })
})
