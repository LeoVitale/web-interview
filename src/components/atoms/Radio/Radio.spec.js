import React from 'react'
import { mount } from 'enzyme'
import Radio from './Radio.jsx'

describe('<Radio />', () => {
  const radio = mount(<Radio />)

  it('should render Radio as expected', () => {
    expect(radio).toMatchSnapshot()
  })
})
