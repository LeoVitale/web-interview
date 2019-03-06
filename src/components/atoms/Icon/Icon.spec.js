import React from 'react'
import { mount } from 'enzyme'
import Icon from './Icon.jsx'

describe('<Icon />', () => {
  const icon = mount(<Icon />)

  it('should render Icon as expected', () => {
    expect(icon).toMatchSnapshot()
  })
})
