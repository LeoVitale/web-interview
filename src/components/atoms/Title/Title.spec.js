import React from 'react'
import { mount } from 'enzyme'
import Title from './Title.jsx'

describe('<Title />', () => {
  const title = mount(<Title />)

  it('should render Title as expected', () => {
    expect(title).toMatchSnapshot()
  })
})
