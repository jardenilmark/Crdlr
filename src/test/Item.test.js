import React from 'react'
import "firebase/storage"
import shallow from './Enzyme.js'
import Item from '../frontend/components/Item'
import { Image } from 'semantic-ui-react'

describe('<Item />', () => {
  let wrapper
  beforeEach(() => {
    const item = {brand: 'Toyota', model: 'RAV4', type: 'Car', location: 'Cebu', image: 'RAV4.png'}
    wrapper = shallow(<Item item={item}/>)
  })
  it('renders <Item>', () => {
    expect(wrapper).toHaveLength(1)
  })
  it('lets load image not return anything', async () => {
    expect(await wrapper.instance().loadImage()).toBeUndefined()
  })
  it('renders <Image>', async () => {
    expect(wrapper.find(Image)).toHaveLength(1)
  })
})
