import React from 'react'
import { mount } from 'enzyme'
import Avatar from './Avatar.jsx'

describe('<Avatar />', () => {
  const avatar = mount(<Avatar />)

  it('should render Avatar as expected', () => {
    expect(avatar).toMatchSnapshot()
  })
})
