import React from 'react';
import { mount } from 'enzyme';
import Button from './Button.jsx';

describe('<Button />', () => {
  const button = mount(<Button />);
  it('should render Button as expected', () => {
    expect(button).toMatchSnapshot();
  });
});
