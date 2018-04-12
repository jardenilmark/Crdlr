import React from 'react'
import 'firebase/storage'
import shallow from './Enzyme.js'
import LoaderCustom from '../frontend/components/Items/LoaderCustom'
import { Dimmer, Loader, Header } from 'semantic-ui-react'

describe('<LoaderCustom />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<LoaderCustom filteredCars={[]}/>)
  })
  it('renders <LoaderCustom>', () => {
    expect(wrapper).toHaveLength(1)
  })
  it('renders a Dimmer and a Loder if filteredCars.length === 0 and loader is false', () => {
    expect(wrapper.find(Dimmer)).toHaveLength(1)
    expect(wrapper.find(Loader)).toHaveLength(1)
    expect(wrapper.html()).toContain('Preparing Selection')
  })
  it('renders a Header if filteredCars.length === 0 and loader is true ', () => {
    wrapper.setProps({loader: true})
    expect(wrapper.find(Header)).toHaveLength(1)
    expect(wrapper.html()).toContain('No Available Cars')
  })
  it('renders a div if filteredCars.length > 0 ', () => {
    wrapper.setProps({filteredCars: ['a', 'a']})
    expect(wrapper.html()).toContain('<div></div>')
  })
})
