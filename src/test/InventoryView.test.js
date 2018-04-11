import React from 'react'
import "firebase/storage"
import localStorage from './localStorageMock'
import shallow from './Enzyme.js'
import InventoryView from '../frontend/components/Views/InventoryView'
import { Table } from 'semantic-ui-react'

describe('<InventoryView />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<InventoryView/>)
  })
  it('renders <InventoryView>', () => {
    expect(wrapper).toHaveLength(1)
  })
  it('renders a table', () => {
    expect(wrapper.find(Table)).toHaveLength(1)
    expect(wrapper.find(Table.Header).length).toBeGreaterThanOrEqual(1)
    expect(wrapper.find(Table.Row).length).toBeGreaterThanOrEqual(1)
    expect(wrapper.find(Table.Body).length).toBeGreaterThanOrEqual(1)
    expect(wrapper.find(Table.Footer).length).toBeGreaterThanOrEqual(1)
  })
})
