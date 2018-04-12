import React from 'react'
import 'firebase/storage'
import shallow from './Enzyme.js'
import ProgressBar from '../frontend/components/Items/ProgressBar'
import { Progress } from 'semantic-ui-react'

describe('<ProgressBar />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<ProgressBar/>)
  })
  it('renders <ProgressBar>', () => {
    expect(wrapper).toHaveLength(1)
  })
  it('renders a div if the progress bar has no progress prop', () => {
    expect(wrapper.find(<div/>)).toBeTruthy()
  })
  it('renders an active progress bar if progress is between 0 to 100', () => {
    wrapper.setProps({progress: 40})
    expect(wrapper.find(Progress)).toBeTruthy()
    expect(wrapper.find(Progress).prop('active')).toBeTruthy()
  })
  it('renders a progress bar with the prop success if progress is between 0 to 100', () => {
    wrapper.setProps({progress: 100})
    expect(wrapper.find(Progress)).toBeTruthy()
    expect(wrapper.find(Progress).prop('success')).toBeTruthy()
  })
})
