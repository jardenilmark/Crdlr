import React from 'react'
import "firebase/storage"
import shallow from './Enzyme.js'
import Item from '../frontend/components/Items/Item'
import { Image } from 'semantic-ui-react'

describe('<Item />', () => {
  let wrapper
  beforeEach(() => {
    const item = {brand: 'Toyota', model: 'RAV4', type: 'Car', location: 'Cebu', image: '352171216'}
    wrapper = shallow(<Item item={item} itemModals={[{visibility: true}]} id={0}/>)
  })
  it('renders <Item>', () => {
    expect(wrapper).toHaveLength(1)
  })
  it('renders <Image>', async () => {
    expect(wrapper.find(Image)).toHaveLength(1)
  })
})
