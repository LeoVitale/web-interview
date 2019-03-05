import React from 'react'
import { mount } from 'enzyme'
import UserHeader from './UserHeader.jsx'

describe('<UserHeader />', () => {
  const userHeader = mount(<UserHeader />)

  it('should render UserHeader as expected', () => {
    expect(userHeader).toMatchSnapshot()
  })
})
