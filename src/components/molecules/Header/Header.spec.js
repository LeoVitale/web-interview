import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { mount } from 'enzyme'
import Header from './Header.jsx'

describe('<Header />', () => {
  const header = mount(
    <Router>
      <Header />
    </Router>
  )

  it('should render Header as expected', () => {
    expect(header).toMatchSnapshot()
  })
})
