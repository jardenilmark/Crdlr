import React from 'react'
import 'firebase/storage'
import localStorage from './localStorageMock'
import shallow from './Enzyme.js'
import DropdownCustom from '../frontend/components/Items/DropdownCustom'
import { Grid, Dropdown } from 'semantic-ui-react'

describe('<DropdownCustom />', () => {
  let wrapper
  let arr
  beforeEach(() => {
    wrapper = shallow(<DropdownCustom allCars={[{location: 'foo', brand: 'boo'}]}/>)
    arr = ['Location', 'Brand']
  })
  it('renders <DropdownCustom>', () => {
    expect(wrapper).toHaveLength(1)
  })
  it('gets the values from allCars and turn them to dropdown values', () => {
    const values = wrapper.instance().getDropdownValues(arr)
    expect(values).toHaveLength(2)
    expect(values).toEqual([
      [{key: 'foo', text: 'foo', value: 'foo'}],
      [{key: 'boo', text: 'boo', value: 'boo'}]
    ])
  })
  it('gets the dropdowns to render', () => {
    const values = wrapper.instance().renderDropDowns()
    expect(values).toHaveLength(4)
    expect(wrapper.find(Grid)).toBeTruthy()
    expect(wrapper.find(Dropdown)).toBeTruthy()
  })
})
