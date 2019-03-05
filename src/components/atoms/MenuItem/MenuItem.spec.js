import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { mount } from 'enzyme'
import MenuItem from './MenuItem.jsx'

describe('<MenuItem />', () => {
  const menuItem = mount(
    <Router>
      <MenuItem to="" />
    </Router>
  )

  it('should render MenuItem as expected', () => {
    expect(menuItem).toMatchSnapshot()
  })
})
