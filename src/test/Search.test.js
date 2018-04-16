import React from 'react'
import 'firebase/storage'
import shallow from './Enzyme.js'
import SearchView from '../frontend/components/Views/SearchView'
import Dropdown from '../backend/containers/DropdownContainer'

describe('<SearchView />', () => {
  let wrapper
  let allCars
  const car = {brand: 'Toyota', model: 'RAV4', type: 'Car', location: 'iloilo'}
  const car2 = {brand: 'Honda', model: 'RAV5', type: 'SUV', location: 'iloilo'}
  const car3 = {brand: 'Toyota', model: 'RAV6', type: 'Car', location: 'Manila'}
  beforeEach(() => {
    wrapper = shallow(<SearchView getCars={jest.fn()} updateCarList={jest.fn()}/>)
    allCars = [car, car2, car3]
  })
  it('renders <SearchView>', () => {
    expect(wrapper).toHaveLength(1)
  })
  it('renders Item', () => {
    wrapper.setProps({filteredCars: allCars})
    const value = wrapper.instance().renderItems()
    expect(value).toHaveLength(3)
  })
  it('renders dropdown', () => {
    wrapper.setProps({allCars: allCars})
    expect(wrapper.find(Dropdown)).toHaveLength(1)
  })
})
