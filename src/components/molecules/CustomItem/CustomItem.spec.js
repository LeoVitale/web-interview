import React from 'react'
import { mount } from 'enzyme'
import CustomItem from './CustomItem.jsx'

describe('<CustomItem />', () => {
  const customItem = mount(<CustomItem />)

  it('should render CustomItem as expected', () => {
    expect(customItem).toMatchSnapshot()
  })
})
